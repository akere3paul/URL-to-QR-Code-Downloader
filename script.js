const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const qrContainer = document.getElementById('qr-container');

generateBtn.addEventListener('click', () => {
    const url = document.getElementById('url-input').value.trim();
    if (!url) {
        alert('Please enter a valid URL!');
        return;
    }

    // Clear previous QR code
    qrContainer.style.display = '';
    qrContainer.innerHTML = '';

    // Generate QR code using QRCode.js library
    const qrCode = new QRCode(qrContainer, {
        text: url,
        width: 250,
        height: 250
    });

    // Display download button
    downloadBtn.style.display = 'inline-block';
});

downloadBtn.addEventListener('click', () => {
    // Capture the QR code canvas and download it as an image
    const canvas = qrContainer.querySelector('canvas');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
});