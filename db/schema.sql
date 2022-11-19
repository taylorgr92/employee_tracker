DROP DATABASE IF EXISTS EMPLOYEES_DB;

CREATE DATABASE EMPLOYEES_DB;

USE EMPLOYEES_DB;

CREATE TABLE DEPARTMENT (
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  NAME VARCHAR(30) NOT NULL PRIMARY KEY (ID)
);

CREATE TABLE ROLE(
  ID INT NOT NULL AUTO_INCREMENT,
  TITLE VARCHAR(30) NOT NULL,
  SALARY DECIMAL(10, 3) NULL,
  DEPARTMENT_ID INT NULL
);

--  including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

-- CREATE TABLE EMPLOYEE (

-- )
-- employee’s first name, last name, role, and manager
-- CREATE TABLE ADD_EMPLOYEE (
--   CREATE TABLE add_employee (
--   dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   dept_name VARCHAR(30) NOT NULL
-- );