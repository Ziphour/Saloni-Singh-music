
-- Create the database
CREATE DATABASE dua_lipa;

-- Switch to the database
\c dua_lipa;

-- Create tables
CREATE TABLE tours (
    id SERIAL PRIMARY KEY,
    venue VARCHAR(255),
    city VARCHAR(255),
    date DATE
);

CREATE TABLE music (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    artist VARCHAR(255),
    album VARCHAR(255),
    release_date DATE,
    track_url VARCHAR(255)
);

CREATE TABLE merch (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price NUMERIC,
    image_url VARCHAR(255),
    description TEXT
);

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT
);

-- Seed Data: Tours
INSERT INTO tours (venue, city, date) VALUES
('Arena Manchester', 'Manchester', '2025-04-15'),
('Arena Birmingham', 'Birmingham', '2025-04-17'),
('Leeds Arena', 'Leeds', '2025-04-18'),
('Arena Newcastle', 'Newcastle', '2025-04-23'),
('The SSE Hydro', 'Glasgow', '2025-04-25');
    