import React from "react";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-linear-to-r from-gray-900 via-gray-500 to-gray-200">
      <AppRoutes/>
      </main>
      <Footer />
    </>
  );
}
