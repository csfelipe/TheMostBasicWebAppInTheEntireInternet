document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const displayButton = document.getElementById('displayButton');

    displayButton.addEventListener('click', () => {
        const text = textInput.value;
        alert(text);
    });

    // Also allow Enter key to trigger the display
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            displayButton.click();
        }
    });
}); 