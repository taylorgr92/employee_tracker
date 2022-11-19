DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;



CREATE TABLE dept_info (
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);



-- CREATE TABLE ROLE_INFO (
  -- job title, role id, the department that role belongs to, and the salary for that role
CREATE TABLE role_info (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   job_title VARCHAR(30) NOT NULL,
   dept_name VARCHAR(30) NOT NULL,
   salary INT NOT NULL
);
-- )

--  including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

-- CREATE TABLE EMPLOYEE_INFO (

-- )
-- employee’s first name, last name, role, and manager
-- CREATE TABLE ADD_EMPLOYEE (
--   CREATE TABLE add_employee (
--   dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   dept_name VARCHAR(30) NOT NULL
-- );
