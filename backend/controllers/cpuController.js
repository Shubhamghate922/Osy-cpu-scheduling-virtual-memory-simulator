// Controller for CPU Scheduling requests
// Handles validation, algorithm selection and statistics calculation

const runFCFS = require("../algorithms/cpu/fcfs");
const runSJF = require("../algorithms/cpu/sjf");
const runSRTF = require("../algorithms/cpu/srtf");
const runPriority = require("../algorithms/cpu/priority");
const runRoundRobin = require("../algorithms/cpu/roundRobin");

const VALID_ALGORITHMS = ["FCFS", "SJF", "SRTF", "PRIORITY", "ROUND_ROBIN"];

function simulateCpu(req, res) {
  const { algorithm, processes, timeQuantum } = req.body;

  // ----- Validation -----

  if (!algorithm || typeof algorithm !== "string") {
    return res.status(400).json({ success: false, message: "Please select a scheduling algorithm." });
  }

  const normalizedAlgorithm = algorithm.toUpperCase().replace(/\s|-/g, "_");

  if (!VALID_ALGORITHMS.includes(normalizedAlgorithm)) {
    return res.status(400).json({ success: false, message: "Unsupported scheduling algorithm." });
  }

  if (!Array.isArray(processes) || processes.length === 0) {
    return res.status(400).json({ success: false, message: "Please add at least one process." });
  }

  if (processes.length > 15) {
    return res.status(400).json({ success: false, message: "Please enter no more than 15 processes." });
  }

  const idSet = new Set();

  for (const process of processes) {
    if (!process.id || typeof process.id !== "string") {
      return res.status(400).json({ success: false, message: "Every process must have a valid Process ID." });
    }

    if (idSet.has(process.id)) {
      return res.status(400).json({ success: false, message: `Duplicate Process ID: ${process.id}` });
    }
    idSet.add(process.id);

    const arrivalTime = Number(process.arrivalTime);
    const burstTime = Number(process.burstTime);

    if (Number.isNaN(arrivalTime) || arrivalTime < 0) {
      return res.status(400).json({ success: false, message: `Arrival time for ${process.id} cannot be negative.` });
    }

    if (Number.isNaN(burstTime) || burstTime <= 0) {
      return res.status(400).json({ success: false, message: `Burst time for ${process.id} must be greater than 0.` });
    }

    if (normalizedAlgorithm === "PRIORITY") {
      const priority = Number(process.priority);
      if (Number.isNaN(priority)) {
        return res.status(400).json({ success: false, message: `Please enter a valid priority for ${process.id}.` });
      }
    }
  }

  if (normalizedAlgorithm === "ROUND_ROBIN") {
    const quantum = Number(timeQuantum);
    if (Number.isNaN(quantum) || quantum <= 0) {
      return res.status(400).json({ success: false, message: "Time quantum must be greater than 0." });
    }
  }

  // ----- Normalize process data -----

const cleanProcesses = processes.map((p) => ({
  id: p.id,
  arrivalTime: Number(p.arrivalTime),
  burstTime: Number(p.burstTime),
  // Priority is only meaningful for Priority Scheduling. For every other
  // algorithm we deliberately drop it to null so the frontend never shows
  // a leftover or default priority number the user never entered.
  priority: normalizedAlgorithm === "PRIORITY" ? Number(p.priority) : null
}));
  // ----- Run the selected algorithm -----

  let simulationOutput;

  try {
    if (normalizedAlgorithm === "FCFS") {
      simulationOutput = runFCFS(cleanProcesses);
    } else if (normalizedAlgorithm === "SJF") {
      simulationOutput = runSJF(cleanProcesses);
    } else if (normalizedAlgorithm === "SRTF") {
      simulationOutput = runSRTF(cleanProcesses);
    } else if (normalizedAlgorithm === "PRIORITY") {
      simulationOutput = runPriority(cleanProcesses);
    } else if (normalizedAlgorithm === "ROUND_ROBIN") {
      simulationOutput = runRoundRobin(cleanProcesses, Number(timeQuantum));
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Something went wrong while running the simulation." });
  }

  const { results, ganttChart } = simulationOutput;

  // ----- Calculate statistics -----

  const totalWaitingTime = results.reduce((sum, r) => sum + r.waitingTime, 0);
  const totalTurnaroundTime = results.reduce((sum, r) => sum + r.turnaroundTime, 0);
  const totalResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0);

  const averageWaitingTime = Number((totalWaitingTime / results.length).toFixed(2));
  const averageTurnaroundTime = Number((totalTurnaroundTime / results.length).toFixed(2));
  const averageResponseTime = Number((totalResponseTime / results.length).toFixed(2));

  // CPU Utilization = (Total Burst Time / Total Time Elapsed) * 100
  const totalBurstTime = cleanProcesses.reduce((sum, p) => sum + p.burstTime, 0);
  const lastCompletionTime = Math.max(...results.map((r) => r.completionTime));
  const cpuUtilization = Number(((totalBurstTime / lastCompletionTime) * 100).toFixed(2));

  return res.status(200).json({
    success: true,
    algorithm: normalizedAlgorithm,
    processResults: results,
    ganttChart: ganttChart,
    averageWaitingTime: averageWaitingTime,
    averageTurnaroundTime: averageTurnaroundTime,
    averageResponseTime: averageResponseTime,
    cpuUtilization: cpuUtilization
  });
}

module.exports = { simulateCpu };
