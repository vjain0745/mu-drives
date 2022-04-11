const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String,required: 'Name Is Required' },
    email: { type: String, unique: true, required: 'Email Is Required' },
    password: { type: String, required: 'Password Is Required' },
    role_type: { type: String, enum: ['admin', 'doctor'] },
    status: { type: Number, enum: [0, 1], default: 1 },
}, {
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);