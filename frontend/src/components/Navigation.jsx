function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "cpu", label: "CPU Scheduling" },
    { key: "memory", label: "Virtual Memory" }
  ];

  return (
    <nav className="flex justify-center gap-3 mt-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={
              "px-5 py-2 rounded-lg font-semibold border transition-colors " +
              (isActive
                ? "bg-purple-700 text-white border-purple-700"
                : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50")
            }
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

export default Navigation;
