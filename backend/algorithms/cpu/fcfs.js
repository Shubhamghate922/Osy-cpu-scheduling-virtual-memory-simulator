// FCFS (First Come First Serve) CPU Scheduling Algorithm
//
// Logic:
// - Processes are executed strictly in the order they arrive.
// - FCFS is non-preemptive (a running process is never interrupted).

function runFCFS(processes) {
  // Sort a copy of the processes by arrival time (and then by original order)
  const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);

  let currentTime = 0;
  const ganttChart = [];
  const results = [];

  for (let i = 0; i < sorted.length; i++) {
    const process = sorted[i];

    // If the CPU is idle before this process arrives, move time forward
// and record that idle gap as its own Gantt chart segment
if (currentTime < process.arrivalTime) {
  ganttChart.push({
    id: "IDLE",
    start: currentTime,
    end: process.arrivalTime
  });
  currentTime = process.arrivalTime;
}

    const startTime = currentTime;
    const completionTime = startTime + process.burstTime;

    // Calculate turnaround time
    const turnaroundTime = completionTime - process.arrivalTime;

    // Calculate waiting time
    const waitingTime = turnaroundTime - process.burstTime;

    // Response time = time of first execution - arrival time
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
  }

  return { results, ganttChart };
}

module.exports = runFCFS;
