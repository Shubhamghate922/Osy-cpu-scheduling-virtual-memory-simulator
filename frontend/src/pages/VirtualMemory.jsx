import { useState } from "react";
import MemoryInput from "../components/MemoryInput.jsx";
import FrameTable from "../components/FrameTable.jsx";
import Statistics from "../components/Statistics.jsx";
import AlgorithmInfo from "../components/AlgorithmInfo.jsx";
import { runMemorySimulation } from "../services/api.js";

const DEFAULT_FRAMES = 3;
const DEFAULT_REFERENCE_STRING = "7 0 1 2 0 3 0 4 2 3";
const DEFAULT_ALGORITHM = "FIFO";
const MAX_REFERENCES = 50;

function VirtualMemory() {
  const [frameCount, setFrameCount] = useState(DEFAULT_FRAMES);
  const [referenceString, setReferenceString] = useState(DEFAULT_REFERENCE_STRING);
  const [algorithm, setAlgorithm] = useState(DEFAULT_ALGORITHM);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Converts "7 0 1 2" or "7,0,1,2" into a clean array of numbers.
  function parseReferenceString(input) {
    return input
      .split(/[\s,]+/)
      .filter((value) => value.trim() !== "")
      .map((value) => Number(value));
  }

  function validateInput(frames, pages) {
    if (frames === "" || frames === null) {
      return "Please enter the number of frames.";
    }

    const framesNumber = Number(frames);
    if (!Number.isInteger(framesNumber) || framesNumber < 1 || framesNumber > 10) {
      return "Number of frames must be between 1 and 10.";
    }

    if (pages.length === 0) {
      return "Please enter a page reference string.";
    }

    if (pages.some((page) => Number.isNaN(page))) {
      return "Please enter valid page numbers.";
    }

    if (pages.length > MAX_REFERENCES) {
      return `Please enter no more than ${MAX_REFERENCES} page references.`;
    }

    return "";
  }

  async function handleRunSimulation() {
    const pages = parseReferenceString(referenceString);
    const validationError = validateInput(frameCount, pages);

    if (validationError) {
      setErrorMessage(validationError);
      setResult(null);
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const data = await runMemorySimulation({
        algorithm: algorithm,
        frames: Number(frameCount),
        pageReferences: pages
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
    setFrameCount(DEFAULT_FRAMES);
    setReferenceString(DEFAULT_REFERENCE_STRING);
    setAlgorithm(DEFAULT_ALGORITHM);
    setResult(null);
    setErrorMessage("");
  }

  const lastStep = result && result.steps.length > 0 ? result.steps[result.steps.length - 1] : null;

  return (
    <div className="space-y-6">
      <MemoryInput
        frameCount={frameCount}
        setFrameCount={setFrameCount}
        referenceString={referenceString}
        setReferenceString={setReferenceString}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        onRun={handleRunSimulation}
        onReset={handleReset}
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
          <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-bold text-purple-700 mb-2">Simulation Result</h2>
            <p className="text-gray-700">
              Current Page: <span className="font-semibold">{lastStep.page}</span>
            </p>
            <p className="text-gray-700">
              Status:{" "}
              <span
                className={
                  "font-bold " +
                  (lastStep.result === "Hit" ? "text-green-700" : "text-red-700")
                }
              >
                {lastStep.result === "Hit" ? "PAGE HIT" : "PAGE FAULT"}
              </span>
            </p>
          </div>

          <FrameTable steps={result.steps} frameCount={frameCount} />

          <Statistics
            stats={[
              { label: "Total References", value: result.totalReferences },
              { label: "Page Hits", value: result.pageHits },
              { label: "Page Faults", value: result.pageFaults },
              { label: "Hit Ratio", value: `${result.hitRatio}%` }
            ]}
          />

          <p className="text-center text-sm text-gray-600">
            Page Fault Ratio: <span className="font-semibold">{result.faultRatio}%</span>
          </p>

          <AlgorithmInfo type="memory" algorithm={result.algorithm} />
        </>
      )}
    </div>
  );
}

export default VirtualMemory;
