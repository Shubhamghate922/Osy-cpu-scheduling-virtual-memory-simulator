import { useState } from "react";
import CpuInput from "../components/CpuInput.jsx";
import GanttChart from "../components/GanttChart.jsx";
import CpuResultTable from "../components/CpuResultTable.jsx";
import Statistics from "../components/Statistics.jsx";
import AlgorithmInfo from "../components/AlgorithmInfo.jsx";
import { runCpuSimulation } from "../services/api.js";

const DEFAULT_ALGORITHM = "FCFS";
const DEFAULT_QUANTUM = 3;

const DEFAULT_PROCESSES = [
  { id: "P1", arrivalTime: 0, burstTime: 5, priority: 2 },
  { id: "P2", arrivalTime: 1, burstTime: 3, priority: 1 },
  { id: "P3", arrivalTime: 2, burstTime: 8, priority: 3 },
  { id: "P4", arrivalTime: 3, burstTime: 6, priority: 2 }
];

function cloneDefaultProcesses() {
  return DEFAULT_PROCESSES.map((process) => ({ ...process }));
}

function CpuScheduling() {
  const [processes, setProcesses] = useState(cloneDefaultProcesses());
  const [algorithm, setAlgorithm] = useState(DEFAULT_ALGORITHM);
  const [timeQuantum, setTimeQuantum] = useState(DEFAULT_QUANTUM);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddProcess() {
    const nextNumber = processes.length + 1;
    setProcesses([
      ...processes,
      { id: `P${nextNumber}`, arrivalTime: 0, burstTime: 1, priority: 1 }
    ]);
  }

  function handleRemoveProcess(index) {
    if (processes.length === 1) {
      setErrorMessage("At least one process is required.");
      return;
    }
    setProcesses(processes.filter((_, i) => i !== index));
  }

  function validateInput() {
    if (processes.length === 0) {
      return "Please add at least one process.";
    }

    const ids = new Set();

    for (const process of processes) {
      if (!process.id || process.id.trim() === "") {
        return "Every process must have a Process ID.";
      }
      if (ids.has(process.id)) {
        return `Duplicate Process ID: ${process.id}`;
      }
      ids.add(process.id);

      if (process.arrivalTime === "" || Number(process.arrivalTime) < 0) {
        return `Arrival time for ${process.id} cannot be negative.`;
      }

      if (process.burstTime === "" || Number(process.burstTime) <= 0) {
        return `Burst time for ${process.id} must be greater than 0.`;
      }
    }

    if (algorithm === "ROUND_ROBIN" && (timeQuantum === "" || Number(timeQuantum) <= 0)) {
      return "Time quantum must be greater than 0.";
    }

    return "";
  }

  async function handleRunSimulation() {
    const validationError = validateInput();

    if (validationError) {
      setErrorMessage(validationError);
      setResult(null);
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const data = await runCpuSimulation({
        algorithm: algorithm,
        processes: processes.map((p) => ({
          id: p.id,
          arrivalTime: Number(p.arrivalTime),
          burstTime: Number(p.burstTime),
          priority: Number(p.priority)
        })),
        timeQuantum: Number(timeQuantum)
      });
      setResult(data);
    } catch (error) {
      setErrorMessage(
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please make sure the backend is running."
          : error.message
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setProcesses(cloneDefaultProcesses());
    setAlgorithm(DEFAULT_ALGORITHM);
    setTimeQuantum(DEFAULT_QUANTUM);
    setResult(null);
    setErrorMessage("");
  }

  return (
    <div className="space-y-6">
      <CpuInput
        processes={processes}
        setProcesses={setProcesses}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        timeQuantum={timeQuantum}
        setTimeQuantum={setTimeQuantum}
        onRun={handleRunSimulation}
        onReset={handleReset}
        onAddProcess={handleAddProcess}
        onRemoveProcess={handleRemoveProcess}
        loading={loading}
        errorMessage={errorMessage}
      />

      {!result && !errorMessage && (
        <p className="text-center text-gray-500 text-sm">
          Enter the required values and run the simulation.
        </p>
      )}

      {result && (
        <>
          <GanttChart ganttChart={result.ganttChart} />

          <CpuResultTable processResults={result.processResults} />

          <Statistics
            stats={[
              { label: "Avg Waiting Time", value: result.averageWaitingTime },
              { label: "Avg Turnaround Time", value: result.averageTurnaroundTime },
              { label: "Avg Response Time", value: result.averageResponseTime },
              { label: "CPU Utilization", value: `${result.cpuUtilization}%` }
            ]}
          />

          <AlgorithmInfo type="cpu" algorithm={result.algorithm} />
        </>
      )}
    </div>
  );
}

export default CpuScheduling;
