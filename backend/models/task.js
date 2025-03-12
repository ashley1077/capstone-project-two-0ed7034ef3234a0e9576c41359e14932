const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    taskName: { type: String, required: true },
    dueDate: { type: Date, required: true },
    category: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true },
    reminder: { type: Date }
});

module.exports = mongoose.model('Task', taskSchema);
