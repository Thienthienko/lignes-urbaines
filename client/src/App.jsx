import { Outlet } from "react-router-dom";
import "./App.css";
import UserProvider from "./components/contexts/UserContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <UserProvider>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
