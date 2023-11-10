let timeout;
let modalTimeout;

document.getElementById('likeButton').addEventListener('mouseenter', function() {
    clearTimeout(timeout);
    document.getElementById('myModal').style.display = 'flex';
    const images = document.querySelectorAll('.modal-images img');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('show');
        }, index * 100);
    });

    images.forEach((image) => {
        image.addEventListener('mouseenter', function() {
            clearTimeout(modalTimeout); // Clear previous timeout
            images.forEach((img) => {
                if (img !== image) {
                    img.style.transition = 'transform 0.3s ease';
                    img.style.transform = 'scale(0.8)';
                }
            });
            image.style.transition = 'transform 0.3s ease';
            image.style.transform = 'scale(1.2)';
        });

        image.addEventListener('mouseleave', function() {
            images.forEach((img) => {
                img.style.transition = 'transform 0.3s ease';
                img.style.transform = 'scale(1)';
            });
        });
    });
});

document.getElementById('myModal').addEventListener('mouseenter', function() {
    clearTimeout(modalTimeout);
});

document.getElementById('myModal').addEventListener('mouseleave', function() {
    const modal = document.getElementById('myModal');
    modal.style.transition = 'opacity 0.2s ease';
    modal.style.opacity = '0';

    modalTimeout = setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1'; // Reset opacity for next interaction
    }, 300); 
});

document.getElementById('likeButton').addEventListener('mouseleave', function() {
    document.getElementById('myModal').style.display = 'flex'; // Keep the modal visible
    clearTimeout(timeout);
    modalTimeout = setTimeout(() => {
        document.getElementById('myModal').style.display = 'none';
        const images = document.querySelectorAll('.modal-images img');
        images.forEach((image) => {
            image.classList.remove('show');
        });
    },0); 
});



