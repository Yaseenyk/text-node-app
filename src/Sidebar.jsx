// src/Sidebar.js

// Import React library for creating components
import React from 'react';

// Sidebar functional component definition
const Sidebar = () => {
  // Function to handle drag start event
  const onDragStart = (event, nodeType) => {
    // Set data transfer type and node type for drag event
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move'; // Specify effect allowed for drag operation
  };

  // JSX structure for rendering the Sidebar component
  return (
    <aside>
      <div className="description">Drag and drop to add a node</div> {/* Description text */}
      {/* Input node draggable element */}
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'input')} // Drag start handler for input node
        draggable // Make the input node draggable
      >
        Input Node
      </div>
      {/* Default text node draggable element */}
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'default')} // Drag start handler for default text node
        draggable // Make the default text node draggable
      >
        Text Node
      </div>
    </aside>
  );
};

export default Sidebar; // Export Sidebar component as default
