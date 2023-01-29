---
sidebar_position: 1
slug: install-maria-db-from-source-code
title: Install MariaDB from Source
tags: [sql, mariaDB, installation]

---

## System Information:

```bash
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.1 LTS
Release:	22.04
Codename:	jammy
```



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
```

