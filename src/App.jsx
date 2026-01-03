import React from "react";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-[80px]">
      <AppRoutes/>
      </main>
      <Footer />
    </>
  );
}
