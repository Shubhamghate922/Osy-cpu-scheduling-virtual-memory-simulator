// Simple service functions that talk to the Express backend.
// Uses the Fetch API to keep the project easy to explain.

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://osy-cpu-scheduling-virtual-memory-rswp.onrender.com/api";

// Sends process data + selected algorithm to the backend
// and returns the calculated CPU scheduling result.
export async function runCpuSimulation(payload) {
  const response = await fetch(`${API_BASE_URL}/cpu/simulate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    // Throw the backend's error message so the caller can display it
    throw new Error(data.message || "Unable to run CPU simulation.");
  }

  return data;
}

// Sends frame count + page reference string + algorithm to the backend
// and returns the calculated page replacement result.
export async function runMemorySimulation(payload) {
  const response = await fetch(`${API_BASE_URL}/memory/simulate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to run memory simulation.");
  }

  return data;
}
