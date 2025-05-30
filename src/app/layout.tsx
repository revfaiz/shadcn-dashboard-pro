import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export const metadata = {
  title: 'Digital Phonk Dashboard',
  description: 'A futuristic, immersive dashboard built with Next.js, ShadCN, and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#18181b]">
      <body className="min-h-screen flex flex-col bg-[#18181b] text-white">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto p-4 md:p-8 flex flex-col gap-8 bg-gradient-to-br from-[#18181b] via-[#232336] to-[#1a003a]">
            {children}
          </main>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
