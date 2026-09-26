// SRTF (Shortest Remaining Time First) CPU Scheduling Algorithm
//
// This is the preemptive version of SJF.
//
// Logic:
// - At every unit of time, check all arrived processes.
// - Run the process with the shortest remaining burst time.
// - If a new process arrives with a shorter remaining time,
//   preempt (stop) the currently running process and switch to it.

function runSRTF(processes) {
  const totalProcesses = processes.length;

  // Keep a working copy with remaining time and first-start tracking
  const remaining = processes.map((p) => ({
    ...p,
    remainingTime: p.burstTime,
    firstStartTime: null,
    completionTime: null
  }));

  let currentTime = 0;
  let completedCount = 0;
  const ganttChart = [];
  let lastRunningId = null;
  let segmentStart = null;

  // Find the total burst time to know when to stop the loop safely
  const totalBurst = processes.reduce((sum, p) => sum + p.burstTime, 0);
  const maxTime = totalBurst + Math.max(...processes.map((p) => p.arrivalTime)) + 1;

  while (completedCount < totalProcesses && currentTime <= maxTime) {
    // Find the process with the shortest remaining time among arrived, unfinished processes
    let shortestIndex = -1;
    let shortestRemaining = Infinity;

    for (let i = 0; i < totalProcesses; i++) {
      const process = remaining[i];
      if (
        process.arrivalTime <= currentTime &&
        process.remainingTime > 0 &&
        process.remainingTime < shortestRemaining
      ) {
        shortestRemaining = process.remainingTime;
        shortestIndex = i;
      }
    }

    if (shortestIndex === -1) {
      // CPU is idle at this time unit - track it the same way a running
      // process is tracked, using "IDLE" as a placeholder id, so that
      // consecutive idle units merge into a single Gantt segment.
      if (lastRunningId !== "IDLE") {
        if (lastRunningId !== null) {
          ganttChart.push({ id: lastRunningId, start: segmentStart, end: currentTime });
        }
        segmentStart = currentTime;
        lastRunningId = "IDLE";
      }
      currentTime++;
      continue;
    }

    const process = remaining[shortestIndex];

    // Record the first time this process ever gets the CPU (for response time)
    if (process.firstStartTime === null) {
      process.firstStartTime = currentTime;
    }

    // Track Gantt chart segments (group consecutive time units of the same process)
    if (lastRunningId !== process.id) {
      if (lastRunningId !== null) {
        ganttChart.push({ id: lastRunningId, start: segmentStart, end: currentTime });
      }
      segmentStart = currentTime;
      lastRunningId = process.id;
    }

    const process = remaining[shortestIndex];

    // Record the first time this process ever gets the CPU (for response time)
    if (process.firstStartTime === null) {
      process.firstStartTime = currentTime;
    }

    // Track Gantt chart segments (group consecutive time units of the same process)
    if (lastRunningId !== process.id) {
      if (lastRunningId !== null) {
        ganttChart.push({ id: lastRunningId, start: segmentStart, end: currentTime });
      }
      segmentStart = currentTime;
      lastRunningId = process.id;
    }

    // Run this process for one unit of time
    process.remainingTime--;
    currentTime++;

    if (process.remainingTime === 0) {
      process.completionTime = currentTime;
      completedCount++;

      // Close the Gantt segment since this process just finished
      ganttChart.push({ id: process.id, start: segmentStart, end: currentTime });
      lastRunningId = null;
    }
  }

  // Build the final results using the calculated completion times
  const results = remaining.map((process) => {
    const turnaroundTime = process.completionTime - process.arrivalTime;
    const waitingTime = turnaroundTime - process.burstTime;
    const responseTime = process.firstStartTime - process.arrivalTime;

    return {
      id: process.id,
      arrivalTime: process.arrivalTime,
      burstTime: process.burstTime,
      priority: process.priority,
      completionTime: process.completionTime,
      turnaroundTime: turnaroundTime,
      waitingTime: waitingTime,
      responseTime: responseTime
    };
  });

  return { results, ganttChart };
}

module.exports = runSRTF;
