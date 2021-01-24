-- This is the first query (#3):

-- SELECT DISTINCT year from population_years;

-- Add your additional queries below:

-- (4)
-- SELECT * 
-- FROM population_years 
-- WHERE country = 'Gabon' 
-- ORDER BY population DESC 
-- LIMIT 1;

-- (5): "Niue
-- Falkland Islands (Islas Malvinas)
-- Montserrat
-- Saint Pierre and Miquelon
-- Saint Helena
-- Nauru
-- Cook Islands
-- Turks and Caicos Islands
-- Virgin Islands, British
-- Gibraltar"
-- SELECT * FROM population_years WHERE year = 2005 ORDER BY population ASC LIMIT 10;

-- (6): 11 countries
-- SELECT * FROM population_years WHERE year = 2010 AND population > 100;

-- (7): 9 countries
-- SELECT DISTINCT country FROM population_years WHERE country LIKE '%Islands%';


-- (8): Difference: 28.29173 Million
-- SELECT * FROM population_years WHERE country = 'Indonesia' AND year = 2000 OR country = 'Indonesia' AND year = 2010;


