// Check if the browser supports web workers
if (window.Worker) {
    const worker = new Worker('worker.js');

    // Add event listener to the "Start Expensive Operation" button
    document.getElementById('startOperation').addEventListener('click', () => {
        worker.postMessage('start');
    });

    // Handle messages from the worker
    worker.onmessage = function(event) {
        alert(event.data);
    };
}

// Function to change the background color to a random color
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Attach event listener to the "Change Background Color" button
document.getElementById('changeColor').addEventListener('click', changeBackgroundColor);