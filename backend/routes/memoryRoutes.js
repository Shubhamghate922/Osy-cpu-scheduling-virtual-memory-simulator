const express = require("express");
const router = express.Router();
const { simulateMemory } = require("../controllers/memoryController");

// POST /api/memory/simulate
// Runs the selected page replacement algorithm (FIFO, LRU, Optimal)
router.post("/simulate", simulateMemory);

module.exports = router;
