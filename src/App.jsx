import { Dashboard } from "./layout/Dashboard/Dashboard.jsx";
import { Navbar } from "./layout/Navbar/Navbar.jsx";
import "./Globalcss.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />                     
    </div>
  );
}

export default App;
