"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import KpiCardsGrid from "../components/KpiCardsGrid";
import DateRangePicker from "../components/DateRangePicker";
import FileUpload from "../components/FileUpload";
import DashboardChart from "../components/DashboardChart";
import DashboardTable from "../components/DashboardTable";
import GlitchButton from "../components/GlitchButton";
// import CopyInput from "../components/CopyInput";
import RightSidebar from "../components/RightSidebar";

const kpiCards = [
  { title: "Total Users", content: "1,234" },
  { title: "Active Sessions", content: "567" },
  { title: "New Signups", content: "89" },
  { title: "Revenue", content: "$12,345" },
];

const tableHeaders = ["Date", "User", "Action"];
const tableRows = [
  { Date: "2023-10-01", User: "User1", Action: "Logged In" },
  { Date: "2023-10-02", User: "User2", Action: "Signed Up" },
  { Date: "2023-10-03", User: "User3", Action: "Logged Out" },
  { Date: "2023-10-04", User: "User4", Action: "Purchased" },
];

export default function Home() {
  const [dateRange, setDateRange] = useState([
    new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    new Date(),
  ]);
  const [files, setFiles] = useState<any[]>([]);

  // Search input ref
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcuts for search
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
      if (event.key === "/" && document.activeElement !== searchInputRef.current) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Dynamic year
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-1 w-full h-full min-h-screen bg-[#18181b]">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-8 p-4 md:p-8 max-w-full">
          <DashboardHeader />
          {/* SearchBar component here if needed */}
          <KpiCardsGrid cards={kpiCards} />
          <section className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-[#232336] rounded-xl p-6 neon-glow flex flex-col gap-4">
              <h2 className="text-lg font-bold text-[#a21caf] mb-2">Select Date Range</h2>
              <DateRangePicker value={dateRange} onChange={setDateRange} />
            </div>
            <div className="flex-1 bg-[#232336] rounded-xl p-6 neon-glow flex flex-col gap-4">
              <h2 className="text-lg font-bold text-[#a21caf] mb-2">Upload Files</h2>
              <FileUpload files={files} setFiles={setFiles} />
            </div>
          </section>
          <section className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1 min-w-0">
              <DashboardChart />
            </div>
            <div className="flex-1 min-w-0 bg-[#232336] rounded-xl p-6 neon-glow flex flex-col gap-4">
              <h2 className="text-xl font-bold text-[#a21caf] mb-2">Recent Activity</h2>
              <DashboardTable headers={tableHeaders} rows={tableRows} />
            </div>
          </section>
          {/* <CopyInput /> */}
          <section className="flex gap-4 justify-end">
            <GlitchButton>Export Data</GlitchButton>
            <GlitchButton>Refresh</GlitchButton>
          </section>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}