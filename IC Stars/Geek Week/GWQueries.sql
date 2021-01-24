
SELECT * FROM Categories;
SELECT * FROM Customers;
SELECT * FROM Employees;
SELECT * FROM [Order Details];
SELECT * FROM Orders;
SELECT * FROM Products;
SELECT * FROM Shippers;
SELECT * FROM Suppliers;

------------------------------------------------------
SELECT * FROM Suppliers;
SELECT * FROM Products;
SELECT * FROM Categories;

--Task 01 - Product catalog 
--Create a query that retrieves all the Supplier Company Names, Product Names, and Category Names in one table.

SELECT Suppliers.CompanyName, Products.ProductName, Categories.CategoryName
FROM Suppliers
JOIN Products
ON Suppliers.SupplierID = Products.SupplierID
JOIN Categories
ON Products.CategoryID = Categories.CategoryID;

--Task 02 - Best Customers
-- Create a query that retrieves the top 5 best customers of all time and their total sales. Use the Order Subtotal view already included. 

SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM [Order Details];


SELECT TOP 5 Customers.CompanyName, SUM([Order Details].unitprice * [Order Details].Quantity * (1.00 - discount) * 100/100) AS SumofSubtotal
FROM Customers 
JOIN Orders
ON Customers.CustomerID = Orders.CustomerID
JOIN [Order Details]
ON Orders.OrderID = [Order Details].OrderID
GROUP BY CompanyName 
ORDER BY SumofSubtotal DESC;

SELECT TOP 5 C.CompanyName, ROUND(SUM(Unitprice*Quantity * (1.00 - discount)), 2) AS SumofSubtotal
FROM Customers AS C, Orders AS O, [Order Details] AS OD
WHERE C.CustomerID = O.CustomerID
AND O.OrderID = OD.OrderID
GROUP BY C.CompanyName
ORDER BY SumofSubtotal DESC;

SELECT TOP 5 C.CompanyName, ROUND(SUM(unitprice*quantity*(1-discount)),2) AS SumofSubtotal
FROM Customers AS C, Orders AS O, [Order Details] AS OD
WHERE C.CustomerID = O.CustomerID
AND O.OrderID = OD.OrderID
GROUP BY C.CompanyName
ORDER BY SumofSubtotal DESC;


--Task 03 - Best Customers Per Employee
-- Create a query that retrieves the total sales to each customer who spent more than $5,000 by each employee (Hint: use the Order Subtotals view already in the database). The result should be sorted ascending for employee last name and then the total descending within each employee.

SELECT * FROM Employees;
SELECT * FROM Customers;
SELECT * FROM [Order Details];
SELECT * FROM Orders;

SELECT Employees.LastName, Employees.FirstName, Customers.CompanyName, SUM(unitprice * Quantity * (1.00 - discount)) AS Subtotal
FROM Employees, Customers, Orders, [Order Details]
WHERE Customers.CustomerID = Orders.CustomerID AND Employees.EmployeeID = Orders.EmployeeID AND Orders.OrderID = [Order Details].OrderID
GROUP BY LastName, FirstName, CompanyName
HAVING SUM(unitprice * Quantity * (1.00 - discount))> 5000
ORDER BY lastname,Subtotal DESC;

SELECT E.LastName, E.FirstName, C.CompanyName, ROUND(SUM(unitprice*quantity*(1-discount)),2) AS SumofSubtotal
FROM Employees AS E, Customers AS C, Orders AS O, [Order Details] AS OD
WHERE E.EmployeeID = O.EmployeeID
AND C.CustomerID = O.CustomerID
AND OD.OrderID = O.OrderID
GROUP BY LastName, FirstName, CompanyName
HAVING (SUM(unitprice*quantity*(1-discount))) > 5000
ORDER BY LastName, SumofSubtotal DESC;

--- Task 4 - Raw Sales Data
---Create a query that retrieves a raw dump of the order date, sales list price (e.g. no discount applied), and category name of the product sold. This information will be used to generate the forecast in Excel.

SELECT * FROM Orders;
SELECT * FROM Products;
SELECT * FROM [Order Details];
SELECT * FROM Categories;


SELECT CONVERT(VARCHAR, O.OrderDate, 101) AS 'Order Date', (OD.UnitPrice * OD.Quantity) AS SalePrice, C.CategoryName 
FROM Orders AS O, Products AS P, [Order Details] AS OD, Categories AS C
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID;

SELECT CONVERT(VARCHAR, O.OrderDate, 101) AS 'Order Date', (OD.UnitPrice*Quantity) AS SalePrice, C.CategoryName
FROM Orders AS O, [Order Details] AS OD, Products AS P, Categories AS C
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID;

SELECT FORMAT(O.OrderDate, 'd') AS 'Order Date', (OD.UnitPrice*Quantity) AS SalePrice, C.CategoryName
FROM Orders AS O, [Order Details] AS OD, Products AS P, Categories AS C
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID;


-- Task 9 -- 
SELECT * FROM [Order Details];

SELECT FORMAT(O.OrderDate, 'd') AS 'Order Date', (OD.UnitPrice*Quantity) AS SalePrice, C.CategoryName, ((OD.UnitPrice*Quantity)*Discount) AS 'Sale Discount'
FROM Orders AS O, [Order Details] AS OD, Products AS P, Categories AS C
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID;

-- Task 11 --

SELECT FORMAT(O.OrderDate, 'd') AS 'Order Date', (OD.UnitPrice*Quantity) AS SalePrice, C.CategoryName, ((OD.UnitPrice*Quantity)*Discount) AS 'Sale Discount', FORMAT(OD.Discount, 'P0') AS 'Discount'
FROM Orders AS O, [Order Details] AS OD, Products AS P, Categories AS C
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID;

-- Task 13 --

SELECT * FROM Employees;
SELECT * FROM [Order Details];
SELECT * FROM Orders;
SELECT * FROM Categories;
SELECT * FROM Products;


SELECT E.LastName, FORMAT(O.OrderDate, 'd') AS 'Order Date', (OD.UnitPrice*Quantity) AS SalePrice, C.CategoryName, ((OD.UnitPrice*Quantity)*Discount) AS 'Sale Discount', FORMAT(OD.DISCOUNT, 'P0') AS 'Discount'
FROM Orders AS O, [Order Details] AS OD, Products AS P, Categories AS C, Employees AS E
WHERE O.OrderID = OD.OrderID
AND OD.ProductID = P.ProductID
AND P.CategoryID = C.CategoryID
AND E.EmployeeID = O.EmployeeID
ORDER BY CategoryName;




