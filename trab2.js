function openPhoto(photoNumber) {
    var photo = document.getElementById('photo' + photoNumber);
    photo.style.width = '300px';
    photo.style.height = '300px';
}

document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('mouseleave', function() {
        this.style.width = '200px';
        this.style.height = '200px';
    });
});
