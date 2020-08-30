// const http = require('http');


// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'aplication/json'});
//     let salida = {
//         nombre:'manolo',
//         apellido:'martinez'
//     }
//     res.write(JSON.stringify(salida));
//     res.end();
// }).listen(3000);

// console.log('su servidor http esta ecuchando');

const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', (err)=>{});


// helpers

hbs.registerHelper('getAnio',()=>{
	return new Date().getFullYear();
})
app.get('/', function (req, res) {    
    res.render('home',{
		manolo:'manolo'
	});
});

app.get('/about', function (req, res) {    
    res.render('about',{
		manolo:'manolo'
	});
});

app.listen(3000, () => {
    console.log('your server is runing in por 3000');
})
