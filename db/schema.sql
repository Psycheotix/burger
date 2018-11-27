-- delete this database in case we already have it.
	DROP DATABASE IF EXISTS burger_db;

-- Create the burgers_db.
	CREATE DATABASE burger_db;

-- Switch to or use the burgers_db.
	USE vob9zgh4incw75yd;

-- Create a burgers table with these fields:
	CREATE TABLE burgers (
-- id: an auto incrementing int that serves as the primary key.
	id INT NOT NULL AUTO_INCREMENT,
-- burger_name: a string.
	burger_name VARCHAR(100),
	-- devoured: a boolean.
	devoured BOOLEAN DEFAULT false,

	createdAt TIMESTAMP NOT NULL,

	PRIMARY KEY (id)
);
