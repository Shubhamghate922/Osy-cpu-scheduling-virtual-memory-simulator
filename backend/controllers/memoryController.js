// Controller for Virtual Memory / Page Replacement requests
// Handles validation, algorithm selection and statistics calculation

const runFIFO = require("../algorithms/memory/fifo");
const runLRU = require("../algorithms/memory/lru");
const runOptimal = require("../algorithms/memory/optimal");

const VALID_ALGORITHMS = ["FIFO", "LRU", "OPTIMAL"];
const MAX_REFERENCES = 50;

function simulateMemory(req, res) {
  const { algorithm, frames, pageReferences } = req.body;

  // ----- Validation -----

  if (!algorithm || typeof algorithm !== "string") {
    return res.status(400).json({ success: false, message: "Please select a page replacement algorithm." });
  }

  const normalizedAlgorithm = algorithm.toUpperCase();

  if (!VALID_ALGORITHMS.includes(normalizedAlgorithm)) {
    return res.status(400).json({ success: false, message: "Unsupported page replacement algorithm." });
  }

  const frameCount = Number(frames);

  if (!Number.isInteger(frameCount) || frameCount < 1 || frameCount > 10) {
    return res.status(400).json({ success: false, message: "Number of frames must be between 1 and 10." });
  }

  if (!Array.isArray(pageReferences) || pageReferences.length === 0) {
    return res.status(400).json({ success: false, message: "Please enter a page reference string." });
  }

  if (pageReferences.length > MAX_REFERENCES) {
    return res.status(400).json({
      success: false,
      message: `Please enter no more than ${MAX_REFERENCES} page references.`
    });
  }

  const cleanPages = [];
  for (const value of pageReferences) {
    const pageNumber = Number(value);
    if (Number.isNaN(pageNumber)) {
      return res.status(400).json({ success: false, message: "Please enter valid page numbers." });
    }
    cleanPages.push(pageNumber);
  }

  // ----- Run the selected algorithm -----

  let simulationOutput;

  try {
    if (normalizedAlgorithm === "FIFO") {
      simulationOutput = runFIFO(cleanPages, frameCount);
    } else if (normalizedAlgorithm === "LRU") {
      simulationOutput = runLRU(cleanPages, frameCount);
    } else if (normalizedAlgorithm === "OPTIMAL") {
      simulationOutput = runOptimal(cleanPages, frameCount);
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Something went wrong while running the simulation." });
  }

  const { steps, pageHits, pageFaults } = simulationOutput;
  const totalReferences = cleanPages.length;

  // Calculate hit ratio and fault ratio, rounded to two decimal places
  const hitRatio = Number(((pageHits / totalReferences) * 100).toFixed(2));
  const faultRatio = Number(((pageFaults / totalReferences) * 100).toFixed(2));

  return res.status(200).json({
    success: true,
    algorithm: normalizedAlgorithm,
    steps: steps,
    pageHits: pageHits,
    pageFaults: pageFaults,
    totalReferences: totalReferences,
    hitRatio: hitRatio,
    faultRatio: faultRatio
  });
}

module.exports = { simulateMemory };
