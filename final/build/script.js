
let likeButtonHovered = false;
let modalTimeout;
const myModal = document.getElementById('myModal');
const likeButton = document.getElementById('likeButton');

myModal.style.display = 'none';

likeButton.addEventListener('mouseenter', function () {
    likeButtonHovered = true;
    clearTimeout(modalTimeout);
    myModal.style.display = 'flex';
    const images = document.querySelectorAll('.modal-images img');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('show');
        }, index * 100);
    });

    images.forEach((image) => {
        image.addEventListener('mouseenter', function () {
            clearTimeout(modalTimeout);
            likeButtonHovered = true;
            images.forEach((img) => {
                if (img !== image) {
                    img.style.transition = 'transform 0.3s ease-in-out';
                    img.style.transform = 'scale(0.8)';
                }
            });
            image.style.transition = 'transform 0.3s ease-in-out';
            image.style.transform = 'scale(1.2)';
        });

        image.addEventListener('mouseleave', function () {
            images.forEach((img) => {
                img.style.transition = 'transform 0.3s ease-in-out';
                img.style.transform = 'scale(1)';
            });
        });
    });
});

document.getElementById('myModal').addEventListener('mouseenter', function () {
    likeButtonHovered = false;
    clearTimeout(modalTimeout);
});

document.getElementById('myModal').addEventListener('mouseleave', function () {
    setModalHideTimeout();
});

// Event listener for mouse entering the modal images
const modalImages = document.querySelectorAll('.modal-images img');
modalImages.forEach((modalImage) => {
    modalImage.addEventListener('mouseenter', function () {
        clearTimeout(modalTimeout);
        likeButtonHovered = false;
    });
});

// Event listener for mouse leaving the modal images
modalImages.forEach((modalImage) => {
    modalImage.addEventListener('mouseleave', function () {
        setModalHideTimeout();
    });
});

// Event listener for mouse leaving the like button after modal and modal images
likeButton.addEventListener('mouseleave', function () {
    likeButtonHovered = false;
    setModalHideTimeout();
});

myModal.addEventListener('mouseleave', function () {
    likeButtonHovered = false;
    setModalHideTimeout();
});

// Function to set a timeout for hiding the modal
function setModalHideTimeout() {
    clearTimeout(modalTimeout);
    modalTimeout = setTimeout(() => {
        if (!likeButtonHovered) {
            myModal.style.transition = 'opacity 0.2s ease-in-out';
            myModal.style.opacity = '0';

            setTimeout(() => {
                myModal.style.display = 'none';
                myModal.style.opacity = '1';
            }, 200);
        }
    }, 200);
}

likeButton.addEventListener('mouseleave', function () {
    clearTimeout(modalTimeout);
    setModalHideTimeout();
});

likeButton.addEventListener('mouseenter', function () {
    likeButtonHovered = true;
    clearTimeout(modalTimeout);
    clearTimeout(likeButtonTimeout); 
});


// Clicks ---> 
// let clickCount = 0;

// likeButton.addEventListener('click', handleLikeButtonClick);

// function handleLikeButtonClick() {
//     const likeIcon = document.querySelector('.like-icon');

//     if (clickCount === 0) {
//         // First click: Replace the icon and increase the size
//         likeIcon.src = 'pictures/like_reaction.png';
//         likeIcon.style.transition = 'transform 0.3s ease-in-out';
//         likeIcon.style.transform = ' translateY(-8px) rotate(20deg) scale(1.5)';


//         setTimeout(() => {
//             likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1.5)';
//         }, 200);


//     } else {
//         // Second click: Fade in the previous image
//         const previousIcon = document.createElement('img');
//         previousIcon.src = 'pictures/like_icon.png';
//         previousIcon.classList.add('like-icon', 'previous-icon');

//         // Insert the previous icon before the current icon
//         likeIcon.parentNode.insertBefore(previousIcon, likeIcon);

//         // Triggering reflow to apply transition on display
//         previousIcon.offsetHeight;

//         // Apply transition for fading in the previous image
//         previousIcon.style.transition = 'opacity 0.3s ease-in-out';
//         previousIcon.style.opacity = '1';

//         // Remove the current icon
//         likeIcon.remove();
//     }

//     // Toggle the click count for the next click
//     clickCount = (clickCount + 1) % 2;
// }

// const reactionButtons = document.querySelectorAll('.modal-images img');
// reactionButtons.forEach((reactionButton) => {
//     reactionButton.addEventListener('click', handleReactionButtonClick);
// });

// function handleReactionButtonClick() {
//     const reactionText = this.getAttribute('data-description');
//     const likeIcon = document.querySelector('.like-icon');

//     // Replace the icon in the like button with the image of the clicked reaction
//     likeIcon.src = `pictures/${reactionText.toLowerCase()}_reaction.png`;

//     // Apply a transition effect to the like button icon
//     likeIcon.style.transition = 'transform 0.3s ease-in-out';
//     likeIcon.style.transform = 'translateY(-8px) rotate(20deg) scale(1.5)';

//     // Reset the transformation after the transition is complete
//     setTimeout(() => {
//         likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1.5)';
//     }, 200);

//     // Reset click count to allow multiple reactions to be selected consecutively
//     clickCount = 0;
// }

let clickCount = 0;
let previousIconSrc;


likeButton.addEventListener('click', handleLikeButtonClick);

function handleLikeButtonClick() {
    const likeIcon = document.querySelector('.like-icon');

    if (clickCount === 0) {
        // First click on the like button
        previousIconSrc = likeIcon.src; // Store the previous icon source

        if (previousIconSrc.includes('like_reaction')) {
            // If the previous icon was like_reaction, swap to the original like_icon
            likeIcon.src = 'pictures/like_icon.png';
            likeIcon.style.transition = 'transform 0.3s ease-in-out';
            likeIcon.style.transform = 'translateY(-8px) rotate(20deg) scale(1)';
            setTimeout(() => {
                likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1)';
            }, 200);
        } else {
            // If the previous icon was like_icon or another reaction, swap to like_reaction
            likeIcon.src = 'pictures/like_reaction.png';
            likeIcon.style.transition = 'transform 0.3s ease-in-out';
            likeIcon.style.transform = 'translateY(-8px) rotate(20deg) scale(1.3)';
            setTimeout(() => {
                likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1.3)';
            }, 200);
        }
    } else {
        // Subsequent clicks on the like button
        if (previousIconSrc && previousIconSrc.includes('reaction')) {
            // If the previous icon included 'reaction', swap back to the original like_icon
            likeIcon.src = 'pictures/like_icon.png';
            likeIcon.style.transition = 'transform 0.3s ease-in-out';
            likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1)';
            setTimeout(() => {
                likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1)';
            }, 200);
        } else {
            // If the previous icon was like_reaction or another reaction, swap to the original like_icon
            likeIcon.src = 'pictures/like_icon.png';
        }

        likeIcon.style.transition = 'transform 0.3s ease-in-out';
        likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1)';
    }

    // Toggle the click count for the next click
    clickCount = (clickCount + 1) % 2;
}

// Click event listeners for the reaction buttons
const reactionButtons = document.querySelectorAll('.modal-images img');
reactionButtons.forEach((reactionButton) => {
    reactionButton.addEventListener('click', handleReactionButtonClick);
});

function handleReactionButtonClick() {
    const reactionText = this.getAttribute('data-description');
    const likeIcon = document.querySelector('.like-icon');
    

    // Store the previous icon source before swapping
    previousIconSrc = likeIcon.src;
    

    // Construct the image source dynamically based on the reactionText
    const reactionImageSrc = `pictures/${reactionText.toLowerCase()}_reaction.png`;

    // Replace the icon in the like button with the dynamically constructed image
    likeIcon.src = reactionImageSrc;

    // Apply a transition effect to the like button icon
    likeIcon.style.transition = 'transform 0.3s ease-in-out';
    likeIcon.style.transform = 'translateY(-8px) rotate(20deg) scale(1.5)';

    const likeButtonText = document.getElementById('likeButtonText');
    likeButtonText.style.transition = 'color 0.3s ease-in-out';
    likeButtonText.textContent = reactionText;




    // Reset the transformation after the transition is complete
    setTimeout(() => {
        likeIcon.style.transform = 'translateY(-3px) rotate(0deg) scale(1.5)';
    }, 200);

    // Reset click count to allow multiple reactions to be selected consecutively
    clickCount = 0;
}

