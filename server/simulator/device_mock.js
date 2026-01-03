const mongoose = require('mongoose');
const Vitals = require('../models/Vitals');
const dotenv = require('dotenv');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const seedData = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB for seeding...");

    await Vitals.deleteMany({});

    const days = 50;
    const data = [];

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));

        const hourly_readings = [];
        let totalSteps = 0;
        let totalHR = 0;

        for (let h = 0; h < 24; h++) {
            let hr, steps;
            if (h < 6) {
                hr = getRandom(50, 60);
                steps = 0;
            }
            else {
                hr = getRandom(70, 100);
                steps = getRandom(0, 500);
            }

            hourly_readings.push({ hour: h, heart_rate: hr, steps });
            totalSteps += steps;
            totalHR += hr;
        }

        data.push({
            date: date,
            metrics: {
                steps: totalSteps,
                claories: Math.floor(totalSteps * 0.04),
                sleep_minutes: getRandom(360, 480),
                avg_heart_rate: Math.floor(totalHR / 24)
            },
            hourly_readings
        });
    }

    await Vitals.insertMany(data);
    console.log("✅ 30 Days of data generated!");
    process.exit();
};

seedData();