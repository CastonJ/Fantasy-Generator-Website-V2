



// Hemets Array & random Function
/*
function blacksmithHelmet() {
    var myarrayblacksmithHelmet = ['ColdHelmet.jpg', 'ColdHelmet1.jpg', 'ColdHelmet2.jpg'];

    var randomblacksmithHelmet = myarrayblacksmithHelmet[Math.floor(Math.random() * myarrayblacksmithHelmet.length)];

    document.getElementById('helmetPicture').src = `./Pictures/Helmet/${randomblacksmithHelmet}`
}


// Shoulders Array & random Function

function blacksmithShoulders() {
    var myarrayblacksmithShoulders = ['Shoulders.jpg', 'Shoulders1.jpg', 'Shoulders2.jpg'];

    var randomblacksmithShoulders = myarrayblacksmithShoulders[Math.floor(Math.random() * myarrayblacksmithShoulders.length)];

    document.getElementById('shouldersPicture').src = `./Pictures/Shoulders/${randomblacksmithShoulders}`
}



// Necklace Array & random Function
function blacksmithNeck() {
    var myarrayblacksmithNeck = ['Neck.jpg', 'Neck1.jpg', 'Neck2.jpg'];

    var randomblacksmithNeck = myarrayblacksmithNeck[Math.floor(Math.random() * myarrayblacksmithNeck.length)];

    document.getElementById('neckPicture').src = `./Pictures/Neck/${randomblacksmithNeck}`;
}
*/

// Helmet Array & random Function

const helmetImages = ['ColdHelmet.jpg', 'ColdHelmet1.jpg', 'ColdHelmet2.jpg'];

function blacksmithHelmet() {
  //  const helmetImages = ['ColdHelmet.jpg', 'ColdHelmet1.jpg', 'ColdHelmet2.jpg'];
    const randomHelmet = helmetImages[Math.floor(Math.random() * helmetImages.length)];
    document.getElementById('helmetPicture').src = `./Pictures/Helmet/${randomHelmet}`;
}

// Shoulders Array & random Function
function blacksmithShoulders() {
    const shoulderImages = ['Shoulders.jpg', 'Shoulders1.jpg', 'Shoulders2.jpg'];
    const randomShoulders = shoulderImages[Math.floor(Math.random() * shoulderImages.length)];
    document.getElementById('shouldersPicture').src = `./Pictures/Shoulders/${randomShoulders}`;
}

// Necklace Array & random Function
function blacksmithNeck() {
    const neckImages = ['Neck.jpg', 'Neck1.jpg', 'Neck2.jpg'];
    const randomNeck = neckImages[Math.floor(Math.random() * neckImages.length)];
    document.getElementById('neckPicture').src = `./Pictures/Neck/${randomNeck}`;
}