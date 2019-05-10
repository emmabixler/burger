DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
burger_name VARCHAR
    (50) NOT NULL,
devoured BOOLEAN DEFAULT false
);
-- when entered mysql -u root -p says error when password enter. then typed in use mysql;

-- update user set authentication_string=PASSWORD("mynewpassword") where User='root';

-- flush privileges;

-- quit