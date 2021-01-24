-- It is time to insert data into your new employee table.

-- Your first three employees are the following:

-- Jonie Weber, Secretary, 28, 19500.00
-- Potsy Weber, Programmer, 32, 45300.00
-- Dirk Smith, Programmer II, 45, 75020.00

-- ***look into batch insert keyword

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Jonie', 'Weber', 'Secretary', 28, 19500.00);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Potsy', 'Weber', 'Programmer', 32, 45300.00);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Dirk', 'Smith', 'Programmer II', 45, 75020.00);

-- Enter these employees into your table first, and then insert at least 5 more of your own list of employees in the table.

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Nicoletta', 'Monegain', 'Junior Data Analyst', 31, 47000);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Ashley', 'Wheeler', 'Business Analyst', 40, 52000);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Bob', 'Builder', 'Independent Contractor', 34, 32000);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Kiki', 'Brown', 'Consultant', 36, 42000);

INSERT INTO nikkiscompany
(firstname, lastname, title, age, salary)
VALUES ('Younes', 'Wheeler', 'Client Specialist', 35, 43000);


-- 1 Select all columns for everyone in your employee table.
SELECT * FROM nikkiscompany;

-- 2 Select all columns for everyone with a salary over 30000.
SELECT * FROM nikkiscompany;
WHERE salary > 30000;

-- 3 Select first and last names for everyone that's under 30 years old.
SELECT firstname, lastname
FROM nikkiscompany
WHERE age < 30;

-- 4 Select first name, last name, and salary for anyone with "Programmer" in their title.

SELECT firstname, lastname, salary
FROM nikkiscompany
WHERE title LIKE '%Programmer%';

-- 5 Select all columns for everyone whose last name contains "ebe".

SELECT * FROM nikkiscompany
WHERE lastname LIKE '%ebe%';

-- 6 Select the first name for everyone whose first name equals "Potsy".

SELECT firstname 
FROM nikkiscompany
WHERE firstname = 'Potsy';

-- 7 Select all columns for everyone over 80 years old.

SELECT * FROM nikkiscompany
WHERE age > 80;

-- 8 Select all columns for everyone whose last name ends in "ith".

SELECT * FROM nikkiscompany
WHERE lastname LIKE '%ith';