-- 1  Jonie Weber-Williams just quit, remove her record from the table.
DELETE FROM nikkiscompany
WHERE firstname = 'Jonie';

-- 2 It's time for budget cuts. Remove all employees who are making over 70000 dollars.
DELETE FROM nikkiscompany
WHERE salary > 70000;

-- The drop table command is used to delete a table and all rows in the table.

-- To delete an entire table including all of its rows, issue the drop table command followed by the tablename. drop table is different from deleting all of the records in the table. Deleting all of the records in the table leaves the table including column and constraint information. Dropping the table removes the table definition as well as all of its rows.
-- EXAMPLE:
DROP TABLE myemployees_ts0211;
