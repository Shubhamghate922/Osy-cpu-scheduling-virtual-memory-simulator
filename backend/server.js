// Main Express server for the CPU Scheduling & Virtual Memory Simulator backend

const express = require("express");
const cors = require("cors");

const cpuRoutes = require("./routes/cpuRoutes");
const memoryRoutes = require("./routes/memoryRoutes");

const app = express();
// Render (and most hosting platforms) assign a port dynamically via the
// PORT environment variable and only route traffic to that exact port.
// Falling back to 5000 keeps local development working unchanged.
const PORT = process.env.PORT || 5000;

// ----- Middleware -----
app.use(cors());          // Allow the React frontend to talk to this backend
app.use(express.json());  // Parse JSON request bodies

// ----- Health check route -----
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CPU Scheduling & Virtual Memory Simulator API is running"
  });
});

// ----- Feature routes -----
app.use("/api/cpu", cpuRoutes);
app.use("/api/memory", memoryRoutes);

// ----- Fallback for unknown routes -----
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
