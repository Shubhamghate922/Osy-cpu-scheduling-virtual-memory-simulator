// Simple Gantt chart built with div widths proportional to each
// process's duration. Colors alternate between two purple shades
// so consecutive segments are easy to tell apart.

const SEGMENT_COLORS = ["bg-purple-600", "bg-purple-400"];

function GanttChart({ ganttChart }) {
  const totalTime = ganttChart.length > 0 ? ganttChart[ganttChart.length - 1].end : 0;

  return (
    <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-4">
      <h3 className="text-purple-700 font-bold mb-3">Gantt Chart</h3>

      <div className="overflow-x-auto">
        <div className="flex min-w-max border border-purple-300 rounded-lg overflow-hidden">
          {ganttChart.map((segment, index) => {
            const duration = segment.end - segment.start;
            const widthPx = Math.max(duration * 40, 40); // 40px per time unit, minimum 40px

            return (
              <div
                key={index}
                style={{ width: `${widthPx}px` }}
                className={
                  "text-white text-center py-3 font-semibold border-r border-white " +
                  SEGMENT_COLORS[index % SEGMENT_COLORS.length]
                }
              >
                {segment.id}
              </div>
            );
          })}
        </div>

        <div className="flex min-w-max mt-1">
          {ganttChart.map((segment, index) => {
            const duration = segment.end - segment.start;
            const widthPx = Math.max(duration * 40, 40);

            return (
              <div
                key={index}
                style={{ width: `${widthPx}px` }}
                className="text-xs text-gray-600 relative"
              >
                <span className="absolute left-0 -translate-x-1/2">{segment.start}</span>
                {index === ganttChart.length - 1 && (
                  <span className="absolute right-0 translate-x-1/2">{segment.end}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">Total time elapsed: {totalTime}</p>
    </div>
  );
}

export default GanttChart;
