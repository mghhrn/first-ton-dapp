// App.jsx
import "./App.css";
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  const projects = [
    { id: 1, text: "Campaign 1", deadline: "2024-12-31", target: "122000 $" },
    { id: 2, text: "Campaign 2", deadline: "2025-01-15", target: "25000 $" },
    { id: 3, text: "Campaign 3", deadline: "2025-02-20", target: "53000 $" },
    { id: 3, text: "Campaign 4", deadline: "2025-02-22", target: "70000 $" },
    { id: 3, text: "Campaign 5", deadline: "2025-02-25", target: "6400 $" },
    { id: 3, text: "Campaign 6", deadline: "2025-02-29", target: "120000 $" },
  ];

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
            <p>Target Fund: {project.target}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
