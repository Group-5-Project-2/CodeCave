DROP DATABASE IF EXISTS g4pmwpgb7l9wck1s;

CREATE DATABASE g4pmwpgb7l9wck1s;
INSERT INTO g4pmwpgb7l9wck1s; 

USE g4pmwpgb7l9wck1s;

CREATE TABLE users
(
    userId INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR (30) NOT NULL,
    email(30)NOT NULL,
    messages(230) NULL,
    friends(30) NULL  
);

CREATE TABLE profiles
    (
        profilesId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR (30) NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30)NULL,
    bio VARCHAR (300) NULL,
    skills VARCHAR (!50)NULL,
    job_start VARCHAR (15)NULL,
    FOREIGN KEY (user) REFERENCES users(userId)
);

CREATE TABLE friends
(
    friendsId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    FOREIGN KEY (friendsId) REFERENCES users(userId)
);

CREATE TABLE posts
(
    friendsId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    FOREIGN KEY (friendsId) REFERENCES users(userId)
);
