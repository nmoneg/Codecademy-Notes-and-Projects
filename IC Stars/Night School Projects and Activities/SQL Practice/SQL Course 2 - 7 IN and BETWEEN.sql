-- NOT IN and NOT BETWEEN can be used to designate queries you don't want to include those rows

-- 1 Select the date, item, and price from the items_ordered table for all of the rows that have a price value ranging from 10.00 to 80.00.
SELECT order_date, item, price
FROM items_ordered
WHERE price BETWEEN 10.00 AND 80.00;

-- 2 Select the firstname, city, and state from the customers table for all of the rows where the state value is either: Arizona, Washington, Oklahoma, Colorado, or Hawaii.
SELECT firstname, city, state
FROM customers
WHERE state IN ('Arizona', 'Washington', 'Oklahoma', 'Colorado', 'Hawaii');