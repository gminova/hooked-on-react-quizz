import React, { useState, useEffect } from "react";
import "./App.css";
//components
import WelcomePage from "./components/WelcomePage";
import Quiz from "./components/Quiz";

function App() {
  const [page, setPage] = useState("WelcomePage");
    return (
      <>
        {page === "WelcomePage" && (<WelcomePage/>)}
      </>
    );
}

export default App;
