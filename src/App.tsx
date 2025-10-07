// ==========================================
// 🎯 WEEK 1: App.tsx - Main Application Setup
// ==========================================
// This is the root component of your React application!
// Think of this as the foundation of your house - everything starts here.

// 📦 Import statements - bringing in the tools we need
import { Toaster } from "@/components/ui/toaster";           // For showing notifications
import { Toaster as Sonner } from "@/components/ui/sonner";  // Alternative notification system  
import { TooltipProvider } from "@/components/ui/tooltip";   // For helpful hover tips
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  // For data management
import { BrowserRouter, Routes, Route } from "react-router-dom";  // For navigation between pages
import Index from "./pages/Index";      // 🏠 Homepage component
import NotFound from "./pages/NotFound"; // 🚫 404 error page
import DemoCounter from "./pages/DemoCounter"; // 🎓 Instructor demo page
import LiveSession from "./pages/LiveSession"; // 🎮 Live session playground
import Week3Live from "./pages/Week3Live"; // 🎯 Week 3 interactive components playground
import Week4LiveDemo from "./components/Demos/Week4LiveDemo"; 

// Create a client for managing data queries (don't worry about this yet!)
const queryClient = new QueryClient();

// 🚀 Main App Component - This wraps your entire application
function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* These Toaster components handle popup notifications */}
      <Toaster />
      <Sonner />
      
      {/* 🧭 Router setup - manages which page to show */}
      <BrowserRouter>
        <Routes>
          {/* 🏠 Main route - shows your homepage */}
          <Route path="/" element={<Index />} />
          
          {/* 🎓 Instructor demo route - for live useState demonstrations */}
          <Route path="/demo-counter" element={<DemoCounter />} />
          
          {/* 🎮 Live session playground - interactive React examples */}
          <Route path="/live-session" element={<LiveSession />} />
          
          {/* 🎯 Week 3 live playground - interactive components & user input */}
          <Route path="/week3-live" element={<Week3Live />} />
          
          {/* �🔧 WEEK 4+ */}
          <Route path="/week4-live" element={<Week4LiveDemo />} />

          {/* ⚠️ Catch-all route - shows 404 for unknown URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
}

export default App;
