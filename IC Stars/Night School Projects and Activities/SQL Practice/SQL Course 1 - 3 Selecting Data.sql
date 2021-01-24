-- #3 - SELECTING DATA

-- 1 - Display the first name and age for everyone that's in the table.

SELECT first, age 
FROM empinfo;

-- 2 - Display the first name, last name, and city for everyone that's not from Payson.

SELECT first, last, city 
FROM empinfo
WHERE city <> 'Payson';

-- 3 - Display all columns for everyone that is over 40 years old.
-- (When using *, make sure the FROM statement is on the same line to avoid errors)

SELECT * FROM empinfo             
WHERE age > 40;

-- 4 - Display the first and last names for everyone whose last name ends in an "ay".

SELECT first, last 
FROM empinfo
WHERE last LIKE '%ay';

-- 5 - Display all columns for everyone whose first name equals "Mary".

SELECT * FROM empinfo
WHERE first = 'Mary';

-- 6 - Display all columns for everyone whose first name contains "Mary".

SELECT * FROM empinfo
WHERE first LIKE '%Mary%';

