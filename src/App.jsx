// src/App.js

// Import necessary dependencies from React and React Flow
import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background } from 'react-flow-renderer';

// Import local components
import Sidebar from './Sidebar';
import SettingsPanel from './Settings';

// Import CSS file for styling
import './App.css';

// Initial elements for the React Flow diagram
const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Welcome to Chatbot Flow Builder' },
    position: { x: 250, y: 5 },
  },
];

// App component definition
const App = () => {
  // State variables using React hooks
  const [elements, setElements] = useState(initialElements); // State for storing elements of the flow diagram
  const [reactFlowInstance, setReactFlowInstance] = useState(null); // State for storing the React Flow instance
  const [selectedNode, setSelectedNode] = useState(null); // State for storing the currently selected node

  // Function to handle connection between nodes (edges)
  const onConnect = (params) => {
    console.log('onConnect', params);
    // Handle adding edge logic here if needed
  };

  // Function called when React Flow instance is loaded
  const onLoad = (reactFlowInstance) => {
    console.log('onLoad', reactFlowInstance);
    setReactFlowInstance(reactFlowInstance); // Store the React Flow instance in state
  };

  // Function to handle click on an element/node in the diagram
  const onElementClick = (event, element) => {
    setSelectedNode(element); // Set the selected node in state
  };

  // Function to update the text of a selected node
  const updateNodeText = (text) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === selectedNode.id) {
          el.data = {
            ...el.data,
            label: text,
          };
        }
        return el;
      })
    );
  };

  // JSX structure for rendering the component
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
            elements={elements} // Pass the elements state to React Flow
            onConnect={onConnect} // Pass onConnect function to handle connections
            onLoad={onLoad} // Pass onLoad function to handle React Flow instance load
            onElementClick={onElementClick} // Pass onElementClick function to handle element clicks
            snapToGrid={true} // Enable snapping to grid
            snapGrid={[15, 15]} // Define the snap grid size
          >
            <MiniMap /> {/* Render MiniMap component */}
            <Controls /> {/* Render Controls component */}
            <Background /> {/* Render Background component */}
          </ReactFlow>
        </div>
        {/* Conditional rendering based on whether a node is selected */}
        {selectedNode ? (
          <SettingsPanel selectedNode={selectedNode} onChange={updateNodeText} /> // Render SettingsPanel with selected node information
        ) : (
          <Sidebar /> // Render Sidebar component if no node is selected
        )}
      </ReactFlowProvider>
    </div>
  );
};

export default App; // Export the App component as default
