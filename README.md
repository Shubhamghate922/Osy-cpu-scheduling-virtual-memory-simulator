# CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator

**Subject:** Operating System (Course Code 315319)
**Programme:** 5th Semester Diploma in Information Technology (MSBTE K Scheme)
**Stack:** React + Tailwind CSS (frontend) · Node.js + Express.js (backend) · No database

---

## 1. What this project does

A single-page web app with two modules, switchable from a tab bar:

- **CPU Scheduling** — FCFS, SJF (non-preemptive), SRTF (preemptive), Priority, and Round Robin.
  Enter a table of processes (Arrival Time, Burst Time, Priority), pick an algorithm, and the
  backend returns completion/turnaround/waiting/response times plus a Gantt chart.
- **Virtual Memory** — FIFO, LRU, and Optimal page replacement. Enter the number of frames and a
  page reference string, and the backend returns the step-by-step frame table, hit/fault counts,
  and ratios.

All calculations happen on the Express backend (see `backend/algorithms/`). React only sends
input and displays whatever JSON comes back — nothing is hard-coded in the frontend.

## 2. Folder structure

```
cpu-memory-simulator/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   ├── cpuRoutes.js
│   │   └── memoryRoutes.js
│   ├── controllers/
│   │   ├── cpuController.js
│   │   └── memoryController.js
│   └── algorithms/
│       ├── cpu/        (fcfs.js, sjf.js, srtf.js, priority.js, roundRobin.js)
│       └── memory/      (fifo.js, lru.js, optimal.js)
│
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx, App.jsx, index.css
        ├── components/ (Header, InfoCard, Navigation, CpuInput, MemoryInput,
        │                 GanttChart, FrameTable, CpuResultTable, Statistics,
        │                 AlgorithmInfo, Footer)
        ├── pages/       (CpuScheduling.jsx, VirtualMemory.jsx)
        └── services/    (api.js)
```

## 3. How to run it

You need [Node.js](https://nodejs.org) installed. Then open **two terminals**.

**Terminal 1 — Backend**
```
cd backend
npm install
npm run dev
```
You should see: `Server running on http://localhost:5000`

**Terminal 2 — Frontend**
```
cd frontend
npm install
npm run dev
```
Open the URL Vite prints (usually `http://localhost:5173`).

The frontend is hard-coded to call `http://localhost:5000/api`, so make sure the backend is
running first. If the backend isn't running, the app shows: *"Unable to connect to the server."*

## 4. API reference

**CPU Scheduling** — `POST /api/cpu/simulate`
```json
{
  "algorithm": "FCFS",
  "processes": [
    { "id": "P1", "arrivalTime": 0, "burstTime": 5, "priority": 2 }
  ],
  "timeQuantum": 3
}
```
`algorithm` is one of `FCFS`, `SJF`, `SRTF`, `PRIORITY`, `ROUND_ROBIN`. `timeQuantum` is only
required for Round Robin. `priority` is only required for Priority Scheduling (smaller number =
higher priority).

**Virtual Memory** — `POST /api/memory/simulate`
```json
{
  "algorithm": "FIFO",
  "frames": 3,
  "pageReferences": [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]
}
```
`algorithm` is one of `FIFO`, `LRU`, `OPTIMAL`. `frames` must be between 1 and 10.
`pageReferences` accepts at most 50 values.

Both endpoints return `{ "success": false, "message": "..." }` with a 400 status on invalid
input, and 500 on an unexpected server error.

## 5. Verified test cases

These were run directly against the backend logic while building this project:

| Test | Frames | Algorithm | Result |
|---|---|---|---|
| `7 0 1 2 0 3 0 4 2 3` | 3 | FIFO | 9 faults, 1 hit |
| `7 0 1 2 0 3 0 4 2 3` | 3 | LRU | 8 faults, 2 hits |
| `7 0 1 2 0 3 0 4 2 3` | 3 | Optimal | 6 faults, 4 hits |
| `1 2 1 3 1 2` | 2 | FIFO | 5 faults, 1 hit |
| `1 2 3 4 1 2 5 1 2 3` | 4 | LRU | 6 faults, 4 hits |

Sample process set (P1: AT0/BT5, P2: AT1/BT3, P3: AT2/BT8, P4: AT3/BT6) was hand-traced against
FCFS, SJF, SRTF, Priority, and Round Robin (quantum 3) — every completion time, Gantt chart
segment, and average matched.

## 6. Viva explanation (short answers)

**CPU Scheduling**
- **CPU scheduling** — deciding which process in the ready queue gets the CPU next.
- **FCFS** — runs processes strictly in arrival order; simple but can cause long waits (convoy effect).
- **SJF** — always picks the waiting process with the shortest burst time; non-preemptive here.
- **SRTF** — preemptive SJF; switches to a newly arrived process if its remaining time is shorter.
- **Priority Scheduling** — runs the highest-priority process first (smaller number = higher priority in this project).
- **Round Robin** — every process gets a fixed time slice (quantum) in turn; fair for time-sharing systems.
- **Arrival Time (AT)** — when a process enters the ready queue.
- **Burst Time (BT)** — how much CPU time a process needs in total.
- **Completion Time (CT)** — when a process finishes execution.
- **Turnaround Time (TAT)** — CT − AT (total time from arrival to finish).
- **Waiting Time (WT)** — TAT − BT (time spent waiting, not running).
- **Response Time (RT)** — time from arrival to the process's *first* time on the CPU.
- **Gantt chart** — a timeline showing which process ran during which time interval.

**Virtual Memory**
- **Virtual memory** — lets a program use more memory than physically available RAM by keeping only active parts in memory.
- **Paging** — splitting memory into fixed-size blocks called pages/frames so a process doesn't need contiguous memory.
- **Page / Frame** — a page is a block of a process's virtual memory; a frame is where it's stored in physical memory.
- **Page fault** — the requested page is not currently in a frame, so it must be loaded in (possibly replacing another page).
- **Page hit** — the requested page is already present in a frame.
- **Page replacement** — the strategy for choosing which page to evict when memory is full and a fault occurs.
- **FIFO** — evicts the page that has been in memory the longest, regardless of use.
- **LRU** — evicts the page that hasn't been used for the longest time.
- **Optimal** — evicts the page whose next use is farthest in the future (possible only because the whole reference string is known ahead of time — used here as a theoretical benchmark).
- **Hit ratio** — (Page Hits ÷ Total References) × 100.
- **Page Fault ratio** — (Page Faults ÷ Total References) × 100.

**Architecture**
- **Why React?** — component-based UI that re-renders automatically when state (like simulation results) changes.
- **Why Tailwind CSS?** — utility classes let you style directly in JSX without writing a separate stylesheet.
- **Why Node.js + Express?** — a lightweight JavaScript backend that can expose REST endpoints and run the actual algorithm logic.
- **Why no MongoDB?** — this is a stateless calculator; nothing needs to be permanently stored between requests.
- **How do frontend and backend talk?** — the React app sends a `POST` request (JSON body) using `fetch()`; Express parses it, runs the algorithm, and sends back a JSON response.
- **Why is the algorithm logic in the backend and not React?** — so the calculation is centralized, testable, and not dependent on the user's browser; it also matches how real client-server systems separate presentation from computation.
