function CpuInput({
  processes,
  setProcesses,
  algorithm,
  setAlgorithm,
  timeQuantum,
  setTimeQuantum,
  onRun,
  onReset,
  onAddProcess,
  onRemoveProcess,
  loading,
  errorMessage
}) {
  const showPriority = algorithm === "PRIORITY";
  const showQuantum = algorithm === "ROUND_ROBIN";

  function updateProcessField(index, field, value) {
    const updated = processes.map((process, i) =>
      i === index ? { ...process, [field]: value } : process
    );
    setProcesses(updated);
  }

  return (
    <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-5">
      <h2 className="text-lg font-bold text-purple-700 mb-4">Input / Control Panel</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="cpuAlgorithm" className="block text-sm font-medium text-gray-700 mb-1">
            Select CPU Scheduling Algorithm
          </label>
          <select
            id="cpuAlgorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="FCFS">FCFS</option>
            <option value="SJF">SJF</option>
            <option value="SRTF">SRTF</option>
            <option value="PRIORITY">Priority</option>
            <option value="ROUND_ROBIN">Round Robin</option>
          </select>
        </div>

        {showQuantum && (
          <div>
            <label htmlFor="timeQuantum" className="block text-sm font-medium text-gray-700 mb-1">
              Time Quantum
            </label>
            <input
              id="timeQuantum"
              type="number"
              min="1"
              value={timeQuantum}
              onChange={(e) => setTimeQuantum(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left mb-3">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="px-3 py-2">Process</th>
              <th className="px-3 py-2">Arrival Time</th>
              <th className="px-3 py-2">Burst Time</th>
              {showPriority && <th className="px-3 py-2">Priority</th>}
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {processes.map((process, index) => (
              <tr key={index} className="border-t border-purple-100">
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={process.id}
                    onChange={(e) => updateProcessField(index, "id", e.target.value)}
                    className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    min="0"
                    value={process.arrivalTime}
                    onChange={(e) => updateProcessField(index, "arrivalTime", e.target.value)}
                    className="w-24 border border-gray-300 rounded-lg px-2 py-1"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    min="1"
                    value={process.burstTime}
                    onChange={(e) => updateProcessField(index, "burstTime", e.target.value)}
                    className="w-24 border border-gray-300 rounded-lg px-2 py-1"
                  />
                </td>
                {showPriority && (
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      min="1"
                      value={process.priority}
                      onChange={(e) => updateProcessField(index, "priority", e.target.value)}
                      className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                    />
                  </td>
                )}
                <td className="px-3 py-2">
                  <button
                    onClick={() => onRemoveProcess(index)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={onAddProcess}
        className="text-purple-700 border border-purple-300 hover:bg-purple-50 font-semibold px-4 py-1.5 rounded-lg text-sm"
      >
        + Add Process
      </button>

      {errorMessage && (
        <p className="text-red-600 text-sm font-medium mt-3">{errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={onRun}
          disabled={loading}
          className="bg-purple-700 hover:bg-purple-800 disabled:bg-purple-300 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          {loading ? "Running Simulation..." : "Run Simulation"}
        </button>
        <button
          onClick={onReset}
          className="bg-white border border-purple-300 hover:bg-purple-50 text-purple-700 font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CpuInput;
