import React from "react";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";

const Layout = ({ children }) => {
  return (
    <div style={styles.wrapper}>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <div style={styles.container}>
      
        {/* Main Page Content */}
        <main style={styles.main}>{children}</main>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
  },
  container: {
    flex: 1,
    display: "flex",
    minHeight: "calc(100vh - 60px)", // adjusts below Navbar
  },
  sidebar: {
    width: "250px",
    borderRight: "1px solid #ddd",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  main: {
    flex: 1,
   
    overflowY: "auto",
  },
};

export default Layout;
