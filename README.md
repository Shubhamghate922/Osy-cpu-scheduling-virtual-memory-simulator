💻 CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator

An interactive educational web application for understanding CPU Scheduling Algorithms, Virtual Memory, and Page Replacement Algorithms through step-by-step simulations.

Designed for Diploma in Information Technology students studying Operating Systems under the MSBTE K Scheme.

<div align="center">"Operating System" (https://img.shields.io/badge/Subject-Operating%20System-blue?style=for-the-badge)
"Course Code" (https://img.shields.io/badge/Course%20Code-315319-green?style=for-the-badge)
"Semester" (https://img.shields.io/badge/Semester-5th-orange?style=for-the-badge)
"MSBTE" (https://img.shields.io/badge/Curriculum-MSBTE%20K%20Scheme-red?style=for-the-badge)

"React" (https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
"Tailwind CSS" (https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
"Vite" (https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
"Node.js" (https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
"Express.js" (https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

"📂 GitHub Repository" (https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator)

"🚀 Live Demo" (https://osy-cpu-scheduling.vercel.app/)

</div>---

📑 Table of Contents

- "About the Project" (#-about-the-project)
- "Project Objectives" (#-project-objectives)
- "Key Features" (#-key-features)
- "CPU Scheduling Algorithms" (#-cpu-scheduling-algorithms)
- "Virtual Memory Algorithms" (#-virtual-memory-algorithms)
- "Technologies Used" (#-technologies-used)
- "System Requirements" (#-system-requirements)
- "Project Structure" (#-project-structure)
- "Installation and Setup" (#-installation-and-setup)
- "How to Use" (#-how-to-use)
- "Important Formulas" (#-important-formulas)
- "API Documentation" (#-api-documentation)
- "Application Architecture" (#-application-architecture)
- "Troubleshooting" (#-troubleshooting)
- "Learning Outcomes" (#-learning-outcomes)
- "Academic Information" (#-academic-information)

---

📖 About the Project

The CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator is an educational web application that demonstrates important Operating System concepts using interactive simulations.

Instead of learning algorithms only through theory, students can enter their own inputs, execute simulations, and understand the results.

The application contains two main modules:

🖥️ 1. CPU Scheduling Simulator

Simulates CPU scheduling algorithms and displays process execution details, including completion time, turnaround time, waiting time, response time, and Gantt charts.

💾 2. Virtual Memory and Page Fault Simulator

Demonstrates page replacement algorithms using memory frames and a page reference string. It displays page hits, page faults, frame changes, and performance ratios.

«🎯 Main Objective: To make Operating System concepts easier to understand through practical, interactive, and visual demonstrations.»

---

✨ Key Features

🖥️ CPU Scheduling

- ✅ Five CPU scheduling algorithms.
- ✅ User-defined process information.
- ✅ Support for arrival time, burst time, and priority.
- ✅ Preemptive and non-preemptive scheduling.
- ✅ Interactive Gantt chart.
- ✅ Completion, turnaround, waiting, and response times.
- ✅ Average waiting time and average turnaround time.
- ✅ Round Robin time quantum configuration.

💾 Virtual Memory

- ✅ Three page replacement algorithms.
- ✅ Custom page reference strings.
- ✅ Configurable number of memory frames.
- ✅ Step-by-step memory frame table.
- ✅ Page hit and page fault calculations.
- ✅ Hit ratio and page fault ratio.
- ✅ Visual representation of memory changes.

⚙️ General Features

- ✅ Interactive and user-friendly interface.
- ✅ Separate CPU Scheduling and Virtual Memory modules.
- ✅ React-based frontend.
- ✅ Node.js and Express.js backend.
- ✅ REST API communication using JSON.
- ✅ Input validation and error handling.
- ✅ No database installation required.

---

🖥️ CPU Scheduling Algorithms

The simulator supports the following algorithms:

No.| Algorithm| Type| Description
1| FCFS| Non-Preemptive| Executes processes in arrival order.
2| SJF| Non-Preemptive| Selects the available process with the shortest burst time.
3| SRTF| Preemptive| Selects the process with the shortest remaining execution time.
4| Priority Scheduling| Preemptive / Non-Preemptive| Selects processes according to their priority.
5| Round Robin| Preemptive| Allocates a fixed time quantum to each process.

Important: In Priority Scheduling, a smaller priority number represents a higher priority.

📊 CPU Scheduling Results

The simulator calculates:

- Completion Time (CT): Time at which a process finishes execution.
- Turnaround Time (TAT): Total time from process arrival to completion.
- Waiting Time (WT): Total time spent waiting in the ready queue.
- Response Time (RT): Time from arrival until the process first receives the CPU.
- Average Waiting Time: Average waiting time of all processes.
- Average Turnaround Time: Average turnaround time of all processes.
- Gantt Chart: Visual timeline of CPU execution.

---

💾 Virtual Memory Algorithms

The simulator supports three page replacement algorithms:

No.| Algorithm| Description
1| FIFO| Replaces the page that entered memory first.
2| LRU| Replaces the page that has not been used for the longest time.
3| Optimal| Replaces the page whose next use is farthest in the future.

📈 Virtual Memory Results

- Page Hits: Number of times a requested page is already present in memory.
- Page Faults: Number of times a requested page is absent from memory.
- Hit Ratio: Percentage of page references that result in hits.
- Page Fault Ratio: Percentage of page references that result in faults.
- Frame Table: Shows the contents of memory frames after each reference.

🧪 Example Input

Number of Frames: 3

Page Reference String:
7, 0, 1, 2, 0, 3, 0, 4, 2, 3

For this input, the expected results are:

Algorithm| Page Faults| Page Hits
FIFO| 9| 1
LRU| 8| 2
Optimal| 6| 4

Note: These values assume that all frames start empty and that the simulator uses the standard versions of these algorithms.

---

🛠️ Technologies Used

Technology| Purpose
React.js| Builds the interactive user interface.
Tailwind CSS| Styles the application.
Vite| Runs the frontend development server.
Node.js| Provides the JavaScript runtime for the backend.
Express.js| Handles HTTP requests and API endpoints.
JavaScript| Implements the application and simulation logic.
REST API| Enables communication between the frontend and backend.
JSON| Transfers simulation inputs and results.

🗄️ Database

No database is required.

The application calculates simulation results when users submit their inputs. It does not require MongoDB, MySQL, or a separate database server.

---

💻 System Requirements

Before running the project locally, make sure you have:

- Operating System: Windows, macOS, or Linux.
- Node.js: An installed LTS version.
- npm: Installed with Node.js.
- Code Editor: Visual Studio Code recommended.
- Web Browser: Google Chrome, Microsoft Edge, or another modern browser.
- Internet Connection: Required for downloading the project and installing dependencies.

You do not need MongoDB, MySQL, Python, or a separate database server.

---

📁 Project Structure

The project is organized into separate frontend and backend applications.

Osy-cpu-scheduling-virtual-memory-simulator/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── ... backend routes and algorithms
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── components/
│   │   ├── ... React components and pages
│   │   └── ...
│   └── ...
│
└── README.md

«Note: This is an illustrative structure. Actual filenames and folders may differ depending on the current implementation.»

---

🚀 Installation and Setup

Follow these steps to run the application on your computer.

Step 1: Download the Project

Option A: Download ZIP

1. Open the "GitHub Repository" (https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator).
2. Click the green Code button.
3. Select Download ZIP.
4. Extract the downloaded ZIP file.
5. Open the extracted project folder.

Option B: Clone Using Git

Open a terminal and run:

git clone https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator.git

Navigate into the project:

cd Osy-cpu-scheduling-virtual-memory-simulator

Step 2: Install Node.js

Download and install the LTS version of Node.js from the official website:

"Download Node.js" (https://nodejs.org/)

Verify the installation:

node -v
npm -v

Both commands should display version numbers.

Step 3: Open the Project

1. Open Visual Studio Code.
2. Select File → Open Folder.
3. Open the main project folder.
4. Select Terminal → New Terminal.

Make sure the project contains the frontend and backend directories.

Step 4: Install Backend Dependencies

Open the first terminal and run:

cd backend
npm install

Wait for the dependencies to install.

Step 5: Start the Backend Server

In the same terminal, run:

npm run dev

The backend should start on its configured local port.

For example:

Server running on http://localhost:5000

Keep this terminal open while using the application.

«If "npm run dev" is unavailable, check the backend's "package.json" for the correct start script.»

Step 6: Install Frontend Dependencies

Open a second terminal in Visual Studio Code.

If the new terminal starts in the main project directory, run:

cd frontend

If it starts inside the backend directory, run:

cd ..
cd frontend

Install the frontend dependencies:

npm install

Step 7: Start the Frontend

In the frontend terminal, run:

npm run dev

Vite should display a local URL similar to:

VITE ready

Local: http://localhost:5173/

Open the URL displayed in your terminal in your web browser.

✅ Quick Start

Terminal 1 — Backend

cd backend
npm install
npm run dev

Terminal 2 — Frontend

cd frontend
npm install
npm run dev

Browser: Open the local URL displayed by Vite.

Important:

- Run "npm install" in both directories during initial setup.
- Keep both development servers running.
- Use the exact frontend URL displayed in the terminal.
- Do not open "index.html" directly from File Explorer.

---

🎮 How to Use

🖥️ CPU Scheduling Simulator

1. Open the application.
2. Select the CPU Scheduling module.
3. Enter the process details.
4. Select a scheduling algorithm.
5. Enter priority values when required.
6. Enter a time quantum when using Round Robin.
7. Run the simulation.
8. View the results table and Gantt chart.

Example Process Input

Process ID| Arrival Time| Burst Time| Priority
P1| 0| 5| 2
P2| 1| 3| 1
P3| 2| 8| 3
P4| 3| 6| 2

Try different algorithms using the same input to compare their results.

💾 Virtual Memory Simulator

1. Open the application.
2. Select the Virtual Memory module.
3. Enter the number of memory frames.
4. Enter the page reference string.
5. Select FIFO, LRU, or Optimal.
6. Run the simulation.
7. Examine the frame table, page hits, and page faults.
8. Compare the results of different algorithms.

Example Configuration

Frames: 3

Reference String:
7, 0, 1, 2, 0, 3, 0, 4, 2, 3

Algorithm: FIFO

---

📐 Important Formulas

CPU Scheduling Formulas

Turnaround Time

TAT = CT - AT

Waiting Time

WT = TAT - BT

Response Time

RT = First CPU Start Time - AT

Average Waiting Time

Average WT = Total Waiting Time / Number of Processes

Average Turnaround Time

Average TAT = Total Turnaround Time / Number of Processes

Where:

- AT = Arrival Time
- BT = Burst Time
- CT = Completion Time

Virtual Memory Formulas

Hit Ratio

Hit Ratio = (Page Hits / Total Page References) × 100

Page Fault Ratio

Page Fault Ratio = (Page Faults / Total Page References) × 100

For a non-empty reference string:

Page Hits + Page Faults = Total Page References

Therefore:

Hit Ratio + Page Fault Ratio = 100%

---

🔌 API Documentation

The frontend communicates with the backend using HTTP requests and JSON data.

API Base URL

http://localhost:5000/api

This is the expected local configuration. Confirm the actual port and API routes in the backend source code.

1. CPU Scheduling API

Endpoint

POST /api/cpu/simulate

Full URL

http://localhost:5000/api/cpu/simulate

Example Request

{
  "algorithm": "FCFS",
  "processes": [
    {
      "id": "P1",
      "arrivalTime": 0,
      "burstTime": 5,
      "priority": 2
    },
    {
      "id": "P2",
      "arrivalTime": 1,
      "burstTime": 3,
      "priority": 1
    }
  ]
}

Supported algorithm identifiers:

FCFS
SJF
SRTF
PRIORITY
ROUND_ROBIN

Round Robin Example

{
  "algorithm": "ROUND_ROBIN",
  "timeQuantum": 3,
  "processes": [
    {
      "id": "P1",
      "arrivalTime": 0,
      "burstTime": 5,
      "priority": 2
    }
  ]
}

2. Virtual Memory API

Endpoint

POST /api/memory/simulate

Full URL

http://localhost:5000/api/memory/simulate

Example Request

{
  "algorithm": "FIFO",
  "frames": 3,
  "pageReferences": [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]
}

Supported algorithm identifiers:

FIFO
LRU
OPTIMAL

Input Validation

The intended input limits are:

- Memory frames: 1 to 10.
- Page references: Maximum of 50 values.

These limits and the request formats should match the backend implementation.

Example Error Response

{
  "success": false,
  "message": "Error description"
}

Invalid inputs may return HTTP 400, while unexpected server errors may return HTTP 500.

---

🔄 Application Architecture

The application follows a client-server architecture.

                USER
                  |
                  v
          REACT FRONTEND
                  |
                  | HTTP Request
                  | JSON Input
                  v
          EXPRESS BACKEND
                  |
                  v
           INPUT VALIDATION
                  |
                  v
          SELECTED ALGORITHM
                  |
                  v
          CALCULATE RESULTS
                  |
                  v
           JSON RESPONSE
                  |
                  v
          REACT FRONTEND
                  |
                  v
          DISPLAY RESULTS

How It Works

1. The user enters simulation data.
2. The frontend sends the input to the backend.
3. Express receives the API request.
4. The backend validates the input.
5. The selected algorithm processes the data.
6. The backend calculates the simulation results.
7. The results are returned as JSON.
8. React displays the results in tables, charts, and statistics.

Why Is There No Database?

The application performs calculations using the input provided by the user. It does not need to permanently store user accounts or simulation records.

---

🛠️ Troubleshooting

1. "node" or "npm" Is Not Recognized

Solution:

- Install Node.js.
- Restart Visual Studio Code.
- Open a new terminal.
- Run "node -v" and "npm -v".

2. "npm install" Fails

Possible causes:

- Incorrect project directory.
- Missing "package.json".
- Internet connection problems.
- Dependency installation errors.

Solution: Navigate to the correct directory and verify that it contains "package.json".

3. Missing Script: "dev"

Solution: Check the "scripts" section in the relevant "package.json" file. Use a script that actually exists in the project.

4. Port 5000 Is Already in Use

Solution: Check whether another backend instance is already running. If necessary, change the backend port and update the frontend API configuration.

5. Port 5173 Is Already in Use

Vite may select another available port.

Solution: Open the exact URL displayed in the terminal.

6. Unable to Connect to the Backend

Check the following:

- The backend server is running.
- The API base URL is correct.
- The configured backend port is correct.
- The backend routes match the frontend requests.
- No CORS or network errors are preventing the request.

Check "frontend/src/services/api.js" if that file exists in your project.

7. Simulations Are Not Working

Verify that:

- Arrival times are non-negative.
- Burst times are positive.
- Required priority values are provided.
- The Round Robin time quantum is positive.
- The number of frames is valid.
- The page reference string contains valid values.
- The selected algorithm is supported.

8. Changes Are Not Appearing

- Save your changes.
- Refresh the browser.
- Check the terminal for errors.
- Restart the relevant development server if necessary.

To stop a server, press:

Ctrl + C

---

🎓 Learning Outcomes

After using this project, students should be able to:

- Explain the purpose of CPU scheduling.
- Differentiate between preemptive and non-preemptive scheduling.
- Understand FCFS, SJF, SRTF, Priority, and Round Robin.
- Calculate CPU scheduling performance metrics.
- Interpret a Gantt chart.
- Understand virtual memory, paging, and memory frames.
- Explain page hits and page faults.
- Compare FIFO, LRU, and Optimal page replacement.
- Calculate hit and page fault ratios.
- Understand REST API communication.
- Explain the roles of React, Node.js, and Express.js.
- Understand the basic working of a client-server application.

---

🎓 Academic Information

Field| Details
Project Title| CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator
Subject| Operating System
Course Code| 315319
Programme| Diploma in Information Technology
Semester| Fifth Semester
Curriculum| MSBTE K Scheme
Frontend| React.js, Tailwind CSS, Vite
Backend| Node.js, Express.js
Database| Not Required
Project Type| Educational Web Application

---

👨‍💻 Project Purpose

This project is developed for educational purposes to demonstrate Operating System algorithms through interactive simulations.

It helps students connect theoretical concepts with practical results and supports academic assignments, practical demonstrations, and viva preparation.

---

<div align="center">🌟 Happy Learning! 🎓💻

If you find this project helpful, consider giving the repository a ⭐ on GitHub!

"⬆ Back to Top" (#-cpu-scheduling-algorithm--virtual-memory-and-page-fault-simulator)

</div>