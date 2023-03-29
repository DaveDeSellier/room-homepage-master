const pictures = document.querySelector('.img-container');
const pictureArr = Array.from(pictures.children);
const prevButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

const pictureWidth = pictureArr[0].clientWidth;

//Lay images out next to each other
pictureArr.forEach((picture, index) => {
    picture.style.left = `${pictureWidth * index}px`
});

//When I click previous button, the previous image is shown, if it exists
prevButton.addEventListener('click', () => {
    let currentPicture = document.querySelector('.current-picture');

    if(currentPicture.previousElementSibling == null) {
        return;
    }

    let nextPicture = currentPicture.previousElementSibling;
    const amountToMove = nextPicture.style.left;

    pictures.style.transform = `translateX(${'-' + amountToMove})`

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
    const amountToMove = nextPicture.style.left;

    pictures.style.transform = `translateX(${'-' + amountToMove})`

    currentPicture.classList.remove('current-picture');
    nextPicture.classList.add('current-picture');

    
});