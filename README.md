
# React Flow Builder App

This project is a React application that allows users to create and visualize flow diagrams using React Flow Renderer. It includes components for managing the flow diagram elements, adjusting node settings, and providing a sidebar for node selection.

## Components

### 1. App.js

The `App.js` component serves as the main entry point for the application. It integrates the following functionalities:

- **State Management**: Utilizes React hooks (`useState`) to manage the state of elements in the flow diagram (`elements`), the instance of React Flow (`reactFlowInstance`), and the currently selected node (`selectedNode`).
  
- **Event Handling**: Implements event handlers (`onConnect`, `onLoad`, `onElementClick`) to manage interactions within the React Flow diagram. These include connecting nodes (`onConnect`), handling React Flow instance load (`onLoad`), and updating selected node information (`onElementClick`).

- **Dynamic Node Editing**: Allows users to edit the label of selected nodes through a settings panel (`SettingsPanel`). It updates the node's label in real-time using the `updateNodeText` function.

- **UI Components**: Integrates UI components such as MiniMap, Controls, and Background from React Flow Renderer to enhance the flow diagram interface.

### 2. SettingsPanel.js

The `SettingsPanel.js` component provides a settings panel for editing node properties within the flow diagram:

- **Conditional Rendering**: Only renders when a node is selected (`selectedNode`). If no node is selected, the panel remains hidden.

- **Node Label Editing**: Displays an input field pre-populated with the selected node's current label (`selectedNode.data.label`). Allows users to edit this label and updates it dynamically through the `onChange` prop.

- **Action Button**: Includes a placeholder button (`Save`) that triggers an alert when clicked, simulating a save action for the flow diagram (can be extended with actual save functionality).

### 3. Sidebar.js

The `Sidebar.js` component serves as a sidebar for node selection and drag-and-drop functionality:

- **Drag and Drop Nodes**: Provides draggable elements (`Input Node` and `Text Node`) that users can drag into the main flow diagram area (`ReactFlow`).

- **Event Handling**: Uses `onDragStart` to initiate drag operations for each node type (`input` and `default`). Sets data transfer type (`application/reactflow`) and effect allowed (`move`) for smooth drag-and-drop functionality.

## Setup Instructions

To run the project locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Flow Renderer**: Library for building flow diagrams in React applications.

## Additional Notes

This project is a basic implementation and can be extended with additional features such as:
- Save functionality to persist flow diagrams.
- Custom node types with specific properties and behaviors.
- Styling enhancements and responsive design for better user experience.
