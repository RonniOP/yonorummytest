// Function to create responsive download boxes
function addDownloadBoxes() {
    const topBox = document.createElement('div');
    const bottomBox = document.createElement('div');

    topBox.textContent = "DOWNLOAD THE REAL CASH GAME";
    bottomBox.textContent = "DOWNLOAD THE REAL CASH GAME";

    topBox.className = "download-box";
    bottomBox.className = "download-box";

    topBox.onclick = () => openUrl('https://xjpklccossyd00.zxcvrfrec.com/RummyMeetAPK/RummyMeet-channel-23318602.apk');
    bottomBox.onclick = () => openUrl('https://xjpklccossyd00.zxcvrfrec.com/RummyMeetAPK/RummyMeet-channel-23318602.apk');

    document.body.insertBefore(topBox, document.getElementById('board'));
    document.body.appendChild(bottomBox);
}

// Function to open the URL in the default browser
function openUrl(url) {
    window.open(url, '_blank');
}

// Call the function to add the boxes
addDownloadBoxes();
