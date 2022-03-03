DROP DATABASE IF EXISTS minteger;

CREATE DATABASE minteger;

USE minteger;

CREATE TABLE transactions (
  id int NOT NULL AUTO_INCREMENT,
  date date,
  amount decimal(10, 2) NOT NULL,
  description varchar(50) NOT NULL,
  category_id varchar(50) DEFAULT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE category (
  id int AUTO_INCREMENT  NOT NULL,
  category varchar(50) NOT NULL UNIQUE,
  targetbudget int,
  count int DEFAULT 1,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

INSERT INTO transactions (id, amount, description, date) VALUES (1, -4.55, "EQUATOR", "2017-08-02");
INSERT INTO transactions (id, amount, description, date) VALUES (2, -9.19, "CHIPOTLE", "2017-08-02");
INSERT INTO transactions (id, amount, description, date) VALUES (3, -13.29, "BLUE BOTTLE", "2017-08-03");
INSERT INTO transactions (id, amount, description, date) VALUES (4, -329.87, "OUTSIDE LANDS", "2017-08-05");
INSERT INTO transactions (id, amount, description, date) VALUES (5, -18.45, "MIKKELLER", "2017-08-05");
INSERT INTO transactions (id, amount, description, date) VALUES (6, -4.55, "CHAI BAR", "2017-08-06");
INSERT INTO transactions (id, amount, description, date) VALUES (7, -10.45, "POPSONS", "2017-08-07");
INSERT INTO transactions (id, amount, description, date) VALUES (8, -5.23, "SHARETEA", "2017-08-08");
INSERT INTO transactions (id, amount, description, date) VALUES (9, -138.94, "VERIZON", "2017-08-08");
INSERT INTO transactions (id, amount, description, date) VALUES (10, -10.71, "NETFLIX", "2017-08-09");
INSERT INTO transactions (id, amount, description, date) VALUES (11, -3.00, "EQUATOR", "2017-08-10");
INSERT INTO transactions (id, amount, description, date) VALUES (12, -13.48, "PICA PICA", "2017-08-11");
INSERT INTO transactions (id, amount, description, date) VALUES (13, -52.83, "LITTLE STAR", "2017-08-12");
INSERT INTO transactions (id, amount, description, date) VALUES (14, -427.48, "APPLE", "2017-08-14");
INSERT INTO transactions (id, amount, description, date) VALUES (15, -38.51, "TRADER JOES", "2017-08-15");
INSERT INTO transactions (id, amount, description, date) VALUES (16, -4.55, "BLUE BOTTLE", "2017-08-15");
INSERT INTO transactions (id, amount, description, date) VALUES (17, -9.99, "SPOTIFY", "2017-08-17");
INSERT INTO transactions (id, amount, description, date) VALUES (18, -3.85, "EQUATOR", "2017-08-20");
INSERT INTO transactions (id, amount, description, date) VALUES (19, -18.00, "AMC", "2017-08-21");
INSERT INTO transactions (id, amount, description, date) VALUES (20, -11.42, "TARGET", "2017-08-22");

