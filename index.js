// create const for ID element 'meme-images'
const memeImages = document.getElementById("meme-images")

// create const for ID element 'meme-name'
const select = document.getElementById('meme-name')

// create const for querySelector '#meme-placeholder .placeholder-image'
const memePlaceHolder = document.querySelector("#meme-placeholder .placeholder-image")

// create const for ID element 'drop-down'
const dropDown = document.getElementById('drop-down')

// create const for ID elements 'top-text-box' & 'bottom-text-box'
const topTextBox = document.getElementById('top-text-box');
const bottomTextBox = document.getElementById('bottom-text-box');

// create const for form ID element 'meme-form'
const form = document.getElementById('meme-form')

//create const for ID element 'url-text'
const urlInput = document.getElementById('url-text')

// create const for memeApi 'localhost:3000/memes'
const memeApi = "http://localhost:3000/memes"

// fetch and res.json return promises that resolve to the response and the json data 
fetch(`${memeApi}`)
.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw 'Error'
    }
}) 
.then((data) => {
    // create a function 'memeImage' to irirate each meme image 
    data.forEach((memeImage) => {
      // create new img element, add src attribute, append to 'meme-images'
      const newMemeImage = document.createElement('img')
      newMemeImage.src = memeImage.image;
      memeImages.append(newMemeImage) 

      // create element option
      // update value and inner text 
      // append to select 
      const option = document.createElement('option')
      option.value = memeImage.image 
      option.textContent = memeImage.name 
      select.appendChild(option)

     // Add 'change' event listener to dropdown
     select.addEventListener('change', (e) => {
        const selectedImage = e.target.value;
        memePlaceHolder.src = selectedImage; // Set placeholder image src
    });

      // create 'click' event listener that will allows to click on images and display individually 
      // set new src attribute to 'memePlaceHolder' for 'newMemeImage" src attribute
      // append 'newMemeImage' to 'memeImages'
      newMemeImage.addEventListener('click', () => {
        memePlaceHolder.src = newMemeImage.src

     })
     memeImages.appendChild(newMemeImage)
})

  // Add 'input' event listeners to top and bottom text boxes
  topTextBox.querySelector('input').addEventListener('input', () => {
    const topText = topTextBox.querySelector('input').value;
    memePlaceHolder.nextElementSibling.textContent = topText; // Update top text
});

bottomTextBox.querySelector('input').addEventListener('input', () => {
    const bottomText = bottomTextBox.querySelector('input').value;
    memePlaceHolder.nextElementSibling.nextElementSibling.textContent = bottomText; // Update bottom text
});


})
// create catch error 
.catch((error) => {
  console.error('Error fetching data:', error);
});

// create form event listener 
// we want to allow users to submit their own 'https: images' (only)
// get elements by ID 'url-input'

form.addEventListener('submit', (e) => {
    e.preventDefault()

    

    const imageUrl = urlInput.value;

        if (imageUrl.startsWith('https://')) {
            // Create new image element
            const newUrlImage = document.createElement('img');
            newUrlImage.src = imageUrl;
            
            memePlaceHolder.src = imageUrl 

            // Append new image to memeImages container
            memeImages.appendChild(newUrlImage);

            // Clear input field
            urlInput.value = '';
        } else {
            alert('Please enter a valid image URL');
        }
    });
