import React, { useState } from "react";

const LpgDetailsChecker = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!mobileNumber || mobileNumber.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://api.invincibleocean.com/invincible/mobileLpgDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            clientId: "df44107e75b24957d5b2dce961ab8012:c0221be0e77e5ba7b0c4c9d6acfc5680", // Replace with your actual clientId
            secretKey: "YkhWwmbgG0PYfhQyDSG4MurMoQqmsSi4hPwAUlC4XOyYqwDlHA3e0elp2dXM0o7AJ", // Replace with your actual secretKey
          },
          body: JSON.stringify({
            mobileNumber: mobileNumber,
          }),
        }
      );

      const data = await response.json();
      if (data.code === 200 && data.result?.length) {
        setResult(data.result[0]);
      } else {
        setError("No LPG details found for this number");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔍 Mobile → LPG Details Checker</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Fetching..." : "Check Details"}
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div style={styles.card}>
          <h3>{result.provider}</h3>
          <p><b>Name:</b> {result.name}</p>
          <p><b>Address:</b> {result.address}</p>
          <p><b>Consumer ID:</b> {result.id}</p>
          <p><b>Distributor:</b> {result.distributor_name}</p>
          <p><b>Distributor Code:</b> {result.distributor_code}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: "20px",
    borderRadius: 12,
    background: "#f5f7fa",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  heading: {
    marginBottom: 20,
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: "10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  card: {
    marginTop: 20,
    background: "white",
    padding: "15px",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
};

export default LpgDetailsChecker;
