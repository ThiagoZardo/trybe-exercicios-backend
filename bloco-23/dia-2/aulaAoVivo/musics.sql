CREATE DATABASE IF NOT EXISTS musics;

USE musics;

CREATE TABLE songs
(
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  album VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO songs (name, album)

VALUES ('Carry On','Angels Cry'),
  ('Dawn of Victory','Symphony of Enchanted Lands'),
  ('Mirror Mirror','Nightfall in Middle Earth'),
  ('Distant Thunder','Ritual'),
  ('I Want Out','Keeper of the Seven Keys II');

CREATE TABLE artists
(
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  genre VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO artists (name, genre)

VALUES ("Angra", "power metal"),
  ("Racionais MC's", "rap"),
  ("Elis Regina", "MPB"),
  ('Nina Simone', 'R&B');