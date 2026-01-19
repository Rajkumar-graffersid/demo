import { motion } from "framer-motion";
import "./Navbar.css";

const menuItems = [
  "Payments",
  "Banking+",
  "Payroll",
  "Partners",
  "Resources",
  "Pricing",
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-left">
        <img src="/logo.svg" alt="Logo" className="logo" />

        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item} className="menu-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">
          Sign Up <span>→</span>
        </button>
      </div>
    </motion.nav>
  );
}
