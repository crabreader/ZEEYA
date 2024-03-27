import React from "react";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <div className="page">
        <Navbar />
        {/* <Login /> */}
        <Layout />
      </div>
    </>
  );
}

export default App;