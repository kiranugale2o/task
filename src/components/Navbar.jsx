import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to toggle mobile menu
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/chatbot" style={styles.link} onClick={() => setIsOpen(false)}>AI Chat</Link>
      <Link to="/jobportal" style={styles.link} onClick={() => setIsOpen(false)}>Job Portal</Link>
      <Link to="/collegeevent" style={styles.link} onClick={() => setIsOpen(false)}>College Events Portal</Link>
    </>
  );

  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <h1 style={styles.title}>Assignment Task</h1>
      </div>

      {/* Desktop view */}
      {!isMobile && <nav style={styles.nav}>{navLinks}</nav>}

      {/* Mobile view */}
      {isMobile && (
        <div style={styles.mobileMenuContainer}>
          <div style={styles.hamburger} onClick={toggleMenu}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          {isOpen && <div style={styles.dropdown}>{navLinks}</div>}
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(90deg, #1e725cff, #2a9886ff)",
    color: "white",
    padding: "0.8rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    padding: "0.5rem 0",
    transition: "color 0.3s ease",
  },
  mobileMenuContainer: {
    position: "relative",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    right: 0,
    backgroundColor: "#1e725cff",
    padding: "10px 20px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};

export default Navbar;
