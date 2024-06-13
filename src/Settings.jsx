// src/SettingsPanel.js

// Import React library for creating components
import React from 'react';

// Functional component SettingsPanel with props destructuring
const SettingsPanel = ({ selectedNode, onChange }) => {
  // Return null if no selectedNode is provided
  if (!selectedNode) return null;

  // JSX structure for rendering the SettingsPanel
  return (
    <div className="settings-panel"> {/* Container div for settings panel */}
      <label>Text:</label> {/* Label for input field */}
      <input
        type="text"
        value={selectedNode.data.label} // Value of input field is the label of selectedNode
        onChange={(e) => onChange(e.target.value)} // onChange handler to update node label
      />
      <button onClick={() => alert('Flow Saved')}>Save</button> {/* Button to save flow (dummy action) */}
    </div>
  );
};

export default SettingsPanel; // Export SettingsPanel component as default
