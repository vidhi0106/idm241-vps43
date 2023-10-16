document.getElementById('likeButton').addEventListener('mouseenter', function() {
    document.getElementById('myModal').style.display = 'flex';
});

document.getElementById('likeButton').addEventListener('mouseleave', function() {
    document.getElementById('myModal').style.display = 'none';
});