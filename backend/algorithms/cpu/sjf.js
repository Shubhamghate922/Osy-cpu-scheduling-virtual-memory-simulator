// SJF (Shortest Job First) CPU Scheduling Algorithm - Non-Preemptive
//
// Logic:
// - Among all the processes that have arrived, pick the one with the
//   shortest burst time.
// - Once a process starts, let it run to completion (non-preemptive).

function runSJF(processes) {
  const pending = [...processes]; // Processes not yet completed
  const results = [];
  const ganttChart = [];

  let currentTime = 0;
  let completedCount = 0;
  const totalProcesses = pending.length;
  const isDone = new Array(totalProcesses).fill(false);

  while (completedCount < totalProcesses) {
    // Find all processes that have arrived and are not completed
    let shortestIndex = -1;
    let shortestBurst = Infinity;

    for (let i = 0; i < totalProcesses; i++) {
      if (!isDone[i] && pending[i].arrivalTime <= currentTime) {
        if (pending[i].burstTime < shortestBurst) {
          shortestBurst = pending[i].burstTime;
          shortestIndex = i;
        }
      }
    }

    // If no process has arrived yet, move time forward to the next arrival
// and record that idle gap as its own Gantt chart segment
if (shortestIndex === -1) {
  const nextArrival = Math.min(
    ...pending.filter((p, i) => !isDone[i]).map((p) => p.arrivalTime)
  );
  ganttChart.push({ id: "IDLE", start: currentTime, end: nextArrival });
  currentTime = nextArrival;
  continue;
}

    const process = pending[shortestIndex];
    const startTime = currentTime;
    const completionTime = startTime + process.burstTime;
    const turnaroundTime = completionTime - process.arrivalTime;
    const waitingTime = turnaroundTime - process.burstTime;
    const responseTime = startTime - process.arrivalTime;

    ganttChart.push({
      id: process.id,
      start: startTime,
      end: completionTime
    });

    results.push({
      id: process.id,
      arrivalTime: process.arrivalTime,
      burstTime: process.burstTime,
      priority: process.priority,
      completionTime: completionTime,
      turnaroundTime: turnaroundTime,
      waitingTime: waitingTime,
      responseTime: responseTime
    });

    currentTime = completionTime;
    isDone[shortestIndex] = true;
    completedCount++;
  }

  return { results, ganttChart };
}

module.exports = runSJF;
