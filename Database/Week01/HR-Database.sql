CREATE DATABASE HR;
USE HR;
CREATE TABLE employees
( 
employee_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fist_name VARCHAR (200) NOT NULL,
last_name VARCHAR (200) NOT NULL,
starting_date DATE,
full_time_contract BOOLEAN,
position VARCHAR (200)
);
SHOW TABLES;
DESCRIBE employees;

CREATE TABLE locations 
(
office_id INT (50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
address VARCHAR (200) NOT NULL,
floor INT (50) NOT NULL,
city VARCHAR (200) NOT NULL,
country VARCHAR (200) NOT NULL,
zip_code INT (50) NOT NULL
);

SHOW TABLES;
DESCRIBE locations;
DESCRIBE employees;

INSERT INTO employees (
fist_name,
last_name,
starting_date,
full_time_contract,
position
)

VALUES 
('Patty', 'O\’Furniture','2019-01-05',false,'marketing coordinator'),
('Paddy', 'O\’Furniture', '2017-05-21', true, 'marketing manager' ),
('Olive', 'Yew','2016-04-23', true, 'head legal deparment'),
('Aida', 'Bugg', '2021-06-21', false, 'accounting assistant'),
('Maureen', 'Biologist','2021-02-01', true, 'accountant'),
('Teri', 'Dactyl', '2020-05-21', true, 'regional sales manager'),
('Peg', 'Legge', '2020-08-18', true, 'maintenance technician'),
('Allie', 'Grater', '2021-07-10', false, 'maintenance electrician'),
('Liz', 'Erd', '2020-08-24', true, 'Cloud System Administrator'),
('Constance', 'Noring', '2015-07-15', true, 'Cloud Product and Project Manager');

DESCRIBE employees;
SELECT * FROM employees;
DESCRIBE locations;

INSERT INTO locations (
address,
floor,
city,
country,
zip_code
)

VALUES 
('Valeska-Gert-Straße 5', 5, 'berlin', 'germany', 10243),
('Valeska-Gert-Straße 5', 4, 'berlin', 'germany', 10243),
('Valeska-Gert-Straße 5', 3, 'berlin', 'germany', 10243),
('Vorsetzen 35', 2, 'hamburg', 'germany', 20459),
('Vorsetzen 35', 1, 'hamburg', 'germany', 20459),
('Runeberginkatu 5b', 2, 'helsinki', 'finland', 110264),
('2WML Windmill Quarter', 1, 'dublin', 'ireland', 206),
('Regioparkring 25', 3, 'Mönchengladbach', 'germany', 41239),
('Hyllie Boulevard 35', 4, 'Vintrie', 'Sweden', 21532),
('Hyllie Boulevard 35', 3, 'Vintrie', 'Sweden', 21532);

CREATE TABLE employees_working_place (
work_loc_id INT  NOT NULL AUTO_INCREMENT,
employee_data INT NOT NULL,
working_office INT, 

PRIMARY KEY (work_loc_id),
INDEX (employee_data),
INDEX (working_office),
FOREIGN KEY (employee_data)
      REFERENCES employees(employee_id)
      ON UPDATE CASCADE ON DELETE RESTRICT,

    FOREIGN KEY (working_office)
      REFERENCES locations(office_id)

)ENGINE=INNODB;

SELECT * FROM employees_working_place;

INSERT INTO employees_working_place ( 
employee_data, 
working_office 
) 

VALUES 
(1,2),
(2,1),
(3,4),
(4,5),
(5,5),
(6,3),
(7,1),
(8,7),
(9,9),
(10,10);

SELECT * FROM employees_working_place;

ALTER TABLE employees_working_place 
DROP COLUMN work_loc_id;

SELECT * FROM employees_working_place;














