var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('country.db');
db.run("INSERT INTO caribbeanNation (name) VALUES (?), (?), (?), (?), (?)",
  'Cuba',
  'Jamica', 
  'Haiti', 
  'Puerto Rico',
  'Dominican Republic',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
db.run("INSERT INTO country (overview, sports, musicAndDance, food, famousPeople, caribbeanNation_id) VALUES (?, ?, ?, ?, ?, ?)",
 'Cuba is a very famous country for the castro era', 'Cuba dispite what many would believe is actually a very strong nation in baseball amoung other well know latin sports', 'Cuba has a very well know type of dance based after the mambo', 'Cuba has a vert traditional food type for latin countries', 'Cuba has famous people like baseball legend puig', 1,
  function(err) {
    if (err) {
      throw err;
    }
  }
);
db.run("INSERT INTO country (overview, sports, musicAndDance, food, famousPeople, caribbeanNation_id) VALUES (?, ?, ?, ?, ?, ?)",
 'Cuba is a very famous country for the castro era', 'Cuba dispite what many would believe is actually a very strong nation in baseball amoung other well know latin sports', 'Cuba has a very well know type of dance based after the mambo', 'Cuba has a vert traditional food type for latin countries', 'Cuba has famous people like baseball legend puig', 2,
  function(err) {
    if (err) {
      throw err;
    }
  }
);
db.run("INSERT INTO country (overview, sports, musicAndDance, food, famousPeople, caribbeanNation_id) VALUES (?, ?, ?, ?, ?, ?)",
 'Cuba is a very famous country for the castro era', 'Cuba dispite what many would believe is actually a very strong nation in baseball amoung other well know latin sports', 'Cuba has a very well know type of dance based after the mambo', 'Cuba has a vert traditional food type for latin countries', 'Cuba has famous people like baseball legend puig', 3,
  function(err) {
    if (err) {
      throw err;
    }
  }
);
db.run("INSERT INTO country (overview, sports, musicAndDance, food, famousPeople, caribbeanNation_id) VALUES (?, ?, ?, ?, ?, ?)",
 'Cuba is a very famous country for the castro era', 'Cuba dispite what many would believe is actually a very strong nation in baseball amoung other well know latin sports', 'Cuba has a very well know type of dance based after the mambo', 'Cuba has a vert traditional food type for latin countries', 'Cuba has famous people like baseball legend puig', 4,
  function(err) {
    if (err) {
      throw err;
    }
  }
);
db.run("INSERT INTO country (overview, sports, musicAndDance, food, famousPeople, caribbeanNation_id) VALUES (?, ?, ?, ?, ?, ?)",
 'Cuba is a very famous country for the castro era', 'Cuba dispite what many would believe is actually a very strong nation in baseball amoung other well know latin sports', 'Cuba has a very well know type of dance based after the mambo', 'Cuba has a vert traditional food type for latin countries', 'Cuba has famous people like baseball legend puig', 5,
  function(err) {
    if (err) {
      throw err;
    }
  }
);