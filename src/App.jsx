/* eslint-disable react/prop-types */
import "./App.css";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Navbar from "./components/NavBar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <DarkModeSwitch /> {/* Render the DarkModeSwitch component */}
      <Shop />
    </>
  );
}

export default App;
