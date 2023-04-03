const pictures = document.querySelector('.img-container');
const pictureArr = Array.from(pictures.children);
const prevButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

//When I click previous button, the previous image is shown, if it exists
prevButton.addEventListener('click', () => {
    let currentPicture = document.querySelector('.current-picture');

    if(currentPicture.previousElementSibling == null) {
        return;
    }

    let nextPicture = currentPicture.previousElementSibling;
    currentPicture.style.zIndex = 0;
    nextPicture.style.zIndex = 1;

    currentPicture.classList.remove('current-picture');
    nextPicture.classList.add('current-picture');

});

//When I click the next button, the next image is displayed, if it exists
nextButton.addEventListener('click', () => {
    let currentPicture = document.querySelector('.current-picture');

    if(currentPicture.nextElementSibling == null) {
        return;
    }

    let nextPicture = currentPicture.nextElementSibling;
    currentPicture.style.zIndex = 0;
    nextPicture.style.zIndex = 1;

    currentPicture.classList.remove('current-picture');
    nextPicture.classList.add('current-picture');

    
});