document.addEventListener('DOMContentLoaded', () => {
    const clipboardButton = document.getElementById('clipboardButton');
    const imageButton = document.getElementById('imageButton');
    const displayArea = document.getElementById('displayArea');

    // Function to be called from mobile app to display text
    window.getMobileClipboardContent = function(text) {
        displayArea.textContent = text;
    };

    // Function to be called from mobile app to display image
    window.displayImageFromMobile = function(imageData) {
        // Create an image element
        const img = document.createElement('img');
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        
        // Set the image source to the base64 data
        img.src = imageData;
        
        // Clear the display area and append the image
        displayArea.innerHTML = '';
        displayArea.appendChild(img);
    };

    clipboardButton.addEventListener('click', () => {
        // Send message to mobile app
        if (window.webkit && window.webkit.messageHandlers) {
            // iOS - using the message handler
            window.webkit.messageHandlers.appHandler.postMessage({
                action: 'get-mobile-clipboard-content'
            });
        } else if (window.Android) {
            // Android
            window.Android.getMobileClipboardContent();
        } else {
            // Fallback for testing in browser
            console.log('Mobile app bridge not available');
        }
    });

    imageButton.addEventListener('click', () => {
        if (window.webkit && window.webkit.messageHandlers) {
            // iOS - using the message handler
            window.webkit.messageHandlers.appHandler.postMessage({
                action: 'get-image-from-native-library'
            });
        } else if (window.Android) {
            // Android
            window.Android.getImageFromNativeLibrary();
        } else {
            // Fallback for testing in browser
            console.log('Mobile app bridge not available');
        }
    });

    // Example of sending a configuration request
    function requestAppConfiguration() {
        if (window.webkit && window.webkit.messageHandlers) {
            window.webkit.messageHandlers.appHandler.postMessage({
                action: 'get-app-configuration'
            });
        }
    }

    // Function to be called from mobile app with clipboard content
    window.setClipboardContent = function(content) {
        textInput.value = content;
    };
}); 