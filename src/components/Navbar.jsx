import DarkModeSwitch from "./DarkModeSwitch";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftSide">
        <h1>MyShop</h1>
        <DarkModeSwitch />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/ReactShop/">Home</a>
        </li>
        <li>
          <a href="https://github.com/FelipeH99/ReactShop">Github Repo</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felipe-heredia-sanchez/">
            myLinkedin
          </a>
        </li>

        <li>
          <a href="https://wa.me/+59894314684">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
