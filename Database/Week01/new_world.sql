USE new_world;

-- 1. What are the names of countries with population greater than 8 million
SELECT Name FROM country WHERE population > 8000000;

-- 2. What are the names of countries that have “land” in their names ?
SELECT Name FROM country WHERE name LIKE '%land';

-- 3. What are the names of the cities with population in between 500,000 and 1 million ?
SELECT name FROM country WHERE population BETWEEN 500000 AND 1000000;

-- 4. What's the name of all the countries on the continent ‘Europe’ ?
SELECT name FROM country WHERE Continent LIKE '%Europe%';

-- 5. List all the countries in the descending order of their surface areas.
SELECT name FROM country ORDER BY SurfaceArea DESC;

-- 6.What are the names of all the cities in the Netherlands?
SELECT city.Name, country.Name FROM country INNER JOIN city 
ON city.countryCode = country.code WHERE country.Name 
LIKE 'Netherlands';

-- 7. What is the population of Rotterdam ?
SELECT name, population FROM city WHERE name = 'Rotterdam';

-- 8. What's the top 10 countries by Surface Area ?

SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;

-- 9. What's the top 10 most populated cities? 

SELECT name, Population FROM city ORDER BY Population DESC LIMIT 10;

-- 10. What is the population of the world ?

SELECT sum(Population) FROM country;
