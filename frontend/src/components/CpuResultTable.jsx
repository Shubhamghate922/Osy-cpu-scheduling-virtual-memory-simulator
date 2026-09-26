function CpuResultTable({ processResults }) {
  // The backend only sends a real priority value for Priority Scheduling.
  // For every other algorithm it sends null - so we hide the column
  // instead of displaying a number the user never entered.
  const showPriority = processResults.some((process) => process.priority !== null);

  return (
    <div className="overflow-x-auto bg-white border border-purple-200 rounded-xl shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-purple-100 text-purple-800">
          <tr>
            <th className="px-4 py-2">Process</th>
            <th className="px-4 py-2">AT</th>
            <th className="px-4 py-2">BT</th>
            {showPriority && <th className="px-4 py-2">Priority</th>}
            <th className="px-4 py-2">CT</th>
            <th className="px-4 py-2">TAT</th>
            <th className="px-4 py-2">WT</th>
            <th className="px-4 py-2">RT</th>
          </tr>
        </thead>
        <tbody>
          {processResults.map((process) => (
            <tr key={process.id} className="border-t border-purple-100">
              <td className="px-4 py-2 font-semibold">{process.id}</td>
              <td className="px-4 py-2">{process.arrivalTime}</td>
              <td className="px-4 py-2">{process.burstTime}</td>
              {showPriority && <td className="px-4 py-2">{process.priority}</td>}
              <td className="px-4 py-2">{process.completionTime}</td>
              <td className="px-4 py-2">{process.turnaroundTime}</td>
              <td className="px-4 py-2">{process.waitingTime}</td>
              <td className="px-4 py-2">{process.responseTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CpuResultTable;