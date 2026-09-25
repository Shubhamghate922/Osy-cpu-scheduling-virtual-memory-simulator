// Priority Scheduling Algorithm - Non-Preemptive
//
// Rule used in this project:
// Smaller priority number = Higher priority (Priority 1 is highest).
//
// Logic:
// - Among all the processes that have arrived, pick the one with the
//   highest priority (smallest priority number).
// - If two processes have the same priority, the one that arrived first goes first.
// - Once a process starts, let it run to completion (non-preemptive).

function runPriority(processes) {
  const pending = [...processes];
  const totalProcesses = pending.length;
  const isDone = new Array(totalProcesses).fill(false);

  let currentTime = 0;
  let completedCount = 0;
  const results = [];
  const ganttChart = [];

  while (completedCount < totalProcesses) {
    let selectedIndex = -1;

    for (let i = 0; i < totalProcesses; i++) {
      if (!isDone[i] && pending[i].arrivalTime <= currentTime) {
        if (selectedIndex === -1) {
          selectedIndex = i;
        } else {
          const currentBest = pending[selectedIndex];
          const candidate = pending[i];

          // Smaller priority number wins (higher priority)
          if (candidate.priority < currentBest.priority) {
            selectedIndex = i;
          } else if (
            candidate.priority === currentBest.priority &&
            candidate.arrivalTime < currentBest.arrivalTime
          ) {
            // Tie-breaker: earlier arrival time goes first
            selectedIndex = i;
          }
        }
      }
    }

    // If no process has arrived yet, move time forward to the next arrival
    if (selectedIndex === -1) {
      const nextArrival = Math.min(
        ...pending.filter((p, i) => !isDone[i]).map((p) => p.arrivalTime)
      );
      currentTime = nextArrival;
      continue;
    }

    const process = pending[selectedIndex];
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
    isDone[selectedIndex] = true;
    completedCount++;
  }

  return { results, ganttChart };
}

module.exports = runPriority;
