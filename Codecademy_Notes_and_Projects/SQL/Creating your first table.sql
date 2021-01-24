DROP TABLE celebs;

CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  name TEXT,
  birthday DATE
);

INSERT INTO friends 
VALUES (1, 'Jane Doe', '1990-05-30');

INSERT INTO friends 
VALUES (2, 'Todd Craines', '1989-07-15');

INSERT INTO friends 
VALUES (3, 'Jimmy Hoffa', '1973-03-23');

UPDATE friends 
SET name = 'Jane Smith'
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends 
SET email = 'jane@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'todd@gmail.com'
WHERE id = 2;

UPDATE friends
SET email = 'jim@gmail.com'
WHERE id = 3;

DELETE FROM friends
WHERE id = 1;

SELECT * FROM friends;
