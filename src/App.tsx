// App.jsx
import React, { useState } from "react";
import "./App.css";
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [projects, setProjects] = useState([
    { id: 1, text: "Project 1", deadline: "2024-12-31" },
    { id: 2, text: "Project 2", deadline: "2025-01-15" },
    { id: 3, text: "Project 3", deadline: "2025-02-20" },
  ]);

  const handleConnectWallet = () => {
    setWalletConnected(true); // Simulate wallet connection
  };

  return (
    <div className="App">
      <header className="header">
        <h1>FundApp</h1>
        <TonConnectButton />
      </header>

      <div className="card-container">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2>{project.text}</h2>
            <p>Deadline: {project.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
