// Generic statistics card grid.
// "stats" is an array of { label, value } objects so this same
// component can be reused for both CPU and Memory results.

function Statistics({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-purple-200 rounded-xl shadow-sm p-4 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</p>
          <p className="text-xl md:text-2xl font-bold text-purple-700 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
