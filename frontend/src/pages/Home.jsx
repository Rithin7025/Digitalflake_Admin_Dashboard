import React from "react";
import AdminMajorComponent from "../pages/AdminMajorComponent";
import Header from '../components/Header/Header'

function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <AdminMajorComponent />
    </div>
  );
}

export default Home;
