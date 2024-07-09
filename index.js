const memeImages = document.getElementById("meme-images")

const memePlaceHolder = document.querySelector("#meme-placeholder .placeholder-image")


const memeApi = `http://localhost:3000/memes`;

fetch(`${memeApi}`)
.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw 'Error'
    }
}) 
.then((data) => {
    data.forEach((memeImage) => {
      // create new img element and itirate each meme image 
      const newMemeImage = document.createElement('img')
      newMemeImage.src = memeImage.image;
      memeImages.append(newMemeImage)

      newMemeImage.addEventListener('click', () => {
        memePlaceHolder.src = newMemeImage.src
     })
     memeImages.appendChild(newMemeImage)
})
})
.catch((error) => {
  console.error('Error fetching data:', error);
});
   
  
    // const placeHolderImg = memePlaceHolder.getElementsByClassName('placeholder-image')[0];

    
  
//   const memeImagesContainer = document.getElementById("meme-images");
// const memePlaceholder = document.querySelector("#meme-placeholder .placeholder-image");

// const memeApi = 'http://localhost:3000/memes';

// fetch(memeApi)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Display meme images
//         data.forEach(memeImage => {
//             const img = document.createElement('img');
//             img.src = memeImage.image;
//             img.classList.add('meme-image');

//             // Add click event listener to each image
//             img.addEventListener('click', () => {
//                 memePlaceholder.src = img.src; // Replace placeholder image with clicked image
//             });

//             memeImagesContainer.appendChild(img); // Append image to meme-images container
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching memes:', error);
//     });
  