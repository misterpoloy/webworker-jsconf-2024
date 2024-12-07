// Worker script to handle the expensive operation
function expensiveOperation() {
    // Simulate an expensive operation
    setTimeout(() => {
        postMessage('Expensive operation completed!');
    }, 5000); // Simulate a 5-second operation
}

onmessage = function(event) {
    if (event.data === 'start') {
        expensiveOperation();
    }
};