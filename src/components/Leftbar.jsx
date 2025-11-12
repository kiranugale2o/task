// src/components/Sidebar.js
import React from "react";

const Leftbar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul>
        <li>🏠 Home</li>
        <li>📄 About</li>
        <li>📞 Contact</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    background: "#f4f4f4",
    padding: "1rem",
    height: "100vh",
  },
};

export default Leftbar;
