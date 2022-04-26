const express = require ('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require ('express-myConnection');
const morgan =require ('morgan');

 //IMPORTANDO RUTAS  APP7.importarutas
 const customerRoutes = require('./routes/customer');

/*app.listen (3100, () => {
    console.log  ('servidor en puerto 3100');
});*/


//app4.Midleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'Localhost',
    user:'root',
    password:'',
    PORT:3306,
    database:'proyeccto',

},'single'));
app.use(express.urlencoded({extended: false})); 
//utilizacion de archivos estaticos APP7.importarrutas 2da division
app.use(express.static(path.join(__dirname, 'public')));

///          setting
//colocaciones, estas son las vistas que vamos a enviar al navegador
app.set('port', process.env.PORT||3000);
app.set('view engine','ejs');
//unir directorios o carpetas 
app.set('views',path.join(__dirname,'views'));
///

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
