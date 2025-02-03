"use strict"

const todoController = require("../Controllers/todoController");

module.exports = (server) => {
    // Routes
    server.route(
    [{
        // Get all todos
        method: 'GET',
        path: '/todos',
        handler: todoController.getTodos
    },
    {
        // Add todo
        method: 'POST',
        path: '/todos',
        handler: todoController.addTodo
    },
    {
        // Update todo
        method: 'PUT',
        path: '/todos/{id}',
        handler: todoController.updateTodo
    },
    {
        // Delete todo
        method: 'DELETE',
        path: '/todos/{id}',
        handler: todoController.deleteTodo
    }]
    )
}