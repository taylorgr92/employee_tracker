INSERT INTO department (id, name)
VALUES 
       (001, "Engineering"),
       (002, "Finance"),
       (003, "Legal Services"),
       (004, "Sales"),
       (005, "Shenanigans"),
       (006, "Human Resources");
     
       
INSERT INTO role (id,title, salary, department_id)
VALUES 
       (001, "Audio Engineer", 60000, 001),
       (002, "Accounts Administrator",52275, 002),
       (003, "Paralegal",  78478 , 003),
       (004, "Digital Assistant", 62289 , 004),
       (005, "Court Jester", 90000, 005),
       (006, "Benefits Manager", 130000, 006);
     
     INSERT INTO role (id,title, salary, department_id)
VALUES 
       (001, "Audio Engineer", 60000, 001),
       (002, "Accounts Administrator",52275, 002),
       (003, "Paralegal",  78478, 003),
       (004, "Digital Assistant", 62289, 004),
       (005, "Court Jester", 90000, 005),
       (006, "Benefits Manager", 130000, 006);

       INSERT INTO employee (id,first_name, last_name, role_id, manager_id )
VALUES 
       (001, "Cinar", "Jasper", 042, 126),
       (002, "Angelika", "Church",012, 208),
       (003, "Franklin", "Xi", 030, 166),
       (004, "Elen","Villalobos", 066 , 012),
       (005, "Nick", "Benson",007, 001),
       (006, "Tobey", "Howell", 003, 015);