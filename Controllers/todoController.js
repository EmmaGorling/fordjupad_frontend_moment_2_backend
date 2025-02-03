"use strict"

const Mongoose = require("mongoose");
const Todo = require("../Models/todoModel");

// Get all todos
exports.getTodos = async (request, h) => {
    try {
        const todos = await Todo.find({});
        return todos;
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
}

// Add todo
exports.addTodo = async (request, h) => {
    try {
        const todo = new Todo(request.payload);
        return await todo.save();
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
}

// Update todo
exports.updateTodo = async (request, h) => {
    try {
        const {id} = request.params;

        if(!Mongoose.Types.ObjectId.isValid(id)) {
            return h.response({ message: 'Invalid id' }).code(400);
        }
        const result = await Todo.updateOne({ _id: request.params.id }, {$set: request.payload});
        return result;
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
}

// Delete todo
exports.deleteTodo = async (request, h) => {
    try {
        const {id} = request.params;

        if(!Mongoose.Types.ObjectId.isValid(id)) {
            return h.response({ message: 'Invalid id' }).code(400);
        }
        const result = await Todo.deleteOne({ _id: request.params.id });
        return result;
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
}