import React, { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an item"
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: "20px", listStyleType: "none", paddingLeft: "0" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;