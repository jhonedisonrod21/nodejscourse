const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'hbs');
var hbs = require('hbs'); 
hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerHelper('get_anio', function () { 
    return new Date().getFullYear();
 });

app.get('/', function (req, res) {
  res.render('home')
})
 
app.listen(3000,()=>{
    console.log('su servicio de express esta corriendo en el puerto 3000');
});
