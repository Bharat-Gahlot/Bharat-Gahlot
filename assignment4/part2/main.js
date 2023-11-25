const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imagesText = {
    'pic1.jpg' : 'Human eye',
    'pic2.jpg' : 'Wave textured marble',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'Egyptian wall art',
    'pic5.jpg' : 'Butterfly on leaf'
  }

/* Looping through images */

for (let index = 0; index < imagesArray.length; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imagesArray[index]);
    newImage.setAttribute('alt', 'Image ' + (index + 1));
    // Add a click event listener to each thumbnail image
    newImage.addEventListener('click', function() {
        // Set the src attribute value of the displayed-img <img>
        document.querySelector('.displayed-img').setAttribute('src', 'images/' + imagesArray[index]);

        // Set the alt attribute value of the displayed-img <img>
        document.querySelector('.displayed-img').setAttribute('alt', 'Image ' + (index + 1));
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
