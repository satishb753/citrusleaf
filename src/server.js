import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import mysql from 'mysql2';
import connection from 'express-myconnection';

var config = {
  host: process.env.MYSQL_DB_HOST || "localhost",
  user: process.env.MYSQL_DB_USER || "root",
  password: process.env.MYSQL_DB_PASSWORD || "",
  port: process.env.MYSQL_DB_PORT || "3306",
  database: process.env.MYSQL_DB_DATABASE || "taskcrud"
};


const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(connection(mysql, config, 'single'));


// routes with mysql  
import mysqlUserRouter from './routes/api/mysql/users.router.js';
import mysqlTaskRouter from './routes/api/mysql/tasks.router.js';


// Routers for mysql database
app.use('/api/mysql/user', mysqlUserRouter);
app.use('/api/mysql/task', mysqlTaskRouter);



//client side reactJS SPA routing:
const __dirname = path.resolve();
const publicPath = path.join(__dirname, 'public');
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });

export default app;