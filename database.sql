
CREATE TABLE contact (
ID int not null auto_increment,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
email varchar(255),
address varchar(255),
PRIMARY KEY (ID)
);
insert into contact(LastName,FirstName,email,address)
values('Patwary','Reaz','reaznyc@gmail.com','brooklyn');

select * from contact;
