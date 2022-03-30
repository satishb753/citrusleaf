# TASK SUBMISSION

## databse migration is implemented using db-migrate plugin
## Task files are saved both as blob types as well as on the root directory under /uploads folder

# Important files

## /src/routes/api/mysql/tasks.router.js
## /src/routes/api/mysql/users.router.js

# List of api endpoints
##  Registe/Login
##  localhost:3001/api/mysql/user/register
##  localhost:3001/api/mysql/user/login

##  TaskCRUD routes
##  localhost:3001/api/mysql/task/create
##  localhost:3001/api/mysql/task/list
##  localhost:3001/api/mysql/task/update/23
##  localhost:3001/api/mysql/task/delete/22
 

# .env Example

## PORT=3001
## MONGO_URI=
## TOKEN_SALT=
## JWT_SECRET=

## NODE_ENV=development

## MYSQL_DB_USER=root
## MYSQL_DB_PASSWORD=
## MYSQL_DB_HOST=localhost
## MYSQL_DB_PORT=3306
## MYSQL_DB_DATABASE=taskcrud

# Packages used

## mysql2, express-formidable, jsonwebtoken

