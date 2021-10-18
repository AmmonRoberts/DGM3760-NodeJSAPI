let express = require("express");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

let todosController = require('./todosController')
let categoriesController = require('./categoriesController')

app.use("/todos", todosController)
app.use("/categories", categoriesController)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
