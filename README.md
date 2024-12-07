![Alt text](banner.png)

# Web Worker Demo with Node.js

This project demonstrates how to create a simple web application using a web worker. The application includes a basic server created with Node.js to serve static files, and a web page with buttons to start an expensive operation and change the background color.

## Project Structure

```
/project-directory
│
├── index.html
├── main.js
├── script.js
└── worker.js
```

### Files Description

- **index.html**: The main HTML file that includes the buttons for user interaction.
- **main.js**: A Node.js script that sets up a simple HTTP server to serve static files.
- **script.js**: Contains JavaScript to handle DOM interactions and initialize the web worker.
- **worker.js**: Contains the web worker script that performs an "expensive" operation.

## Setting Up the Project

### Prerequisites

- Node.js and npm should be installed on your machine.
- Chocolatey can be used to install Node.js on Windows if not already installed.

### Installation

1. **Clone the Repository** (if applicable) or create the files manually in a directory.

2. **Navigate to the Project Directory**:
   ```bash
   cd /path/to/project-directory
   ```

3. **Run the Server**:
   Execute the following command to start the Node.js server:
   ```bash
   node main.js
   ```

4. **Access the Application**:
   Open a web browser and go to `http://localhost:8080`.

## File Contents

### index.html

A simple HTML page with two buttons:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Worker Demo</title>
    <script src="script.js" defer></script>
</head>
<body>
    <button id="startOperation">Start Expensive Operation</button>
    <button id="changeColor">Change Background Color</button>
</body>
</html>
```

## Usage

- **Start Expensive Operation**: Click the button to initiate a time-consuming task handled by the web worker.
- **Change Background Color**: Click the button to change the background color to a random color.

---

This documentation provides a comprehensive guide to setting up and running the Node.js web worker demo.