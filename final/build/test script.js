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
    clearTimeout(likeButtonTimeout); // Clear likeButtonTimeout when entering the like button
});

