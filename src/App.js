import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Button({ label, color = "blue", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        color: "white",
        cursor: "pointer",
        marginTop: "10px"
      }}
    >
      {label}
    </button>
  );
}

function Input({ placeholder, value, onChange, borderColor = "gray" }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        border: `2px solid ${borderColor}`,
        padding: "10px",
        borderRadius: "10px",
        width: "100%",
      }}
    />
  );
}

function Card({ title, bg = "white", children }) {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "20px"
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <div style={{ 
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Card title="Home Page" bg="rgba(255,255,255,0.9)">
        <p>This is the home page card.</p>
        <Button
          label="Click Me"
          color="green"
          onClick={() => alert("Home Button Clicked!")}
        />
      </Card>
      <Link to="/form" style={{ color: "white", fontSize: "18px", textDecoration: "none", marginTop: "20px" }}>Go to Form Page</Link>
    </div>
  );
}

function FormPage() {
  return (
    <div style={{ 
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Card title="Form Page" bg="rgba(255,255,255,0.9)">
        <Input placeholder="Enter text..." borderColor="blue" />
        <Button
          label="Submit"
          color="purple"
          onClick={() => alert("Form Submitted!")}
        />
      </Card>
      <Link to="/" style={{ color: "white", fontSize: "18px", textDecoration: "none", marginTop: "20px" }}>Back to Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}