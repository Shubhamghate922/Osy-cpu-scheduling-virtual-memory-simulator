function MemoryInput({
  frameCount,
  setFrameCount,
  referenceString,
  setReferenceString,
  algorithm,
  setAlgorithm,
  onRun,
  onReset,
  loading,
  errorMessage
}) {
  return (
    <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-5">
      <h2 className="text-lg font-bold text-purple-700 mb-4">Input / Control Panel</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="frameCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Frames (1 - 10)
          </label>
          <input
            id="frameCount"
            type="number"
            min="1"
            max="10"
            value={frameCount}
            onChange={(e) => setFrameCount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label htmlFor="algorithm" className="block text-sm font-medium text-gray-700 mb-1">
            Algorithm
          </label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="FIFO">FIFO</option>
            <option value="LRU">LRU</option>
            <option value="OPTIMAL">Optimal</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="referenceString" className="block text-sm font-medium text-gray-700 mb-1">
            Page Reference String
          </label>
          <input
            id="referenceString"
            type="text"
            value={referenceString}
            onChange={(e) => setReferenceString(e.target.value)}
            placeholder="e.g. 7 0 1 2 0 3 0 4 2 3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate page numbers with spaces or commas (maximum 50 references).
          </p>
        </div>
      </div>

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

export default MemoryInput;
