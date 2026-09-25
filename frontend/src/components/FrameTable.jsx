function FrameTable({ steps, frameCount }) {
  // Build the frame column headers dynamically: Frame 1, Frame 2, ...
  const frameHeaders = [];
  for (let i = 1; i <= frameCount; i++) {
    frameHeaders.push(`Frame ${i}`);
  }

  return (
    <div className="overflow-x-auto bg-white border border-purple-200 rounded-xl shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-purple-100 text-purple-800">
          <tr>
            <th className="px-4 py-2">Step</th>
            <th className="px-4 py-2">Page</th>
            {frameHeaders.map((header) => (
              <th key={header} className="px-4 py-2">
                {header}
              </th>
            ))}
            <th className="px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => (
            <tr key={step.step} className="border-t border-purple-100">
              <td className="px-4 py-2">{step.step}</td>
              <td className="px-4 py-2 font-semibold">{step.page}</td>
              {step.frames.map((frameValue, index) => (
                <td key={index} className="px-4 py-2">
                  {frameValue === null ? "-" : frameValue}
                </td>
              ))}
              <td
                className={
                  "px-4 py-2 font-semibold " +
                  (step.result === "Hit" ? "text-green-700" : "text-red-700")
                }
              >
                {step.result === "Hit" ? "PAGE HIT" : "PAGE FAULT"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FrameTable;
