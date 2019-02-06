DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

USE note_db;

CREATE TABLE notes(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50),
  note VARCHAR(255) NOT NULL
);

INSERT INTO notes(title, note)
VALUES("First Note", "Do a thing and another thing");
INSERT INTO notes(title, note)
VALUES("Second Note", "Finish Homework");
INSERT INTO notes(title, note)
VALUES("Third Note", "Submit Homework");