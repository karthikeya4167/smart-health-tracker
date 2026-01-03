const mongoose = require('mongoose');

const VitalsSchema = new mongoose.Schema({
    date: { type: Date, required: true},
    metrics: {
        steps: { type: Number, default: 0 },
        calories: { type: Number, default: 0 },
        sleep_minutes: { type: Number, default: 0 },
        avg_heart_rate: { type: Number, default: 0 }
    },
    hourly_readings: [{
        hour: Number,
        heart_rate: Number,
        steps: Number
    }]
}, { timestamps: true });

VitalsSchema.index({ date: -1 });

module.exports = mongoose.model('Vitals', VitalsSchema);