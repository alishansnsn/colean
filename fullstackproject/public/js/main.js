document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage');
// minor change added // updated
    sendBtn.addEventListener('click', async () => { // updated // updated
        const dataToSend = dataInput.value; // updated // updated // updated // updated
        if (dataToSend.trim() === '') {
            alert('Please enter some data!');
            return; // updated
        }

        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { // updated
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: dataToSend }), // updated
            });
            
            const result = await response.json(); // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`; // updated // updated
        } catch (error) {
            serverMessage.textContent = 'Error: Could not connect to the server.';
            console.error('Error:', error); // updated
        }
    }); // updated
});
document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn'); // updated // updated
    const serverMessage = document.getElementById('serverMessage');

    sendBtn.addEventListener('click', async () => {
        const dataToSend = dataInput.value; // updated // updated
        if (dataToSend.trim() === '') { // updated
            alert('Please enter some data!'); // updated
            return; // updated
        }
// minor change added
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { // updated
                    'Content-Type': 'application/json', // updated
                },
                body: JSON.stringify({ message: dataToSend }),
            });
            
            const result = await response.json(); // updated // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`;
        } catch (error) { // updated
            serverMessage.textContent = 'Error: Could not connect to the server.'; // updated
            console.error('Error:', error); // updated
        } // updated
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage');
// minor change added
    sendBtn.addEventListener('click', async () => { // updated // updated
        const dataToSend = dataInput.value; // updated // updated // updated
        if (dataToSend.trim() === '') {
            alert('Please enter some data!');
            return; // updated // updated
        }
// minor change added
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { // updated
                    'Content-Type': 'application/json', // updated
                },
                body: JSON.stringify({ message: dataToSend }), // updated
            });
// minor change added
            const result = await response.json(); // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`; // updated
        } catch (error) {
            serverMessage.textContent = 'Error: Could not connect to the server.';
            console.error('Error:', error); // updated
        }
    }); // updated // updated
}); // updated
document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput'); // updated
    const sendBtn = document.getElementById('sendBtn'); // updated // updated
    const serverMessage = document.getElementById('serverMessage');

    sendBtn.addEventListener('click', async () => { // updated
        const dataToSend = dataInput.value; // updated // updated
        if (dataToSend.trim() === '') {
            alert('Please enter some data!');
            return; // updated
        }
// minor change added // updated
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { // updated
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: dataToSend }),
            });
            
            const result = await response.json(); // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`;
        } catch (error) {
            serverMessage.textContent = 'Error: Could not connect to the server.'; // updated
            console.error('Error:', error); // updated // updated
        } // updated
    });
});