USE new_world;
SHOW TABLES;
-- What is the capital of country X ? (Accept X from user)	
PREPARE capital FROM 'SELECT name, capital FROM country 
WHERE name = ?';

SET @X = 'argentina';

EXECUTE capital USING @X;

-- List all the languages spoken in the region Y (Accept Y from user)
PREPARE region_lan FROM 'SELECT countrylanguage.language, country.region FROM countrylanguage 
INNER JOIN country ON countrylanguage.countrycode = country.code WHERE region = ?';

SET @Y = 'South America';

EXECUTE region_lan USING @Y;

-- Find the number of cities in which language Z is spoken (Accept Z from user)

PREPARE city_lang FROM 'SELECT city.Name FROM city INNER JOIN countrylanguage 
ON city.countrycode = countrylanguage.countrycode WHERE Language = ?';

SET @Z = 'Spanish';
EXECUTE city_lang USING @Z;

-- List all the continents with the number of languages spoken in each continent

PREPARE lang_num FROM 'SELECT country.continent, COUNT(countrylanguage.Language) FROM countrylanguage 
JOIN country ON countrylanguage.countrycode = country.Code 
GROUP BY country.continent';

EXECUTE lang_num;


