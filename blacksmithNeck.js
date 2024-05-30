// Necklace Array & random Function
function blacksmithNeck() {
    var myarrayblacksmithNeck = ['Neck.jpg', 'Neck1.jpg', 'Neck2.jpg'];

    var randomblacksmithNeck = myarrayblacksmithNeck[Math.floor(Math.random() * myarrayblacksmithNeck.length)];

    document.getElementById('neckPicture').src = `./Pictures/Neck/${randomblacksmithNeck}`;
}
