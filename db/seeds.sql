INSERT INTO department (name)
VALUES 
    ('engineering'),
    ('marketing'),
    ('stewardship'),
    ('monitoring');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Engineer', 75000, 1),
    ('Environmental Scientist', 45000, 4),
    ('Designer', 60000, 1),
    ('land steward', 55000, 3),
    ('credit sales', 50000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Andy', 'Curtis', 1, null),
    ('Abigail', 'Kirk', 3, 1),
    ('Jordan', 'Hessler', 3, 1),
    ('Bobby', 'Corn', 2, null), 
    ('Sam', 'Jackson', 2, 4), 
    ('John', 'Thompson', 4, null),
    ('Kristi', 'Walker', 4, 6),
    ('Jess', 'Taylor', 5, null),
    ('Jacob', 'Bugg', 5, 8);

