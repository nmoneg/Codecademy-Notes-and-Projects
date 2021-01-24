-- ***The HAVING clause should follow the GROUP BY clause

-- 1 How many people are in each unique state in the customers table that have more than one person in the state? Select the state and display the number of how many people are in each if it's greater than 1.

SELECT state, COUNT(state)
FROM customers
GROUP BY state
HAVING COUNT(state) > 1;

-- 2 From the items_ordered table, select the item, maximum price, and minimum price for each specific item in the table. Only display the results if the maximum price for one of the items is greater than 190.00.

SELECT item, MAX(price), MIN(price)
FROM items_ordered
GROUP BY item
HAVING MAX(price) > 190.00;

-- 3 How many orders did each customer make? Use the items_ordered table. Select the customerid, number of orders they made, and the sum of their orders if they purchased more than 1 item.

SELECT customerid, COUNT(customerid), SUM(price)
FROM items_ordered
GROUP BY customerid
HAVING COUNT(customerid) > 1;