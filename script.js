async function startCamera() {
    try {
        // This line triggers the browser's permission popup
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: "user", // "user" for front camera, "environment" for back camera
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }, 
            audio: false // Set to true if you also need microphone
        });

        // If successful, attach the stream to your video element
        const videoElement = document.getElementById('your-video-id'); // Make sure you have a <video> tag in HTML
        videoElement.srcObject = stream;
        videoElement.play();
        
        console.log("Camera access granted");

    } catch (error) {
        console.error("Error accessing camera:", error);
        alert("Camera permission denied. Please enable it in your browser settings.");
    }
}

// Call this function when the page loads
window.addEventListener('load', startCamera);
