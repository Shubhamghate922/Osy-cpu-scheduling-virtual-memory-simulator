// Round Robin CPU Scheduling Algorithm
//
// Logic:
// - Each process gets the CPU for at most one Time Quantum.
// - If the process is not finished within that quantum, it goes back
//   to the end of the ready queue.
// - Newly arrived processes join the back of the ready queue.
// - This continues until every process has completed.

function runRoundRobin(processes, timeQuantum) {
  // Sort processes by arrival time so we can bring them into the
  // ready queue in the correct order
  const sortedByArrival = [...processes].sort(
    (a, b) => a.arrivalTime - b.arrivalTime
  );

  const totalProcesses = sortedByArrival.length;

  // Working copy that tracks remaining burst time for each process
  const remaining = sortedByArrival.map((p) => ({
    ...p,
    remainingTime: p.burstTime,
    firstStartTime: null,
    completionTime: null
  }));

  const queue = [];       // Ready queue - holds indexes into "remaining"
  const ganttChart = [];
  let currentTime = 0;
  let arrivalPointer = 0; // Points to the next process (in remaining) that hasn't arrived yet
  let completedCount = 0;

  // Bring in any processes that have already arrived at time 0
  while (
    arrivalPointer < totalProcesses &&
    remaining[arrivalPointer].arrivalTime <= currentTime
  ) {
    queue.push(arrivalPointer);
    arrivalPointer++;
  }

  // If nothing has arrived yet, jump time to the first arrival
  // and record that idle gap as its own Gantt chart segment
  if (queue.length === 0 && arrivalPointer < totalProcesses) {
    const nextArrival = remaining[arrivalPointer].arrivalTime;
    if (nextArrival > currentTime) {
      ganttChart.push({ id: "IDLE", start: currentTime, end: nextArrival });
    }
    currentTime = nextArrival;
    queue.push(arrivalPointer);
    arrivalPointer++;
  }

  while (completedCount < totalProcesses) {
    const index = queue.shift();
    const process = remaining[index];

    // Record the first time this process gets the CPU (for response time)
    if (process.firstStartTime === null) {
      process.firstStartTime = currentTime;
    }

    // Run the process for at most one time quantum
    const runTime = Math.min(timeQuantum, process.remainingTime);
    const startTime = currentTime;
    currentTime += runTime;
    process.remainingTime -= runTime;

    ganttChart.push({
      id: process.id,
      start: startTime,
      end: currentTime
    });

    // Add any processes that arrived during this time slice to the ready queue
    while (
      arrivalPointer < totalProcesses &&
      remaining[arrivalPointer].arrivalTime <= currentTime
    ) {
      queue.push(arrivalPointer);
      arrivalPointer++;
    }

    if (process.remainingTime > 0) {
      // Process is not finished - send it back to the end of the queue
      queue.push(index);
    } else {
      // Process has completed
      process.completionTime = currentTime;
      completedCount++;
    }

    // If the ready queue is empty but processes are still waiting to arrive,
    // move the clock forward to the next arrival and record the gap as idle
    if (queue.length === 0 && arrivalPointer < totalProcesses) {
      const nextArrival = remaining[arrivalPointer].arrivalTime;
      const gapStart = currentTime;
      currentTime = Math.max(currentTime, nextArrival);
      if (currentTime > gapStart) {
        ganttChart.push({ id: "IDLE", start: gapStart, end: currentTime });
      }
      queue.push(arrivalPointer);
      arrivalPointer++;
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

module.exports = runRoundRobin;
