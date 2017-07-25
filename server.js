//requiring packages & other files
const express = require ('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
var app = express();  
//body parser
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//routings
htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
apiRoutes = require('./app/routing/apiRoutes.js')(app);


app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
