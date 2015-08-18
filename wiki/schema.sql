DROP TABLE IF EXISTS caribbeanNation;
CREATE TABLE caribbeanNation(
id INTEGER Primary Key AUTOINCREMENT,
name VARCHAR
);
 DROP TABLE IF EXISTS country;
CREATE TABLE country(
id INTEGER Primary Key AUTOINCREMENT,
email VARCHAR,
overview VARCHAR,
sports VARCHAR,
musicAndDance VARCHAR,
food VARCHAR,
famousPeople VARCHAR,
userName VARCHAR,
timestamp DATE DEFAULT (datetime('now','localtime')),
caribbeanNation_id INTEGER,
FOREIGN KEY(caribbeanNation_id) references caribbeanNation (id)
);