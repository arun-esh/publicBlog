---
sidebar_position: 2
slug: maria-db-commands
title: MariaDB Commands
tags: [sql, mariaDB, commands]

---

## SQL Commands

```sqlite
CREATE TABLE property (
Id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
Title VARCHAR(255) NOT NULL,
Description VARCHAR(255) NOT NULL,
PropertyType VARCHAR(255) NOT NULL,
Price INTEGER NOT NULL,
Number INTEGER NOT NULL,
Street VARCHAR(255) NOT NULL,
Postal VARCHAR(255) NOT NULL
);

INSERT INTO property VALUES(1,'Property 1','This is very nice property near the Riverside drive.','House',200000,2323,'Property1Street','S9J2A3');
INSERT INTO property VALUES(2,'Property 2','This is very nice property near the Riverside drive.','House',300000,2424,'Property2Street','R9J2A3');
INSERT INTO property VALUES(3,'Property 3','This is very nice property near the Riverside drive.','Apartment',250000,2525,'Property3Street','P9J2A3');
INSERT INTO property VALUES(4,'Property 4','This is very nice property near the Riverside drive.','House',200000,2626,'Property4Street','W9J2A3');
INSERT INTO property VALUES(5,'Property 5','This is very nice property near the Riverside drive.','Apartment',450000,2121,'Property5Street','N9J2A3');
```

