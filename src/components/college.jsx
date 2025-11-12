import React from "react";

const CollegeEventInfo = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, #f0f4ff, #e0ecff, #ffffff, #e8f0ff)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1a237e" }}>
        🎓 College Event Management Website
      </h1>
      <h3 style={{ textAlign: "center", color: "#3949ab", marginTop: "0.5rem" }}>
        Organize, Manage, and Participate in College Events Easily
      </h3>

      <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: "1.8" }}>
        <strong>Overview:</strong> <br />
        The <strong>College Event Management Website</strong> is a user-friendly
        application built using <strong>Next.js</strong> that simplifies event
        creation, organization, and participation. It’s designed for students
        and event organizers to manage college events efficiently with
        authentication, RSVP, and responsive UI.
      </p>

      <h2 style={{ color: "#283593", marginTop: "1.5rem" }}>✨ Features</h2>
      <ul style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <li><strong>Event Management:</strong> Create, edit, and delete events with details like date, time, and venue.</li>
        <li><strong>User Authentication:</strong> Secure login for students and organizers.</li>
        <li> <strong>Event Details:</strong> Include descriptions, schedules, and location info.</li>
        <li> <strong>RSVP Functionality:</strong> Students can sign up or register for events.</li>
        <li> <strong>Responsive Design:</strong> Smooth user experience across devices.</li>
        <li> <strong>Email Notifications:</strong> Sends updates and confirmations to participants.</li>
      </ul>

      <h2 style={{ color: "#283593", marginTop: "1.5rem" }}>Demo Credentials</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          backgroundColor: "#f5f7ff",
          borderRadius: "10px",
          padding: "1rem",
          border: "1px solid #c5cae9",
        }}
      >
        <div>
          <h4>🎤 Organizer Login</h4>
          <p>Email: <strong>kiranugale129@gmail.com</strong></p>
          <p>Password: <strong>Kiran@2226012</strong></p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a
          href="https://event-wine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.8rem 2rem",
            backgroundColor: "#3949ab",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#303f9f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3949ab")}
        >
           Try the Live Demo
        </a>
      </div>
    </div>
  );
};

export default CollegeEventInfo;
