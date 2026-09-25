const CPU_ALGORITHM_INFO = {
  FCFS: "FCFS executes processes strictly in the order they arrive. It is simple but can cause long waiting times.",
  SJF: "SJF (non-preemptive) selects the process with the shortest burst time among the processes that have arrived.",
  SRTF: "SRTF is the preemptive version of SJF. It always runs the process with the shortest remaining burst time.",
  PRIORITY: "Priority Scheduling runs the process with the highest priority (smallest priority number) first.",
  ROUND_ROBIN: "Round Robin gives each process a fixed time quantum in turn, cycling through the ready queue."
};

const MEMORY_ALGORITHM_INFO = {
  FIFO: "FIFO replaces the page that entered memory first.",
  LRU: "LRU replaces the page that has not been used for the longest time.",
  OPTIMAL: "Optimal replaces the page whose next use is farthest in the future."
};

function AlgorithmInfo({ type, algorithm }) {
  const info = type === "cpu" ? CPU_ALGORITHM_INFO[algorithm] : MEMORY_ALGORITHM_INFO[algorithm];

  if (!info) return null;

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-xl shadow-sm p-4">
      <h3 className="text-purple-700 font-bold mb-1">Algorithm Information</h3>
      <p className="text-sm text-purple-900">{info}</p>
    </div>
  );
}

export default AlgorithmInfo;
