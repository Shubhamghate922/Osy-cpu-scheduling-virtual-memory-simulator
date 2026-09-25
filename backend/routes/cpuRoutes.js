const express = require("express");
const router = express.Router();
const { simulateCpu } = require("../controllers/cpuController");

// POST /api/cpu/simulate
// Runs the selected CPU scheduling algorithm (FCFS, SJF, SRTF, Priority, Round Robin)
router.post("/simulate", simulateCpu);

module.exports = router;
