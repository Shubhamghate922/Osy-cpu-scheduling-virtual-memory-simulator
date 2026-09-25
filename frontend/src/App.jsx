import { useState } from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import InfoCard from "./components/InfoCard.jsx";
import Footer from "./components/Footer.jsx";
import CpuScheduling from "./pages/CpuScheduling.jsx";
import VirtualMemory from "./pages/VirtualMemory.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("cpu");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="max-w-5xl w-full mx-auto px-4 flex-1">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6 mb-6">
          <InfoCard
            text="This simulator demonstrates CPU scheduling, virtual memory, page faults and page replacement algorithms. Enter the required values, select an algorithm and run the simulation to view the step-by-step results."
          />
        </div>

        <div className="pb-10">
          {activeTab === "cpu" ? <CpuScheduling /> : <VirtualMemory />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
