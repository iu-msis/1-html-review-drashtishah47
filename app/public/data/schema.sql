CREATE DATABASE IF NOT EXISTS databaseserver;
USE databaseserver;

drop table Books;

CREATE TABLE `Books` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `Title` VARCHAR(200) NULL,
  `Author` VARCHAR(100) NULL,
  `Year_Published` VARCHAR(4) NULL,
  `Publisher` VARCHAR(100) NULL,
  `Page_Count` INT NULL,
  `MSRP` DOUBLE NULL,
  PRIMARY KEY (`id`));


INSERT INTO Books (id, Title, Author, Year_Published,Publisher,Page_Count, MSRP ) VALUES 
(1, 'Harry Potter Collection','JK Rowling',1997,'Bloomsbury publishing',650,100),
(2, 'Matilda','Roald Dahl',1978,'Jonathan Cape',267,205),
(3, 'And then there were none','Agatha Christie',1996,'Penguin',342,45),
(4, 'Power of the subconscious mind','Joseph Murphy',2007,'Apress',215,65 );