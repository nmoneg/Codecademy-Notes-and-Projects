-- 1 How many people are in each unique state in the customers table? Select the state and display the number of people in each. Hint: count is used to count rows in a column, sum works on numeric data only.

-- ***syntax matters! Don't forget commas
SELECT state, COUNT(state)
FROM customers
GROUP BY state;

-- 2 From the items_ordered table, select the item, maximum price, and minimum price for each specific item in the table. Hint: The items will need to be broken up into separate groups.

SELECT item, MAX(price), MIN(price)
FROM items_ordered
GROUP BY item;

-- 3 How many orders did each customer make? Use the items_ordered table. Select the customerid, number of orders they made, and the sum of their orders. Click the Group By answers link below if you have any problems.
SELECT customerid, COUNT(customerid), SUM(price)
FROM items_ordered
GROUP BY customerid;
