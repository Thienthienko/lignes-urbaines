import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserProvider from "./components/contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <main>
        <Outlet />
      </main>
      <ToastContainer
        toastClassName="toastBody"
        className="toastStyle"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </UserProvider>
  );
}

export default App;
