const Vitals = require('../models/Vitals');

exports.getWeeklyHistory = async (req, res) => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const data = await Vitals.find({
            date: { $gte: thirtyDaysAgo }
        }).sort({ date: 1 });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server Error"});
    }
};