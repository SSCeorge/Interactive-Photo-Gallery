//Uses data caption to search producing better results but slighly bulkier function
//Global variables 
const photos = Array.from(document.querySelectorAll('.photo'));
const captionsDt = photos.map(photo => photo.getAttribute('data-caption'));
const srchInput = document.querySelector('#search');

//Main function
function srchImgs() {
    const srchCap = srchInput.value.toLowerCase();
  
    photos.forEach((pic, picIndx) => {

      const caption = captionsDt[picIndx].toLowerCase();
      const container = pic.parentElement;

      if (caption.includes(srchCap)) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    });
}

//Function execution
srchInput.addEventListener('input', srchImgs);


//Pop the bread in the oven
window.addEventListener('load', () => {
    baguetteBox.run('.gallery');
});

/*
//Global Variables
const srchField = document.querySelector('#search');
const galleryItms = document.querySelectorAll('.gallery div');

//Shorter more concise function using alt text to search
srchField.addEventListener('input', () => {  
  const srchTxt = srchField.value.toLowerCase();
  
  galleryItms.forEach(pic => {
    const altTxt = pic.querySelector('img').getAttribute('alt').toLowerCase();
    
    if (altTxt.includes(srchTxt)) {
      pic.style.display = '';
    } else {
      pic.style.display = 'none';
    }
  });
}); 
*/
//Feel free to uncomment me


  




  