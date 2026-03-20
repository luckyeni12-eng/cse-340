-- DROP TABLES (if exist)
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS classification;
DROP TABLE IF EXISTS account;

-- CREATE TYPE
CREATE TYPE account_type_enum AS ENUM ('Client', 'Admin');

-- CREATE TABLES
CREATE TABLE account (
    account_id SERIAL PRIMARY KEY,
    account_firstname VARCHAR(50),
    account_lastname VARCHAR(50),
    account_email VARCHAR(100),
    account_password VARCHAR(255),
    account_type account_type_enum DEFAULT 'Client'
);

CREATE TABLE classification (
    classification_id SERIAL PRIMARY KEY,
    classification_name VARCHAR(50)
);

CREATE TABLE inventory (
    inv_id SERIAL PRIMARY KEY,
    inv_make VARCHAR(50),
    inv_model VARCHAR(50),
    inv_description TEXT,
    inv_image VARCHAR(255),
    inv_thumbnail VARCHAR(255),
    classification_id INT REFERENCES classification(classification_id)
);

-- INSERT INTO classification
INSERT INTO classification (classification_name) VALUES
('Sport'), ('SUV'), ('Truck');

-- INSERT INTO inventory
INSERT INTO inventory (
    inv_make, inv_model, inv_description, inv_image, inv_thumbnail, classification_id
) VALUES
('GM', 'Hummer', 'small interiors but powerful engine', '/images/hummer.jpg', '/images/hummer-tn.jpg', 2),
('Ferrari', 'F8', 'fast sports car', '/images/ferrari.jpg', '/images/ferrari-tn.jpg', 1),
('Lamborghini', 'Huracan', 'luxury sports car', '/images/lambo.jpg', '/images/lambo-tn.jpg', 1);

-- =========================================
-- REQUIRED: FINAL QUERIES FROM TASK 1
-- MUST BE THE LAST LINES IN THIS FILE
-- =========================================

-- Query 4: UPDATE GM Hummer description
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- Query 6: SELECT JOIN (Sport category)
SELECT i.inv_make, i.inv_model, c.classification_name
FROM inventory i
INNER JOIN classification c
ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';