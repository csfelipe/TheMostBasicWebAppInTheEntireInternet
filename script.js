document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const displayButton = document.getElementById('displayButton');
    const clipboardButton = document.getElementById('clipboardButton');

    displayButton.addEventListener('click', () => {
        const text = textInput.value;
        alert(text);
    });

    clipboardButton.addEventListener('click', () => {
        // Send message to mobile app
        if (window.webkit && window.webkit.messageHandlers) {
            // iOS
            window.webkit.messageHandlers.getMobileClipboardContent.postMessage({});
        } else if (window.Android) {
            // Android
            window.Android.getMobileClipboardContent();
        } else {
            // Fallback for testing in browser
            console.log('Mobile app bridge not available');
        }
    });

    // Also allow Enter key to trigger the display
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            displayButton.click();
        }
    });

    // Function to be called from mobile app with clipboard content
    window.setClipboardContent = function(content) {
        textInput.value = content;
    };
}); 