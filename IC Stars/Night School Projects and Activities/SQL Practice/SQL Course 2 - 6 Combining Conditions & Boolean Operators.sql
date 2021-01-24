-- sqlcourse does not accept != for does not equals, only <>

-- 1 Select the customerid, order_date, and item from the items_ordered table for all items unless they are 'Snow Shoes' or if they are 'Ear Muffs'. Display the rows as long as they are not either of these two items.
SELECT customerid, order_date, item
FROM items_ordered
WHERE item <> 'Snow Shoes' AND item <> 'Ear Muffs';

-- 2 Select the item and price of all items that start with the letters 'S', 'P', or 'F'.
SELECT item, price
FROM items_ordered
WHERE item LIKE 'S%' OR item LIKE 'P%' OR item LIKE 'F%';
