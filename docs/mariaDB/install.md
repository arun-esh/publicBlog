---
sidebar_position: 1

---

## Get the source code

```bash
# Created a directory for my Project
mkdir mariaDB
cd mariaDB

mariaDB $ git clone git@github.com:arun-esh/mariaDBServer.git
mariaDB $ mv myDBServer server
```



## Build the Server

```bash
sudo apt-get install build-essential libncurses5-dev gnutls-dev bison zlib1g-dev ccache libssl-dev

# Get cmake
# Downloaded under ~/
wget https://github.com/Kitware/CMake/releases/download/v3.25.2/cmake-3.25.2.tar.gz

cd cmake-3.25.2
~/cmake-3.25.2 $ ./bootstrap
~/cmake-3.25.2 $  make
~/cmake-3.25.2 $  sudo make install

```



## Configure the build

```bash
mariaDB $ mkdir build-mariadb-server-debug
mariaDB $ cd build-mariadb-server-debug

# configure mariaDB by
build-mariadb-server-debug $ cmake ../server -DCMAKE_BUILD_TYPE=Debug
```



## Compile

```bash
build-mariadb-server-debug $ cmake --build . --parallel 5
```



## Starting MariaDB after build 

``` bash
# Create a directory 
mkdir data-dir

# create ~/mariadb.cnf
# The MariaDB server group

[mariadb]
datadir           = ~/mariaDB/data-dir
# path to source dir + sql/share
lc_messages_dir   = source/sql/share



# Now that you have created your own config file you can call it with flag `--defaults-file` while installing the system tables. To install the system tables call following from the build folder:
./scripts/mariadb-install-db --srcdir=../server --defaults-file=~/mariadb.cnf

# Run the DB Server
sql/mariadbd --defaults-file=~/mariadb.cnf

# Run client command line
client/mariadb

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

 