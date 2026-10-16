💻 CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator

<div align="center">

https://img.shields.io/badge/Subject-Operating%20System-blue?style=for-the-badge
https://img.shields.io/badge/Course%20Code-315319-green?style=for-the-badge
https://img.shields.io/badge/Semester-5th-orange?style=for-the-badge
https://img.shields.io/badge/Curriculum-MSBTE%20K%20Scheme-red?style=for-the-badge

https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black
https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white

An interactive web application for learning and understanding CPU scheduling algorithms and virtual memory page replacement algorithms.

🔗 GitHub Repository • 🚀 Live Demo

</div>

---

📚 Table of Contents

· About the Project
· Project Features
· Technologies Used
· System Requirements
· Project Structure
· Installation Guide
  · Step 1: Download the Project
  · Step 2: Install Node.js
  · Step 3: Open the Project
  · Step 4: Install Backend Dependencies
  · Step 5: Start the Backend Server
  · Step 6: Install Frontend Dependencies
  · Step 7: Start the Frontend Website
· How to Use the Simulator
· CPU Scheduling Algorithms
· Virtual Memory Algorithms
· API Documentation
· How the Application Works
· Troubleshooting
· Frequently Asked Questions
· Learning Outcomes
· Academic Information

---

📖 About the Project

The CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator is an educational web application designed to make Operating System concepts easier to understand through practical demonstrations.

The project contains two main modules:

🖥️ CPU Scheduling Simulator

CPU scheduling is the process by which an operating system decides which process should execute on the CPU.

The simulator supports five CPU scheduling algorithms:

# Algorithm Type
1 First Come, First Served (FCFS) Non-Preemptive
2 Shortest Job First (SJF) Non-Preemptive
3 Shortest Remaining Time First (SRTF) Preemptive
4 Priority Scheduling Preemptive/Non-Preemptive
5 Round Robin Preemptive

Results include:

· ✅ Completion Time (CT)
· ✅ Turnaround Time (TAT)
· ✅ Waiting Time (WT)
· ✅ Response Time (RT)
· ✅ Average Turnaround Time
· ✅ Average Waiting Time
· ✅ Gantt Chart

💾 Virtual Memory and Page Fault Simulator

Virtual memory allows an operating system to manage memory by loading the required pages into physical memory as needed. When the requested page is not present in memory, a page fault occurs.

The simulator supports three page replacement algorithms:

# Algorithm Description
1 First In, First Out (FIFO) Replaces the oldest page
2 Least Recently Used (LRU) Replaces least recently used page
3 Optimal Page Replacement Replaces page used farthest in future

Displays:

· ✅ Step-by-step frame table
· ✅ Page hits
· ✅ Page faults
· ✅ Hit ratio
· ✅ Page fault ratio
· ✅ Memory frame changes

🎯 Project Objective

The main objective of this project is to help students understand the working of CPU scheduling and page replacement algorithms by providing an interactive environment in which they can test different inputs and compare the results.

---

✨ Project Features

🖥️ CPU Scheduling

· ✅ Supports five scheduling algorithms
· ✅ Accepts user-defined process information
· ✅ Calculates process execution statistics
· ✅ Displays a Gantt chart
· ✅ Calculates average waiting and turnaround times
· ✅ Supports preemptive and non-preemptive scheduling methods

💾 Virtual Memory

· ✅ Supports FIFO, LRU, and Optimal algorithms
· ✅ Accepts a custom page reference string
· ✅ Allows the user to specify the number of frames
· ✅ Displays memory contents after each page reference
· ✅ Calculates page hits and page faults
· ✅ Calculates hit and page fault ratios

🔧 General Features

· ✅ Interactive user interface
· ✅ Separate CPU Scheduling and Virtual Memory modules
· ✅ React-based frontend
· ✅ Node.js and Express.js backend
· ✅ Communication through REST APIs
· ✅ Input validation
· ✅ No database installation required
· ✅ Designed for Operating System learning and practical demonstrations

---

🛠️ Technologies Used

Technology Purpose
React.js Creates the interactive user interface
Tailwind CSS Styles the application
Vite Runs the frontend development server
Node.js Provides the JavaScript runtime for the backend
Express.js Handles API requests and responses
JavaScript Implements the simulation algorithms
REST API Enables communication between the frontend and backend
JSON Transfers input data and simulation results

🗄️ Database

No database is required. The application is designed to calculate simulation results when a request is submitted. It does not require MongoDB, MySQL, or another database server.

---

💻 System Requirements

Before running the project, make sure you have the following:

Requirement Description
Operating System Windows, macOS, or Linux
Node.js An installed LTS version
npm Installed with Node.js
Code Editor Visual Studio Code is recommended
Web Browser Google Chrome, Microsoft Edge, or another modern browser
Internet Connection Required for initial download and dependency installation

❌ Software You Do NOT Need

You do not need to install:

· ❌ MongoDB
· ❌ MongoDB Compass
· ❌ MySQL
· ❌ Python
· ❌ A separate database server

Note: The setup instructions below use Windows and PowerShell. Users of macOS or Linux can follow the same general steps with their terminal.

---

📁 Project Structure

```
cpu-memory-simulator/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── ... (algorithm implementations)
│
└── frontend/
    ├── package.json
    ├── src/
    │   ├── services/
    │   │   └── api.js
    │   └── ... (React components)
    └── ...
```

Important: Open the main project folder containing both backend and frontend. Do not open either subfolder as the entire project.

---

🚀 Installation Guide

📥 Step 1: Download the Project

Method A: Download ZIP (Recommended for Beginners)

This method does not require Git.

1. Open the project repository:
      https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator
2. Click the green Code button.
3. Select Download ZIP.
4. Wait for the ZIP file to download.
5. Open your Downloads folder.
6. Right-click the downloaded ZIP file and select Extract All.
7. Choose a folder where you want to save the project and click Extract.

After extraction, open the extracted project folder. You should be able to locate the backend and frontend directories.

Method B: Clone Using Git

If Git is installed on your computer, open PowerShell and execute:

```bash
git clone https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator.git
```

After the download finishes, enter the project directory:

```bash
cd Osy-cpu-scheduling-virtual-memory-simulator
```

---

📦 Step 2: Install Node.js

Node.js is required to run the backend and the frontend development tools.

1. Download Node.js:
      Open the official website: https://nodejs.org/
2. Download the LTS version and install it using the recommended settings.
3. After installation, close and reopen your terminal.
4. Verify Node.js:

```bash
node -v
```

Expected output (example):

```
v22.x.x
```

5. Verify npm:

```bash
npm -v
```

If both commands display version numbers, Node.js and npm are available.

⚠️ If either command is not recognized, restart your terminal and check your Node.js installation.

---

📂 Step 3: Open the Project in Visual Studio Code

1. Launch Visual Studio Code.
2. Open the project folder:
   · Click File → Open Folder
   · Navigate to the extracted project directory
   · Select the main project folder
   · Click Select Folder
3. Make sure you can see both the backend and frontend folders in the Explorer panel.
4. Open the terminal:
   · Click Terminal → New Terminal
5. Check the project directory:

```bash
dir
```

You should see the backend and frontend folders.

---

⚙️ Step 4: Install Backend Dependencies

Navigate to the backend folder:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

npm reads the backend's package.json file and installs the required packages. Wait until the installation finishes.

⚠️ Do not proceed until the dependencies have installed successfully.

---

🚀 Step 5: Start the Backend Server

In the same terminal, run:

```bash
npm run dev
```

Expected result:

```
Server running on http://localhost:5000
```

✅ If the server starts successfully, leave this terminal open.
⚠️ Do not close this terminal while using the website.

What is the backend?

The backend is responsible for performing the actual simulation calculations:

1. The backend receives the input.
2. It validates the input.
3. It executes the selected scheduling algorithm.
4. It calculates the results.
5. It returns the results to the frontend.
6. The frontend then displays those results.

---

🌐 Step 6: Install Frontend Dependencies

You must open a second terminal because the backend is already running in the first terminal.

1. In VS Code: Terminal → New Terminal
2. You should now have two terminals:
   · Terminal 1: Backend (running)
   · Terminal 2: Frontend
3. Navigate to the frontend folder:

```bash
cd frontend
```

If it starts inside the backend folder, run:

```bash
cd ..
cd frontend
```

4. Install the dependencies:

```bash
npm install
```

---

▶️ Step 7: Start the Frontend Website

After installing the frontend dependencies, run:

```bash
npm run dev
```

Expected result:

```
VITE ready

Local: http://localhost:5173/
```

The port may differ if another application is using the default port.

5. Open the website:
   · Open Google Chrome or another modern browser
   · Enter the local URL displayed in the terminal (e.g., http://localhost:5173/)
   · Press Enter

✅ Important rules:

· Keep the backend terminal running.
· Keep the frontend terminal running.
· Do not close either terminal while using the application.
· Open the exact URL displayed by Vite.
· Do not open index.html directly from File Explorer.

---

⚡ Quick Start: All Commands

Terminal 1: Backend

```bash
cd backend
npm install
npm run dev
```

Keep this terminal open.

Terminal 2: Frontend

```bash
cd frontend
npm install
npm run dev
```

Keep this terminal open as well.

Browser

Open the URL printed by Vite (usually http://localhost:5173/).

💡 First-time setup: Run npm install in both folders.
💡 Future runs: After dependencies are installed, you normally only need to start the two servers with npm run dev.

---

🎮 How to Use the Simulator

The website contains two main modules:

1. CPU Scheduling
2. Virtual Memory

Use the navigation tabs to switch between them.

---

Module 1: CPU Scheduling

Steps:

1. Open the website.
2. Select the CPU Scheduling module.
3. Enter the process details.
4. Select a scheduling algorithm.
5. Enter the time quantum if Round Robin is selected.
6. Enter priority values if Priority Scheduling is selected.
7. Click the simulation button.
8. View the results table and Gantt chart.

Understanding the Process Inputs

Input Meaning Example
Process ID Unique name of a process P1
Arrival Time (AT) Time when a process enters the ready queue 0
Burst Time (BT) Total CPU time required by a process 5
Priority Scheduling priority 2
Time Quantum Maximum CPU time allocated in one Round Robin turn 3

📌 Note: In this project, a smaller priority number represents a higher priority.

Sample CPU Scheduling Input

Process Arrival Time Burst Time Priority
P1 0 5 2
P2 1 3 1
P3 2 8 3
P4 3 6 2

Try different algorithms using the same process information.
For Round Robin, set the time quantum to 3.

Understanding CPU Scheduling Results

Term Meaning
CT Completion Time
TAT Turnaround Time
WT Waiting Time
RT Response Time
Average WT Average waiting time of all processes
Average TAT Average turnaround time of all processes
Gantt Chart Timeline showing CPU execution

📐 Important Formulas

```
Turnaround Time:  TAT = CT - AT
Waiting Time:     WT  = TAT - BT
Response Time:    RT  = First CPU Start Time - AT
```

---

Module 2: Virtual Memory and Page Fault Simulator

Steps:

1. Open the website.
2. Select the Virtual Memory module.
3. Enter the number of memory frames.
4. Enter the page reference string.
5. Select FIFO, LRU, or Optimal.
6. Click the simulation button.
7. View the frame table and statistics.

Understanding the Inputs

Input Meaning Example
Number of Frames Number of available physical memory frames 3
Page Reference String Sequence of requested page numbers 7, 0, 1, 2, 0, 3, 0, 4, 2, 3
Algorithm Page replacement method FIFO

Sample Virtual Memory Input

· Number of frames: 3
· Page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3

Expected Results

Algorithm Page Faults Page Hits
FIFO 9 1
LRU 8 2
Optimal 6 4

📐 Understanding Page Hits and Page Faults

· Page Hit: The requested page is already present in a memory frame.
· Page Fault: The requested page is not present in a memory frame and must be loaded.

```
Hit Ratio        = (Page Hits / Total Page References) × 100
Page Fault Ratio = (Page Faults / Total Page References) × 100
```

For the FIFO example:

```
Total References = 10
Page Hits        = 1
Page Faults      = 9

Hit Ratio        = (1 / 10) × 100 = 10%
Page Fault Ratio = (9 / 10) × 100 = 90%
```

✅ The two ratios should total 100% when every reference is classified as either a hit or a fault.

---

🧠 CPU Scheduling Algorithms

1️⃣ FCFS — First Come, First Served

· Executes processes in arrival order.
· Simple to understand and implement.
· A long process may cause shorter processes to wait (convoy effect).
· Type: Non-preemptive

2️⃣ SJF — Shortest Job First

· Selects the available process with the shortest CPU burst time.
· In this project, SJF is non-preemptive.
· Type: Non-preemptive

3️⃣ SRTF — Shortest Remaining Time First

· Selects the process with the shortest remaining execution time.
· If a new process arrives with a shorter remaining time, the CPU may switch.
· Type: Preemptive

4️⃣ Priority Scheduling

· Selects a process based on its priority.
· Smaller number = Higher priority
· Larger number = Lower priority
· Type: Preemptive or Non-Preemptive (depends on implementation)

5️⃣ Round Robin

· Gives each process a fixed amount of CPU time called the time quantum.
· If a process does not finish within its time quantum, it returns to the ready queue.
· Commonly used in time-sharing systems.
· Type: Preemptive

---

💾 Virtual Memory Algorithms

1️⃣ FIFO — First In, First Out

· Replaces the page that has been in memory the longest.
· Follows the order in which pages entered memory.
· Does not consider how recently they were used.

2️⃣ LRU — Least Recently Used

· Replaces the page that has not been used for the longest time.
· Uses the history of page references to determine which page to replace.

3️⃣ Optimal Page Replacement

· Replaces the page whose next use is farthest in the future.
· Produces the minimum possible number of page faults.
· Requires knowledge of future page references (theoretical benchmark).

---

🔌 API Documentation

The frontend communicates with the backend using HTTP POST requests.

API Base URL

```
http://localhost:5000/api
```

🖥️ CPU Scheduling API

Endpoint:

```
POST /api/cpu/simulate
```

Full local URL:

```
http://localhost:5000/api/cpu/simulate
```

Example request:

```json
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
```

Supported algorithm values:

```
FCFS
SJF
SRTF
PRIORITY
ROUND_ROBIN
```

Round Robin example:

```json
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
```

💾 Virtual Memory API

Endpoint:

```
POST /api/memory/simulate
```

Full local URL:

```
http://localhost:5000/api/memory/simulate
```

Example request:

```json
{
  "algorithm": "FIFO",
  "frames": 3,
  "pageReferences": [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]
}
```

Supported algorithm values:

```
FIFO
LRU
OPTIMAL
```

📏 Input Limits

· Frames must be between 1 and 10
· Page references can contain a maximum of 50 values

⚠️ Error Handling

The backend returns an HTTP 400 response when the submitted input is invalid:

```json
{
  "success": false,
  "message": "Error description"
}
```

Unexpected server errors should return HTTP 500.

---

🔄 How the Application Works

The application follows a client-server architecture:

```
         USER
           |
           v
   REACT FRONTEND
           |
           | HTTP POST Request
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
```

Working Process

1. The user enters data in the React interface.
2. The frontend sends the data to the backend using an API request.
3. Express receives the request.
4. The backend validates the input.
5. The appropriate algorithm executes.
6. The backend calculates the results.
7. The backend returns the results in JSON format.
8. React displays the results in tables, charts, and statistics.

❓ Why These Technologies?

Technology Reason
React Helps build an interactive interface using reusable components
Tailwind CSS Provides utility classes for styling the interface
Node.js & Express.js Node.js runs the JavaScript backend; Express.js handles HTTP requests and API routes
No Database The application calculates results when requested rather than storing data permanently
Backend Calculations Separates the interface from the calculations, making logic easier to test and maintain

---

🛠️ Troubleshooting

Problem 1: node or npm is not recognized

Cause: Node.js may not be installed correctly or may be missing from the system PATH.

Solution:

1. Install Node.js from the official website.
2. Close and reopen VS Code.
3. Open a new terminal.
4. Run:

```bash
node -v
npm -v
```

If the commands still fail, check your Node.js installation and PATH configuration.

---

Problem 2: npm install fails

Possible causes:

· Internet connection problems
· Incorrect project directory
· Missing package.json
· Dependency installation errors

Solution:

Check your current directory:

```bash
dir    # Windows
ls     # macOS/Linux
```

Make sure you are inside the correct folder. The backend installation must be run inside backend, and the frontend installation must be run inside frontend.

---

Problem 3: Missing script: dev

Cause: The relevant package.json file may not contain a dev script.

Solution:

Open the package.json file and check its scripts section.

A typical Vite frontend configuration includes:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

A backend using Nodemon might include:

```json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

---

Problem 4: Port 5000 is already in use

Cause: Another process may already be using port 5000.

Solution:

1. Check whether the backend is already running in another terminal.
2. If it is, use that existing server instead of starting another copy.
3. Otherwise, identify the process using port 5000.
4. If necessary, configure the backend to use another port and update the frontend API URL to match.

---

Problem 5: Port 5173 is already in use

Vite may automatically choose another available port.

Check the terminal output and open the exact URL it displays.

---

Problem 6: Unable to connect to the server

Possible causes:

· The backend is not running
· The frontend is using the wrong API URL
· The backend is running on another port
· A request is failing because of CORS or another network configuration issue

Solution:

1. Check the backend terminal.
2. Make sure the backend started successfully.
3. Confirm the backend port.
4. Open frontend/src/services/api.js.
5. Verify the API base URL (expected default: http://localhost:5000/api).
6. Check for errors in the backend terminal.
7. Refresh the website and try again.

---

Problem 7: The website opens, but simulations fail

Possible causes:

· Invalid input
· Unsupported algorithm name
· Missing required fields
· Backend calculation errors

Solution:

For CPU Scheduling:

· Enter valid process IDs
· Use non-negative arrival times
· Use positive burst times
· Enter priority values when required
· Enter a positive time quantum for Round Robin

For Virtual Memory:

· Use between 1 and 10 frames
· Enter a valid page reference string
· Enter no more than 50 page references

---

Problem 8: Changes are not appearing

Solution:

1. Save the modified files.
2. Check whether the development servers are still running.
3. Refresh the browser.
4. Check the terminal for errors.
5. If necessary, restart the relevant server.

To stop a server, select its terminal and press:

```
Ctrl + C
```

---

Problem 9: The website works on one computer but not another

Possible causes:

· Node.js is missing on the second computer
· Dependencies have not been installed
· The backend is not running
· The frontend is configured to use an incorrect API address

Solution:

Install Node.js, install dependencies in both folders, start both servers, and open the frontend URL.

If the frontend and backend run on separate computers, the API URL must point to the computer running the backend rather than localhost.

---

❓ Frequently Asked Questions

<details>
<summary><b>Is this project suitable for beginners?</b></summary>

Yes. The project provides an interactive way to understand CPU scheduling and virtual memory concepts. The installation instructions are intended to help beginners start the application.

</details>

<details>
<summary><b>Do I need MongoDB?</b></summary>

No. The project does not require MongoDB or another database.

</details>

<details>
<summary><b>Why do I need two terminals?</b></summary>

The first terminal runs the backend server. The second terminal runs the frontend development server. Both must be running for the complete application to work locally.

</details>

<details>
<summary><b>Can I open <code>index.html</code> directly?</b></summary>

No. The project uses React and Vite, so you should start the frontend development server and open the URL displayed in the terminal. Opening the HTML file directly does not start the backend or provide the intended application environment.

</details>

<details>
<summary><b>Do I need to install dependencies every time?</b></summary>

No. Normally, you only need to install dependencies during initial setup. You may need to run npm install again if dependencies change or the installation needs to be repaired.

</details>

<details>
<summary><b>Does the project save simulation results permanently?</b></summary>

No. The project is designed as a stateless simulator and does not require a database to store simulation results.

</details>

<details>
<summary><b>Can I use the application without an internet connection?</b></summary>

After downloading the project and installing its dependencies, local execution generally works without an internet connection, provided the application does not depend on external resources.

</details>

<details>
<summary><b>How do I stop the application?</b></summary>

Press Ctrl + C in each terminal to stop the corresponding server.

</details>

<details>
<summary><b>How do I run the project again?</b></summary>

Open the project in VS Code.

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite.

</details>

<details>
<summary><b>Can I deploy this project online?</b></summary>

Yes. The frontend and backend can be deployed using compatible hosting services. However, the frontend API configuration must point to the deployed backend URL rather than localhost. Both services must be configured correctly for the online application to work.

</details>

---

🎯 Learning Outcomes

After using this project, students should be able to:

· ✅ Explain CPU scheduling and its purpose
· ✅ Differentiate between preemptive and non-preemptive algorithms
· ✅ Understand FCFS, SJF, SRTF, Priority, and Round Robin
· ✅ Calculate completion, turnaround, waiting, and response times
· ✅ Interpret a CPU scheduling Gantt chart
· ✅ Understand virtual memory, paging, and memory frames
· ✅ Explain page hits and page faults
· ✅ Compare FIFO, LRU, and Optimal page replacement
· ✅ Calculate hit and page fault ratios
· ✅ Understand communication between frontend and backend
· ✅ Explain REST APIs and JSON
· ✅ Understand the role of React, Node.js, and Express.js in a web application

---

🎓 Academic Information

Field Details
Project Title CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator
Subject Operating System
Course Code 315319
Programme Diploma in Information Technology
Semester Fifth Semester
Curriculum MSBTE K Scheme
Frontend React.js and Tailwind CSS
Backend Node.js and Express.js
Database Not Required

---

👨‍💻 Project Purpose

This project is developed for educational purposes to demonstrate Operating System algorithms through interactive simulations. It helps students connect theoretical concepts with practical results and supports academic assignments, demonstrations, and viva preparation.

---

<div align="center">

🌟 Happy Learning! 🎓💻

If you found this project helpful, please give it a ⭐ on GitHub!

⬆ Back to Top

</div>