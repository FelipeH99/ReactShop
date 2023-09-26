import { useEffect, useState } from "react";
import "./darkmode.css";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the initial dark mode state from local storage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

  // Update dark mode state and local storage when the switch is toggled
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    document.body.classList.toggle("dark", newDarkModeState);
  };

  return (
    <label className="dark-mode-switch">
      <p className="switchText">Dark Mode</p>
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
    </label>
  );
};

export default DarkModeSwitch;
