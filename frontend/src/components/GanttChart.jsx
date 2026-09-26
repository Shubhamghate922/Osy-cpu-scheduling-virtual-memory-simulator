// Simple Gantt chart built with div widths proportional to each
// process's duration. Colors alternate between two purple shades
// so consecutive segments are easy to tell apart. Idle CPU time
// (segment id "IDLE") is always shown in red so it stands out.

const SEGMENT_COLORS = ["bg-purple-600", "bg-purple-400"];
const IDLE_COLOR = "bg-red-500";

function getSegmentColor(segment, index) {
  if (segment.id === "IDLE") {
    return IDLE_COLOR;
  }
  return SEGMENT_COLORS[index % SEGMENT_COLORS.length];
}

function GanttChart({ ganttChart }) {
  const totalTime = ganttChart.length > 0 ? ganttChart[ganttChart.length - 1].end : 0;
  const hasIdleTime = ganttChart.some((segment) => segment.id === "IDLE");

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
                  getSegmentColor(segment, index)
                }
              >
                {segment.id === "IDLE" ? "Idle" : segment.id}
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

      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-gray-500">Total time elapsed: {totalTime}</p>
        {hasIdleTime && (
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-sm bg-red-500"></span>
            Idle CPU time
          </p>
        )}
      </div>
    </div>
  );
}

export default GanttChart;