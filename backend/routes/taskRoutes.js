const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/', async (req, res) => {
    const { userId, taskName, dueDate, category, priority, status, reminder } = req.body;
    try {
        const newTask = new Task({ userId, taskName, dueDate, category, priority, status, reminder });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: "Error creating task", error: err });
    }
});

// Get all tasks for a user
router.get('/:userId', async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.params.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
});

module.exports = router;
