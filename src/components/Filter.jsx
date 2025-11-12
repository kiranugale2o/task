import React, { useState, useMemo } from "react";

const VendorList = () => {
  const vendors = [
    { id: 1, name: "DJ Beats", type: "DJ", city: "Pune", rating: 4.8 },
    { id: 2, name: "City Caterers", type: "Caterer", city: "Mumbai", rating: 4.6 },
    { id: 3, name: "Chef's Delight", type: "Cook", city: "Pune", rating: 4.7 },
    { id: 4, name: "DriveEasy", type: "Driver", city: "Nashik", rating: 4.5 },
    { id: 5, name: "SparkClean Services", type: "Cleaner", city: "Pune", rating: 4.4 },
    { id: 6, name: "Luxury DJ Night", type: "DJ", city: "Mumbai", rating: 4.9 },
    { id: 7, name: "Tasty Treats", type: "Caterer", city: "Pune", rating: 4.3 },
    { id: 8, name: "Pro Clean Team", type: "Cleaner", city: "Mumbai", rating: 4.5 },
    { id: 9, name: "SmartDrive", type: "Driver", city: "Pune", rating: 4.7 },
  ];

  const [selectedType, setSelectedType] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");

  const vendorTypes = ["All", ...new Set(vendors.map((v) => v.type))];
  const vendorCities = ["All", ...new Set(vendors.map((v) => v.city))];

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const typeMatch = selectedType === "All" || vendor.type === selectedType;
      const cityMatch = selectedCity === "All" || vendor.city === selectedCity;
      return typeMatch && cityMatch;
    });
  }, [selectedType, selectedCity, vendors]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Vendor Filter Task</h2>

      {/* Filter Bar */}
      <div style={styles.filterBar}>
        <div style={styles.filterItem}>
          <label style={styles.label}>Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={styles.select}
          >
            {vendorTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.filterItem}>
          <label style={styles.label}>City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            style={styles.select}
          >
            {vendorCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Vendor Cards */}
      <div style={styles.grid}>
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} style={styles.card}>
            <h3 style={styles.vendorName}>{vendor.name}</h3>
            <p style={styles.text}><b>Type:</b> {vendor.type}</p>
            <p style={styles.text}><b>City:</b> {vendor.city}</p>
            <p style={styles.text}><b>Rating:</b> ⭐ {vendor.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0px auto",
    padding: "20px",
    fontFamily: "'Inter', sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
  },
  filterBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#f1f3f4",
    padding: "15px 20px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  filterItem: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "5px",
    color: "#444",
  },
  select: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    cursor: "pointer",
    transition: "0.2s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease-in-out",
    border: "1px solid #eee",
  },
  vendorName: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  text: {
    fontSize: "15px",
    color: "#555",
    margin: "6px 0",
  },
};

export default VendorList;
