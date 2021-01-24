SELECT * FROM nikkiscompany;

-- 1 Jonie Weber just got married to Bob Williams. She has requested that her last name be updated to Weber-Williams.

UPDATE nikkiscompany
SET lastname = 'Weber-Williams'
WHERE firstname = 'Jonie' AND lastname ='Weber';

-- 2 Dirk Smith's birthday is today, add 1 to his age.

UPDATE nikkiscompany
SET age = 46
WHERE firstname = 'Dirk';

-- 3 All secretaries are now called "Administrative Assistant". Update all titles accordingly.

UPDATE nikkiscompany
SET title = 'Administrative Assistant'
WHERE title = 'Secretary';

-- 4 Everyone that's making under 30000 are to receive a 3500 a year raise.
UPDATE nikkiscompany
SET salary = salary + 3500
WHERE salary < 30000;

-- 5 Everyone that's making over 33500 are to receive a 4500 a year raise.
UPDATE nikkiscompany
SET salary = salary + 4500
WHERE salary > 33500;

-- 6 All "Programmer II" titles are now promoted to "Programmer III".
UPDATE nikkiscompany
SET title = 'Programmer III'
WHERE title = 'Programmer II';

-- 7 All "Programmer" titles are now promoted to "Programmer II".
UPDATE nikkiscompany
SET title = 'Programmer II'
WHERE title = 'Programmer';


