CREATE DATABASE IF NOT EXISTS TODO_APP;

USE TODO_APP;

-- CREATE TABLES

CREATE TABLE IF NOT EXISTS Account ( 
    email VARCHAR (255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL
    );
    
DESCRIBE account;

CREATE TABLE IF NOT EXISTS Board (
board_id INT (200) AUTO_INCREMENT PRIMARY KEY,
private BOOLEAN NOT NULL,
name VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Checklist(
    checklist_id INT (200) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS list (
list_id INT (200) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    board_id INT (200),
    calendar_id INT (200),
    label_id INT (200),
    position VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Adding_Checklist(
    list_id INT (200),
    checklist_id INT (200)  
);

CREATE TABLE IF NOT EXISTS Calendar(
    calendar_id INT (200) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    start_date DATE,
    due_date DATE,
    due_hour DATETIME,
    set_due_reminder DATE
);

CREATE TABLE IF NOT EXISTS Label(
    label_id INT (200) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(255),
    create_label BOOLEAN
);



-- ADD FOREIGN KEYS
ALTER TABLE Board ADD email VARCHAR (255);

ALTER TABLE Board ADD CONSTRAINT fk_email
FOREIGN KEY (email) REFERENCES Account(email);

DESCRIBE Board;
    
ALTER TABLE Adding_Checklist ADD CONSTRAINT fk_list_id
FOREIGN KEY (list_id) REFERENCES List(list_id);
    
ALTER TABLE Adding_Checklist ADD CONSTRAINT fk_checklist_id
FOREIGN KEY (checklist_id) REFERENCES Checklist(checklist_id);

DESCRIBE Adding_Checklist;
    
ALTER TABLE List ADD CONSTRAINT fk_board_id
FOREIGN KEY (board_id) REFERENCES Board(board_id);
    
ALTER TABLE list ADD CONSTRAINT fk_calendar_id
FOREIGN KEY (calendar_id) REFERENCES Calendar(calendar_id);
    
ALTER TABLE list ADD CONSTRAINT fk_label_id
FOREIGN KEY (label_id) REFERENCES Label(label_id);

SHOW TABLES;



-- Inser values in tables

INSERT INTO Account (email, name, surname) VALUES 
('firstemail@email.com', 'Elena', 'Rose'), 
('secondemail@email.com', 'John', 'Pascal'),
('thirdemail@email.com', 'Maria', 'Johansson');


INSERT INTO Board (email, name, private) VALUES 
('secondemail@email.com', 'WORK BOARD', false),
('firstemail@email.com', 'Activities', true),
('thirdemail@email.com', 'Group Project', false);

INSERT INTO Calendar (start_date, due_date, due_hour, set_due_reminder) VALUES
('2021-10-11', '2022-10-11', '2022-10-11 12:00:00', '2022-10-11'),
('2021-10-13', '2022-10-13', '2022-10-13 08:00:00', '2022-10-13'),
('2021-03-10', '2022-03-10', '2022-03-10 10:00:00','2022-03-10');


INSERT INTO Label (title, create_label) VALUES
('in progress', false),
('just started', true),
('almost done', true);


INSERT INTO Checklist (title) VALUES
('Divide Task'),
('Program class for tomorrow'),
('Design Presentation');


INSERT INTO list (board_id, calendar_id, label_id, position, description)
VALUES (1, 3, 3, 'last','Client project'),
       (2, 1, 1, 'first', 'Improving time management for one year'),
       (3, 2, 2, 'Second', 'Graduation Project');
       

INSERT INTO Adding_Checklist (list_id, checklist_id) VALUES
(1,3),
(2,1),
(3,2);





