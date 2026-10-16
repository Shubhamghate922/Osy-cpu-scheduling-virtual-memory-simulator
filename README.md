💻 CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator

An interactive web application for learning and understanding CPU scheduling algorithms and virtual memory page replacement algorithms.

This project is developed as an academic project for Operating System (315319), Fifth Semester Diploma in Information Technology, under the MSBTE K Scheme.

The application allows users to enter their own inputs, execute simulations, and understand how different Operating System algorithms work through tables, statistics, and visual representations.

🔗 Project Links

- GitHub Repository: "Osy-cpu-scheduling-virtual-memory-simulator" (https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator)
- Live Demo: https://osysim.vercel.app/

---

📚 Table of Contents

1. "About the Project" (#-about-the-project)
2. "Project Features" (#-project-features)
3. "Technologies Used" (#-technologies-used)
4. "System Requirements" (#-system-requirements)
5. "Project Structure" (#-project-structure)
6. "Download the Project" (#-step-1-download-the-project)
7. "Install Node.js" (#-step-2-install-nodejs)
8. "Open the Project" (#-step-3-open-the-project)
9. "Install Backend Dependencies" (#-step-4-install-backend-dependencies)
10. "Start the Backend Server" (#-step-5-start-the-backend-server)
11. "Install Frontend Dependencies" (#-step-6-install-frontend-dependencies)
12. "Start the Frontend Website" (#-step-7-start-the-frontend-website)
13. "How to Use the Simulator" (#-how-to-use-the-simulator)
14. "CPU Scheduling Algorithms" (#-cpu-scheduling-algorithms)
15. "Virtual Memory Algorithms" (#-virtual-memory-algorithms)
16. "API Documentation" (#-api-documentation)
17. "How the Application Works" (#-how-the-application-works)
18. "Troubleshooting" (#-troubleshooting)
19. "Frequently Asked Questions" (#-frequently-asked-questions)
20. "Learning Outcomes" (#-learning-outcomes)
21. "Academic Information" (#-academic-information)

---

📖 About the Project

The CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator is an educational web application designed to make Operating System concepts easier to understand through practical demonstrations.

The project contains two main modules.

1. CPU Scheduling Simulator

CPU scheduling is the process by which an operating system decides which process should execute on the CPU.

The simulator supports five CPU scheduling algorithms:

- First Come, First Served (FCFS)
- Shortest Job First (SJF)
- Shortest Remaining Time First (SRTF)
- Priority Scheduling
- Round Robin

Users can enter process information, select an algorithm, and view the calculated results.

The results include:

- Completion Time (CT)
- Turnaround Time (TAT)
- Waiting Time (WT)
- Response Time (RT)
- Average Turnaround Time
- Average Waiting Time
- Gantt Chart

2. Virtual Memory and Page Fault Simulator

Virtual memory allows an operating system to manage memory by loading the required pages into physical memory as needed.

When the requested page is not present in memory, a page fault occurs.

The simulator supports three page replacement algorithms:

- First In, First Out (FIFO)
- Least Recently Used (LRU)
- Optimal Page Replacement

Users can enter the number of memory frames and a page reference string.

The simulator displays:

- Step-by-step frame table
- Page hits
- Page faults
- Hit ratio
- Page fault ratio
- Memory frame changes

Project Objective

The main objective of this project is to help students understand the working of CPU scheduling and page replacement algorithms by providing an interactive environment in which they can test different inputs and compare the results.

---

✨ Project Features

CPU Scheduling

- Supports five scheduling algorithms.
- Accepts user-defined process information.
- Calculates process execution statistics.
- Displays a Gantt chart.
- Calculates average waiting and turnaround times.
- Supports preemptive and non-preemptive scheduling methods.

Virtual Memory

- Supports FIFO, LRU, and Optimal algorithms.
- Accepts a custom page reference string.
- Allows the user to specify the number of frames.
- Displays memory contents after each page reference.
- Calculates page hits and page faults.
- Calculates hit and page fault ratios.

General Features

- Interactive user interface.
- Separate CPU Scheduling and Virtual Memory modules.
- React-based frontend.
- Node.js and Express.js backend.
- Communication through REST APIs.
- Input validation.
- No database installation required.
- Designed for Operating System learning and practical demonstrations.

---

🛠️ Technologies Used

Technology| Purpose
React.js| Creates the interactive user interface.
Tailwind CSS| Styles the application.
Vite| Runs the frontend development server.
Node.js| Provides the JavaScript runtime for the backend.
Express.js| Handles API requests and responses.
JavaScript| Implements the simulation algorithms.
REST API| Enables communication between the frontend and backend.
JSON| Transfers input data and simulation results.

Database

No database is required.

The application is designed to calculate simulation results when a request is submitted. It does not require MongoDB, MySQL, or another database server.

---

💻 System Requirements

Before running the project, make sure you have the following:

Requirement| Description
Operating System| Windows, macOS, or Linux
Node.js| An installed LTS version
npm| Installed with Node.js
Code Editor| Visual Studio Code is recommended
Web Browser| Google Chrome, Microsoft Edge, or another modern browser
Internet Connection| Required for initial download and dependency installation

Software you do not need

You do not need to install:

- MongoDB
- MongoDB Compass
- MySQL
- Python
- A separate database server

The setup instructions below use Windows and PowerShell. Users of macOS or Linux can follow the same general steps with their terminal.

---

📥 Step 1: Download the Project

There are two ways to download the project.

Method A: Download ZIP (Recommended for Beginners)

This method does not require Git.

Step 1: Open the project repository.

"Open the GitHub Repository" (https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator)

Step 2: Click the green Code button.

Step 3: Select Download ZIP.

Step 4: Wait for the ZIP file to download.

Step 5: Open your Downloads folder.

Step 6: Right-click the downloaded ZIP file and select Extract All.

Step 7: Choose a folder where you want to save the project and click Extract.

After extraction, open the extracted project folder.

You should be able to locate the "backend" and "frontend" directories.

The expected structure is:

cpu-memory-simulator/
├── backend/
└── frontend/

The actual root folder name may differ.

Important: Open the main project folder containing both "backend" and "frontend". Do not open either subfolder as the entire project.

Method B: Clone Using Git

If Git is installed on your computer, you can download the project using a terminal.

Open PowerShell and execute:

git clone https://github.com/Shubhamghate922/Osy-cpu-scheduling-virtual-memory-simulator.git

After the download finishes, enter the project directory:

cd Osy-cpu-scheduling-virtual-memory-simulator

The project files should now be available on your computer.

---

📦 Step 2: Install Node.js

Node.js is required to run the backend and the frontend development tools.

1. Download Node.js

Open the official website:

"Download Node.js" (https://nodejs.org/)

Download the LTS version and install it using the recommended settings.

After installation, close and reopen your terminal.

2. Verify Node.js

Open PowerShell or the VS Code terminal.

Run:

node -v

This command displays the installed Node.js version.

For example:

v22.x.x

Your version may be different.

3. Verify npm

Run:

npm -v

This command displays the installed npm version.

If both commands display version numbers, Node.js and npm are available.

If either command is not recognized, restart your terminal and check your Node.js installation.

---

📂 Step 3: Open the Project in Visual Studio Code

Visual Studio Code makes it easier to manage the frontend and backend files.

1. Open Visual Studio Code

Launch Visual Studio Code on your computer.

2. Open the project folder

1. Click File.
2. Select Open Folder.
3. Navigate to the extracted project directory.
4. Select the main project folder.
5. Click Select Folder.

Make sure you can see both the "backend" and "frontend" folders in the Explorer panel.

3. Open the terminal

From the top menu:

1. Click Terminal.
2. Select New Terminal.

A terminal panel will appear at the bottom of VS Code.

4. Check the project directory

Run:

dir

On Windows, this command lists the files and folders in the current directory.

You should see the "backend" and "frontend" folders.

If you do not see them, use File → Open Folder to open the correct directory.

---

⚙️ Step 4: Install Backend Dependencies

The backend handles input validation, algorithm execution, calculations, and API responses.

1. Navigate to the backend folder

In the first VS Code terminal, run:

cd backend

2. Install the dependencies

Execute:

npm install

npm reads the backend's "package.json" file and installs the required packages.

Wait until the installation finishes.

3. Confirm the installation

The backend directory should contain its "package.json" file.

If "npm install" reports an error, check the error message and confirm that you are in the correct directory.

Do not proceed until the dependencies have installed successfully.

---

🚀 Step 5: Start the Backend Server

After installing the backend dependencies, start the server.

In the same terminal, run:

npm run dev

This command assumes that "backend/package.json" contains a "dev" script.

For example, the project may use Nodemon to restart the server automatically when backend files change.

Expected result

The terminal should display a message similar to:

Server running on http://localhost:5000

The exact message depends on the server configuration.

If the server starts successfully, leave this terminal open.

Do not close this terminal while using the website.

What is the backend?

The backend is responsible for performing the actual simulation calculations.

For example, when you submit CPU process details:

1. The backend receives the input.
2. It validates the input.
3. It executes the selected scheduling algorithm.
4. It calculates the results.
5. It returns the results to the frontend.

The frontend then displays those results.

---

🌐 Step 6: Install Frontend Dependencies

The frontend is the part of the application that users see and interact with.

You must open a second terminal because the backend is already running in the first terminal.

1. Open a second terminal

In VS Code:

1. Click Terminal.
2. Select New Terminal.

You should now have two terminals.

- Terminal 1: Backend
- Terminal 2: Frontend

2. Navigate to the frontend folder

If the second terminal starts in the main project folder, run:

cd frontend

If it starts inside the backend folder, run:

cd ..
cd frontend

You can check your current location using:

pwd

Make sure the current directory ends in "frontend".

3. Install the dependencies

Run:

npm install

This installs the frontend packages listed in "frontend/package.json".

Wait for the installation to finish.

---

▶️ Step 7: Start the Frontend Website

After installing the frontend dependencies, run:

npm run dev

This command starts the Vite development server, assuming the frontend package configuration includes the standard Vite development script.

Expected result

Vite should display a message similar to:

VITE ready

Local: http://localhost:5173/

The port may differ if another application is using the default port.

Open the website

1. Open Google Chrome or another modern browser.
2. Enter the local URL displayed in the terminal.
3. Press Enter.

For example:

http://localhost:5173/

The CPU Scheduling and Virtual Memory Simulator should open.

Important rules

- Keep the backend terminal running.
- Keep the frontend terminal running.
- Do not close either terminal while using the application.
- Open the exact URL displayed by Vite.
- Do not open "index.html" directly from File Explorer.

React and Vite need the development server to load the application correctly, and the frontend needs the backend to perform simulations.

---

⚡ Quick Start: All Commands

After Node.js is installed and the project is downloaded, follow this checklist.

Terminal 1: Backend

Open a terminal in the main project directory and run:

cd backend
npm install
npm run dev

Keep this terminal open.

Terminal 2: Frontend

Open a second terminal in the main project directory and run:

cd frontend
npm install
npm run dev

Keep this terminal open as well.

Browser

Open the URL printed by Vite.

Usually:

http://localhost:5173/

First-time setup: Run "npm install" in both folders.

Future runs: After the dependencies have been installed, you normally only need to start the two servers with "npm run dev".

---

🎮 How to Use the Simulator

The website contains two main modules:

1. CPU Scheduling
2. Virtual Memory

Use the navigation tabs to switch between them.

Module 1: CPU Scheduling

Follow these steps:

1. Open the website.
2. Select the CPU Scheduling module.
3. Enter the process details.
4. Select a scheduling algorithm.
5. Enter the time quantum if Round Robin is selected.
6. Enter priority values if Priority Scheduling is selected.
7. Click the simulation button.
8. View the results table and Gantt chart.

Understanding the process inputs

Input| Meaning| Example
Process ID| Unique name of a process| P1
Arrival Time (AT)| Time when a process enters the ready queue| 0
Burst Time (BT)| Total CPU time required by a process| 5
Priority| Scheduling priority| 2
Time Quantum| Maximum CPU time allocated in one Round Robin turn| 3

In this project, a smaller priority number represents a higher priority.

Sample CPU Scheduling input

You can use the following process set to test the simulator.

Process| Arrival Time| Burst Time| Priority
P1| 0| 5| 2
P2| 1| 3| 1
P3| 2| 8| 3
P4| 3| 6| 2

Try different algorithms using the same process information.

For Round Robin, set the time quantum to:

3

The results will vary according to the selected scheduling algorithm.

Understanding CPU scheduling results

Term| Meaning
CT| Completion Time
TAT| Turnaround Time
WT| Waiting Time
RT| Response Time
Average WT| Average waiting time of all processes
Average TAT| Average turnaround time of all processes
Gantt Chart| Timeline showing CPU execution

Important formulas

Turnaround Time:

TAT = CT - AT

Waiting Time:

WT = TAT - BT

Response Time:

RT = First CPU Start Time - AT

These formulas help you verify the calculated results manually.

---

Module 2: Virtual Memory and Page Fault Simulator

Follow these steps:

1. Open the website.
2. Select the Virtual Memory module.
3. Enter the number of memory frames.
4. Enter the page reference string.
5. Select FIFO, LRU, or Optimal.
6. Click the simulation button.
7. View the frame table and statistics.

Understanding the inputs

Input| Meaning| Example
Number of Frames| Number of available physical memory frames| 3
Page Reference String| Sequence of requested page numbers| 7, 0, 1, 2, 0
Algorithm| Page replacement method| FIFO

Sample Virtual Memory input

Number of frames:

3

Page reference string:

7, 0, 1, 2, 0, 3, 0, 4, 2, 3

Select one of the available algorithms and run the simulation.

Expected results

For the example above, assuming three initially empty frames and standard algorithm implementations:

Algorithm| Page Faults| Page Hits
FIFO| 9| 1
LRU| 8| 2
Optimal| 6| 4

These results can be used to check whether the page replacement calculations are working correctly.

Understanding page hits and page faults

Page Hit: The requested page is already present in a memory frame.

Page Fault: The requested page is not present in a memory frame and must be loaded.

Hit Ratio:

Hit Ratio = (Page Hits / Total Page References) × 100

Page Fault Ratio:

Page Fault Ratio = (Page Faults / Total Page References) × 100

For the FIFO example:

Total References = 10
Page Hits = 1
Page Faults = 9

Therefore:

Hit Ratio = (1 / 10) × 100 = 10%

Page Fault Ratio = (9 / 10) × 100 = 90%

The two ratios should total 100% when every reference is classified as either a hit or a fault.

---

🧠 CPU Scheduling Algorithms

The CPU Scheduling module includes five algorithms.

1. FCFS — First Come, First Served

FCFS executes processes in arrival order.

It is simple to understand and implement. However, a long process may cause shorter processes to wait.

Type: Non-preemptive.

2. SJF — Shortest Job First

SJF selects the available process with the shortest CPU burst time.

In this project, SJF is non-preemptive. Once a process starts, it continues until it finishes.

Type: Non-preemptive.

3. SRTF — Shortest Remaining Time First

SRTF selects the process with the shortest remaining execution time.

If a new process arrives with a shorter remaining time than the currently running process, the CPU may switch to the new process.

Type: Preemptive.

4. Priority Scheduling

Priority Scheduling selects a process based on its priority.

In this project:

- Smaller number = Higher priority.
- Larger number = Lower priority.

The preemptive or non-preemptive behaviour depends on the implementation in the backend.

5. Round Robin

Round Robin gives each process a fixed amount of CPU time called the time quantum.

If a process does not finish within its time quantum, it returns to the ready queue to wait for another turn.

It is commonly used in time-sharing systems.

Type: Preemptive.

---

💾 Virtual Memory Algorithms

The Virtual Memory module includes three page replacement algorithms.

1. FIFO — First In, First Out

FIFO replaces the page that has been in memory the longest.

It follows the order in which pages entered memory and does not consider how recently they were used.

2. LRU — Least Recently Used

LRU replaces the page that has not been used for the longest time.

It uses the history of page references to determine which page should be replaced.

3. Optimal Page Replacement

Optimal replaces the page whose next use is farthest in the future.

For a given reference string and frame count, it produces the minimum possible number of page faults.

However, it requires knowledge of future page references, making it primarily a theoretical benchmark.

---

🔌 API Documentation

The frontend communicates with the backend using HTTP POST requests.

A POST request sends data to the backend for processing.

The backend returns the calculated results as JSON.

API Base URL

The default local API base URL is:

http://localhost:5000/api

This assumes the backend is configured to run on port 5000 and the frontend uses this API base URL.

1. CPU Scheduling API

Endpoint:

POST /api/cpu/simulate

Full local URL:

http://localhost:5000/api/cpu/simulate

Example request:

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

The backend receives the process information, executes the selected algorithm, and returns the scheduling results.

Supported algorithm values

FCFS
SJF
SRTF
PRIORITY
ROUND_ROBIN

Round Robin example

Round Robin requires a time quantum.

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

Endpoint:

POST /api/memory/simulate

Full local URL:

http://localhost:5000/api/memory/simulate

Example request:

{
  "algorithm": "FIFO",
  "frames": 3,
  "pageReferences": [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]
}

Supported algorithm values

FIFO
LRU
OPTIMAL

Input limits

According to the intended API configuration:

- Frames must be between 1 and 10.
- Page references can contain a maximum of 50 values.

Error handling

The backend is designed to return an HTTP 400 response when the submitted input is invalid.

Example:

{
  "success": false,
  "message": "Error description"
}

Unexpected server errors should return HTTP 500.

The actual error message depends on the backend's validation and error-handling implementation.

---

🔄 How the Application Works

The application follows a client-server architecture.

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

Working process

1. The user enters data in the React interface.
2. The frontend sends the data to the backend using an API request.
3. Express receives the request.
4. The backend validates the input.
5. The appropriate algorithm executes.
6. The backend calculates the results.
7. The backend returns the results in JSON format.
8. React displays the results in tables, charts, and statistics.

Why React?

React helps build an interactive interface using reusable components.

Why Tailwind CSS?

Tailwind CSS provides utility classes for styling the interface.

Why Node.js and Express.js?

Node.js runs the JavaScript backend, while Express.js handles HTTP requests and API routes.

Why is a database not required?

The application is designed to calculate results when requested rather than store user information or simulation history permanently.

Why are calculations performed in the backend?

Keeping the algorithm logic in the backend separates the interface from the calculations, making the logic easier to test and maintain.

---

🛠️ Troubleshooting

If the project does not run correctly, use the solutions below.

Problem 1: "node" or "npm" is not recognized

Cause: Node.js may not be installed correctly or may be missing from the system PATH.

Solution:

1. Install Node.js from the official website.
2. Close and reopen VS Code.
3. Open a new terminal.
4. Run:

node -v
npm -v

If the commands still fail, check your Node.js installation and PATH configuration.

Problem 2: "npm install" fails

Possible causes:

- Internet connection problems.
- Incorrect project directory.
- Missing "package.json".
- Dependency installation errors.

Solution:

Check your current directory.

On Windows:

dir

On macOS or Linux:

ls

Make sure you are inside the correct folder.

The backend installation must be run inside "backend", and the frontend installation must be run inside "frontend".

Problem 3: Missing script: "dev"

Cause: The relevant "package.json" file may not contain a "dev" script.

Solution:

Open the "package.json" file in the folder where the command failed.

Check its "scripts" section.

A typical Vite frontend configuration includes:

{
  "scripts": {
    "dev": "vite"
  }
}

A backend using Nodemon might include:

{
  "scripts": {
    "dev": "nodemon server.js"
  }
}

These are examples. Check your actual configuration before modifying any files.

Problem 4: Port 5000 is already in use

Cause: Another process may already be using port 5000.

Solution:

1. Check whether the backend is already running in another terminal.
2. If it is, use that existing server instead of starting another copy.
3. Otherwise, identify the process using port 5000.
4. If necessary, configure the backend to use another port and update the frontend API URL to match.

Problem 5: Port 5173 is already in use

Vite may automatically choose another available port.

Check the terminal output and open the exact URL it displays.

Problem 6: Unable to connect to the server

Possible causes:

- The backend is not running.
- The frontend is using the wrong API URL.
- The backend is running on another port.
- A request is failing because of CORS or another network configuration issue.

Solution:

1. Check the backend terminal.
2. Make sure the backend started successfully.
3. Confirm the backend port.
4. Open "frontend/src/services/api.js".
5. Verify the API base URL.

The expected default is:

http://localhost:5000/api

6. Check for errors in the backend terminal.
7. Refresh the website and try again.

Problem 7: The website opens, but simulations fail

Possible causes:

- Invalid input.
- Unsupported algorithm name.
- Missing required fields.
- Backend calculation errors.

Solution:

For CPU Scheduling:

- Enter valid process IDs.
- Use non-negative arrival times.
- Use positive burst times.
- Enter priority values when required.
- Enter a positive time quantum for Round Robin.

For Virtual Memory:

- Use between 1 and 10 frames.
- Enter a valid page reference string.
- Enter no more than 50 page references.

If the problem continues, inspect the browser console and backend terminal.

Problem 8: Changes are not appearing

Solution:

1. Save the modified files.
2. Check whether the development servers are still running.
3. Refresh the browser.
4. Check the terminal for errors.

If necessary, restart the relevant server.

To stop a server, select its terminal and press:

Ctrl + C

Then run the appropriate start command again.

Problem 9: The website works on one computer but not another

Possible causes:

- Node.js is missing on the second computer.
- Dependencies have not been installed.
- The backend is not running.
- The frontend is configured to use an incorrect API address.

Solution:

Install Node.js, install dependencies in both folders, start both servers, and open the frontend URL.

If the frontend and backend run on separate computers, the API URL must point to the computer running the backend rather than "localhost".

---

❓ Frequently Asked Questions

1. Is this project suitable for beginners?

Yes. The project provides an interactive way to understand CPU scheduling and virtual memory concepts.

The installation instructions are intended to help beginners start the application.

2. Do I need MongoDB?

No. The project does not require MongoDB or another database.

3. Why do I need two terminals?

The first terminal runs the backend server.

The second terminal runs the frontend development server.

Both must be running for the complete application to work locally.

4. Can I open "index.html" directly?

No. The project uses React and Vite, so you should start the frontend development server and open the URL displayed in the terminal.

Opening the HTML file directly does not start the backend or provide the intended application environment.

5. Do I need to install dependencies every time?

No. Normally, you only need to install dependencies during initial setup.

You may need to run "npm install" again if dependencies change or the installation needs to be repaired.

6. Does the project save simulation results permanently?

No. The project is designed as a stateless simulator and does not require a database to store simulation results.

7. Can I use the application without an internet connection?

After downloading the project and installing its dependencies, local execution generally works without an internet connection, provided the application does not depend on external resources.

8. How do I stop the application?

Press "Ctrl + C" in each terminal to stop the corresponding server.

9. How do I run the project again?

Open the project in VS Code.

Start the backend:

cd backend
npm run dev

Start the frontend in a second terminal:

cd frontend
npm run dev

Open the URL printed by Vite.

10. Can I deploy this project online?

Yes. The frontend and backend can be deployed using compatible hosting services.

However, the frontend API configuration must point to the deployed backend URL rather than "localhost".

Both services must be configured correctly for the online application to work.

---

🎯 Learning Outcomes

After using this project, students should be able to:

1. Explain CPU scheduling and its purpose.
2. Differentiate between preemptive and non-preemptive algorithms.
3. Understand FCFS, SJF, SRTF, Priority, and Round Robin.
4. Calculate completion, turnaround, waiting, and response times.
5. Interpret a CPU scheduling Gantt chart.
6. Understand virtual memory, paging, and memory frames.
7. Explain page hits and page faults.
8. Compare FIFO, LRU, and Optimal page replacement.
9. Calculate hit and page fault ratios.
10. Understand communication between frontend and backend.
11. Explain REST APIs and JSON.
12. Understand the role of React, Node.js, and Express.js in a web application.

---

🎓 Academic Information

Field| Details
Project Title| CPU Scheduling Algorithm & Virtual Memory and Page Fault Simulator
Subject| Operating System
Course Code| 315319
Programme| Diploma in Information Technology
Semester| Fifth Semester
Curriculum| MSBTE K Scheme
Frontend| React.js and Tailwind CSS
Backend| Node.js and Express.js
Database| Not Required

---

👨‍💻 Project Purpose

This project is developed for educational purposes to demonstrate Operating System algorithms through interactive simulations.

It helps students connect theoretical concepts with practical results and supports academic assignments, demonstrations, and viva preparation.

---

Happy Learning! 🎓💻