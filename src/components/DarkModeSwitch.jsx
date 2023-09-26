import { useEffect, useState } from "react";
import "./darkmode.css";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

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
