document.addEventListener('DOMContentLoaded', () => { // updated
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage'); // updated
// minor change added // updated
    sendBtn.addEventListener('click', async () => { // updated // updated // updated // updated
        const dataToSend = dataInput.value; // updated // updated // updated // updated // updated
        if (dataToSend.trim() === '') { // updated
            alert('Please enter some data!'); // updated // updated // updated
            return; // updated
        } // updated // updated

        try {
            const response = await fetch('/api/data', { // updated
                method: 'POST', // updated
                headers: { // updated
                    'Content-Type': 'application/json', // updated
                }, // updated
                body: JSON.stringify({ message: dataToSend }), // updated // updated // updated
            }); // updated
            
            const result = await response.json(); // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`; // updated // updated // updated // updated
        } catch (error) {
            serverMessage.textContent = 'Error: Could not connect to the server.';
            console.error('Error:', error); // updated // updated
        }
    }); // updated // updated
}); // updated // updated // updated
document.addEventListener('DOMContentLoaded', () => { // updated
    const dataInput = document.getElementById('dataInput'); // updated
    const sendBtn = document.getElementById('sendBtn'); // updated // updated
    const serverMessage = document.getElementById('serverMessage'); // updated
// minor change added // updated
    sendBtn.addEventListener('click', async () => { // updated // updated
        const dataToSend = dataInput.value; // updated // updated // updated
        if (dataToSend.trim() === '') { // updated
            alert('Please enter some data!'); // updated
            return; // updated // updated
        }
// minor change added
        try { // updated
            const response = await fetch('/api/data', {
                method: 'POST', // updated // updated // updated
                headers: { // updated // updated
                    'Content-Type': 'application/json', // updated // updated
                },
                body: JSON.stringify({ message: dataToSend }),
            }); // updated
            
            const result = await response.json(); // updated // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`;
        } catch (error) { // updated // updated // updated
            serverMessage.textContent = 'Error: Could not connect to the server.'; // updated
            console.error('Error:', error); // updated
        } // updated // updated
    });
}); // updated // updated
document.addEventListener('DOMContentLoaded', () => { // updated
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage');
// minor change added
    sendBtn.addEventListener('click', async () => { // updated // updated // updated
        const dataToSend = dataInput.value; // updated // updated // updated // updated
        if (dataToSend.trim() === '') { // updated // updated // updated
            alert('Please enter some data!'); // updated
            return; // updated // updated
        } // updated
// minor change added
        try { // updated
            const response = await fetch('/api/data', { // updated // updated
                method: 'POST',
                headers: { // updated
                    'Content-Type': 'application/json', // updated
                },
                body: JSON.stringify({ message: dataToSend }), // updated // updated
            }); // updated
// minor change added // updated
            const result = await response.json(); // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`; // updated // updated // updated
        } catch (error) { // updated
            serverMessage.textContent = 'Error: Could not connect to the server.';
            console.error('Error:', error); // updated
        } // updated
    }); // updated // updated // updated // updated
}); // updated // updated
document.addEventListener('DOMContentLoaded', () => { // updated
    const dataInput = document.getElementById('dataInput'); // updated // updated
    const sendBtn = document.getElementById('sendBtn'); // updated // updated
    const serverMessage = document.getElementById('serverMessage'); // updated
// minor change added
    sendBtn.addEventListener('click', async () => { // updated
        const dataToSend = dataInput.value; // updated // updated // updated // updated // updated // updated
        if (dataToSend.trim() === '') {
            alert('Please enter some data!'); // updated
            return; // updated
        } // updated
// minor change added // updated
        try {
            const response = await fetch('/api/data', { // updated // updated
                method: 'POST',
                headers: { // updated // updated
                    'Content-Type': 'application/json', // updated
                }, // updated // updated
                body: JSON.stringify({ message: dataToSend }),
            });
// minor change added // updated
            const result = await response.json(); // updated // updated // updated // updated // updated
            serverMessage.textContent = `Server said: "${result.serverResponse}"`; // updated
        } catch (error) { // updated // updated
            serverMessage.textContent = 'Error: Could not connect to the server.'; // updated // updated
            console.error('Error:', error); // updated // updated // updated
        } // updated // updated
    });
}); // updated // updated