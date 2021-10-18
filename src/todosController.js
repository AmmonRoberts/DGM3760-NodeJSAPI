const router = require("express").Router();
const todos = require('./todos')

router.get('/', (req, res) => {
    res.send(todos);
});
router.get('/:category', (req, res) => {

    let results = todos.filter((todo, index) => {
        if (todo.category.toLowerCase() == req.params.category.toLowerCase()) {
            return todo;
        }
    });

    if (results) {
        res.send(results);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

router.post('/', (req, res) => {

    let newId = Math.floor(Math.random() * 1000000);
    let newCategory = req.body.category
    let newTaskName = req.body.name
    todos.push({
        id: newId,
        taskName: newTaskName,
        completed: false,
        category: newCategory
    })
    console.log(todos)
    res.sendStatus(200);
});

router.put('/:category', (req, res) => {
    let result = todos.find((todo, index) => {
        if (todo.id == req.params.id) {
            todo.taskName = req.body.name
            todo.category = req.body.category
            return true;
        }
    });

    if (result) {
        res.send(result);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

router.delete('/:category', (req, res) => {
    let result = todos.find((todo, index) => {
        if (todo.id == req.params.id) {
            todos.splice(index, 1)
            return true
        }
    });

    if (result) {
        res.send(result);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

module.exports = router;