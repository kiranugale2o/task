import React from "react";

const JobPortalInfo = () => {
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
         Job Portal Application
      </h1>
      <h3 style={{ textAlign: "center", color: "#3949ab", marginTop: "0.5rem" }}>
        With AI Integration, Authentication & Email Verification
      </h3>

      <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: "1.8" }}>
        <strong>Overview:</strong> <br />
        This project is a powerful and interactive Job Portal built using{" "}
        <strong>Next.js</strong>. It allows job seekers and recruiters to
        connect efficiently through a secure and modern platform.
      </p>

      <h2 style={{ color: "#283593", marginTop: "1.5rem" }}>✨ Features</h2>
      <ul style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <li>
           <strong>AI Chatbot:</strong> Assists users with job search and
          applications.
        </li>
        <li>
           <strong>User Authentication:</strong> Secure login/signup using JWT
          and session management.
        </li>
        <li>
           <strong>Email Verification:</strong> OTP-based email verification
          ensures real users.
        </li>
        <li>
           <strong>Job Posting & Application:</strong> Recruiters can post jobs
          and candidates can apply directly.
        </li>
        <li>
           <strong>Role-based Access:</strong> Separate dashboards for
          recruiters and candidates.
        </li>
        <li>
           <strong>Responsive UI:</strong> Fully optimized for desktop and
          mobile.
        </li>
      </ul>

      <h2 style={{ color: "#283593", marginTop: "1.5rem" }}>
        Demo Credentials
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          backgroundColor: "#f5f7ff",
          borderRadius: "10px",
          padding: "1rem",
          border: "1px solid #c5cae9",
        }}
      >
        <div>
          <h4>Candidate Login</h4>
          <p>Email: <strong>kiranugale129@gmail.com</strong></p>
          <p>Password: <strong>12345</strong></p>
        </div>
        <div>
          <h4> Recruiter Login</h4>
          <p>Email: <strong>hackjacktech2o@gmail.com</strong></p>
          <p>Password: <strong>12345</strong></p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a
          href="https://jobportal-beta-indol.vercel.app/sign-in"
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

export default JobPortalInfo;
