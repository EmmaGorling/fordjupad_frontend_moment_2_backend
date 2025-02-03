"use strict"

const Mongoose = require("mongoose");

// Todo Schema
const todoSchema = Mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
);

// Create model
const Todo = Mongoose.model('Todo', todoSchema);
// Export
module.exports = Todo;