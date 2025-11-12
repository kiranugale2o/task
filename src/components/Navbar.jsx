import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Task</h1>
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
  <Link to="/chatbot" style={styles.link}>AI Chat</Link>
  <Link to="/jobportal" style={styles.link}>Job Portal</Link>
  <Link to="/collegeevent" style={styles.link}>College Events Portal</Link>
      </nav>

    
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
    color: "white",
    padding: "0.8rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#ffca28",
  },
 
};

export default Navbar;
