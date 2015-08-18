var sqlite3 = require("sqlite3").verbose();
var express = require('express');
var db = new sqlite3.Database('country.db');
var fs = require("fs");
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser')
var urlencodedBodyParser = bodyParser.urlencoded({extended:false});
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');

app.use(methodOverride('_method'));
app.use(urlencodedBodyParser);
app.use(express.static('public'));
app.set("view_engine","ejs");

//config
app.listen(3000, function() {
  console.log("I'm listening!");
});

//Homepage listing all the countries
var html = fs.readFileSync('./views/index.ejs', 'utf8');
app.get('/', function(req, res) {
  db.all('SELECT * from caribbeanNation', function (err, rows) {
  	if (err) {
  		console.log(err);
  	} else {
  			console.log("loaded Homepage");	
  			var rendered = ejs.render(html, {rows:rows});
			res.send(rendered);
  	}
  });
});

//Get an individual country's page
app.get("/country/:id", function (req, res){
	var id = req.params.id;
	console.log(id);
	db.get('SELECT country.id, country.overview, country.sports, country.musicAndDance, country.food, country.famousPeople, country.userName, country.timestamp, caribbeanNation.name as alias FROM country INNER JOIN caribbeanNation ON country.caribbeanNation_id = caribbeanNation.id WHERE country.id=?', id, function (err, rows){
		if (err){
			console.log(err);
		} else {
			console.log("loaded a country");
			console.log(rows);

			var template = fs.readFileSync("./views/country.ejs", "utf8");
			var html = ejs.render(template, rows);
			res.send(html);
		}
	});
});
/// get the edit page
app.get("/country/:id/edit", function (req, res){
	var editForm = fs.readFileSync("./views/countryEdit.ejs", "utf8");
	var id = req.params.id;
	db.get('SELECT country.id, country.email, country.overview, country.sports, country.musicAndDance, country.food, country.famousPeople, country.userName, caribbeanNation.name as alias FROM country INNER JOIN caribbeanNation ON country.caribbeanNation_id = caribbeanNation.id WHERE country.id=?', id, function (err, rows){
		if (err){
			console.log(err);			
		} else {
			var rendered = ejs.render(editForm, rows);
			res.send(rendered); 
		}
	});
});

// update an individual country's page
app.put('/country/:id', function(req, res) {
	var id = req.params.id;
	var updateThis = req.body;
	console.log(req);
	db.get('SELECT country.id, country.email, country.overview, country.sports, country.musicAndDance, country.food, country.famousPeople, country.userName, caribbeanNation.name as alias FROM country INNER JOIN caribbeanNation ON country.caribbeanNation_id = caribbeanNation.id WHERE country.id=?', id, function (err, rows){
		if (err){
			console.log(err);			
		} else {
			var transporter = nodemailer.createTransport();
			transporter.sendMail({
			    from: 'rinxxox@gmail.com',
			    to: updateThis.email,
			    subject: 'Your article was updated',
			    text: 'the article you wrote was edited'
			});
			console.log(transporter);
		}
	});
	db.get('UPDATE country SET email=?, overview=?, sports=?, musicAndDance=?, food=?, userName=?, famousPeople=?, timestamp=(datetime("now","localtime")) WHERE id=?', updateThis.email, updateThis.overview, updateThis.sports, updateThis.musicAndDance, updateThis.food, updateThis.userName, updateThis.famousPeople, id, function (err, rows){
		if (err){
			console.log(err);
		} else {
			res.redirect("/");
		}
	});  
 
});