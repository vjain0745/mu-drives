const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
    wardName: { type: String, required: 'Ward Name Is Required' },
    roomStart: { type: Number, unique: true, required: 'Room Number Is Required' },
    roomEnd: { type: Number, required: 'Room Number Is Required' },
    price: { type: Number, required: 'Price is Required' },
    status: { type: Number, enum: [0, 1], default: 1 },
}, {
    timestamps: true
});

module.exports = mongoose.model('wards', wardSchema);