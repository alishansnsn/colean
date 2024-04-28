
// minor change added // updated

const htmlCode = document.getElementById('html-code'); // updated
const cssCode = document.getElementById('css-code'); // updated
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('reset-button');
const notificationModal = document.getElementById('notification-modal'); // updated
const modalMessage = document.getElementById('modal-message');
const modalCloseButton = document.getElementById('modal-close-button');


const defaultHtml = `<h1>Hello, Sandbox!</h1>\n<p>Start coding here.</p>`; // updated
const defaultCss = `body {\n  font-family: sans-serif;\n  color: #333;\n}`;
const defaultJs = `console.log("Welcome to the Code Sandbox!");`;

function runCode() { // updated
    const html = htmlCode.value; // updated
    const css = cssCode.value;
    const js = jsCode.value; // updated

    const fullCode = `
        <!DOCTYPE html> // updated
        <html>
        <head> // updated
            <style>${css}</style>
        </head>
        <body> // updated // updated
            ${html} // updated // updated
            <script>${js}<\/script>
        </body>
        </html>
    `;
// minor change added
    output.srcdoc = fullCode; // updated
}

// minor change added // updated // updated
function saveCode() {
    try {
        localStorage.setItem('sandboxHtml', htmlCode.value);
        localStorage.setItem('sandboxCss', cssCode.value);
        localStorage.setItem('sandboxJs', jsCode.value);
        showNotification('Code saved successfully!'); // updated
    } catch (e) {
        showNotification('Error saving code. Please check browser settings.', true);
        console.error("Could not save to localStorage", e); // updated // updated
    }
}
// minor change added

function loadCode() {
    const savedHtml = localStorage.getItem('sandboxHtml'); // updated
    const savedCss = localStorage.getItem('sandboxCss'); // updated
    const savedJs = localStorage.getItem('sandboxJs');

    // If there's saved code, use it. Otherwise, use the defaults.
    htmlCode.value = savedHtml || defaultHtml;
    cssCode.value = savedCss || defaultCss; // updated
    jsCode.value = savedJs || defaultJs; // updated // updated

    runCode(); // Run the code after loading // updated
}

// Function to reset all the code to its default state // updated
function resetCode() { // updated // updated
    const isConfirmed = window.confirm("Are you sure you want to reset all code? This action cannot be undone."); // updated // updated
    if (isConfirmed) {
        htmlCode.value = defaultHtml;
        cssCode.value = defaultCss; // updated
        jsCode.value = defaultJs; // updated
        localStorage.removeItem('sandboxHtml'); // updated
        localStorage.removeItem('sandboxCss'); // updated
        localStorage.removeItem('sandboxJs'); // updated
        runCode();
        showNotification('Code has been reset to defaults.');
    }
}

// Function to display a custom notification modal // updated
function showNotification(message, isError = false) { // updated // updated
    modalMessage.textContent = message;
    notificationModal.classList.remove('hidden'); // updated
// minor change added
    // Auto-hide after 3 seconds unless it's an error // updated
    if (!isError) {
        setTimeout(() => { // updated // updated
            notificationModal.classList.add('hidden');
        }, 3000);
    }
} // updated

// --- Event Listeners ---
// Listen for input on all editors to run the code in real-time // updated
htmlCode.addEventListener('input', runCode); // updated // updated // updated
cssCode.addEventListener('input', runCode);
jsCode.addEventListener('input', runCode); // updated

// Listen for clicks on the save and reset buttons
saveButton.addEventListener('click', saveCode);
resetButton.addEventListener('click', resetCode);
modalCloseButton.addEventListener('click', () => {
    notificationModal.classList.add('hidden');
});

// --- Initialization --- // updated
// Load the code from local storage on page load
window.onload = loadCode;
// minor change added



const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output'); // updated
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('reset-button'); // updated
const notificationModal = document.getElementById('notification-modal');
const modalMessage = document.getElementById('modal-message'); // updated
const modalCloseButton = document.getElementById('modal-close-button');
// minor change added

const defaultHtml = `<h1>Hello, Sandbox!</h1>\n<p>Start coding here.</p>`;
const defaultCss = `body {\n  font-family: sans-serif;\n  color: #333;\n}`; // updated
const defaultJs = `console.log("Welcome to the Code Sandbox!");`;

function runCode() {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const fullCode = ` // updated
        <!DOCTYPE html> // updated // updated
        <html>
        <head>
            <style>${css}</style>
        </head> // updated
        <body>
            ${html} // updated
            <script>${js}<\/script>
        </body> // updated
        </html>
    `; // updated
    
    output.srcdoc = fullCode;
}


function saveCode() { // updated // updated
    try {
        localStorage.setItem('sandboxHtml', htmlCode.value);
        localStorage.setItem('sandboxCss', cssCode.value);
        localStorage.setItem('sandboxJs', jsCode.value);
        showNotification('Code saved successfully!');
    } catch (e) {
        showNotification('Error saving code. Please check browser settings.', true);
        console.error("Could not save to localStorage", e);
    }
}

// minor change added
function loadCode() { // updated
    const savedHtml = localStorage.getItem('sandboxHtml'); // updated // updated
    const savedCss = localStorage.getItem('sandboxCss');
    const savedJs = localStorage.getItem('sandboxJs'); // updated
// minor change added
    // If there's saved code, use it. Otherwise, use the defaults. // updated
    htmlCode.value = savedHtml || defaultHtml;
    cssCode.value = savedCss || defaultCss;
    jsCode.value = savedJs || defaultJs;
// minor change added
    runCode(); // Run the code after loading
}

// Function to reset all the code to its default state
function resetCode() {
    const isConfirmed = window.confirm("Are you sure you want to reset all code? This action cannot be undone."); // updated // updated
    if (isConfirmed) {
        htmlCode.value = defaultHtml;
        cssCode.value = defaultCss; // updated
        jsCode.value = defaultJs; // updated
        localStorage.removeItem('sandboxHtml');
        localStorage.removeItem('sandboxCss');
        localStorage.removeItem('sandboxJs');
        runCode();
        showNotification('Code has been reset to defaults.');
    }
}

// Function to display a custom notification modal
function showNotification(message, isError = false) { // updated
    modalMessage.textContent = message; // updated // updated
    notificationModal.classList.remove('hidden'); // updated
    
    // Auto-hide after 3 seconds unless it's an error
    if (!isError) { // updated
        setTimeout(() => { // updated
            notificationModal.classList.add('hidden');
        }, 3000);
    }
} // updated

// --- Event Listeners ---
// Listen for input on all editors to run the code in real-time
htmlCode.addEventListener('input', runCode); // updated
cssCode.addEventListener('input', runCode);
jsCode.addEventListener('input', runCode); // updated

// Listen for clicks on the save and reset buttons // updated
saveButton.addEventListener('click', saveCode); // updated
resetButton.addEventListener('click', resetCode);
modalCloseButton.addEventListener('click', () => { // updated
    notificationModal.classList.add('hidden');
});
// minor change added
// --- Initialization --- // updated // updated
// Load the code from local storage on page load // updated
window.onload = loadCode;
// minor change added