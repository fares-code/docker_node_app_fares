CREATE USER 'root'@'%' IDENTIFIED BY 'fares6872';
GRANT ALL PRIVILEGES ON ourteamdata.* TO 'root'@'%';
FLUSH PRIVILEGES;


CREATE DATABASE IF NOT EXISTS `ourteamdata`;


USE `ourteamdata`;


CREATE TABLE IF NOT EXISTS `students` (
  
  `Name` VARCHAR(300) NOT NULL,
  `Age` INT NOT NULL,
  `ID` INT NOT NULL,
  `CGPA` DOUBLE(3,2) NOT NULL
);

INSERT INTO students (`ID`, `Name`, `Age`, `CGPA`) VALUES
('22010186', 'Fares Mohamed', '20', '3.72'),
('22010223', 'Mohamed Adel', '20', '3.45'),
('22010232', 'Mohamed Bakr', '19', '2.94'),
('22011638', 'Youssef Sherif', '19', '3.21'),
('22011640', 'Saifullah Khalil', '19', '2.68');



