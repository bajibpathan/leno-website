document.addEventListener('DOMContentLoaded', function() {
//    Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
   
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Video Modal
    const modal = document.querySelector('#videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.querySelector('#videoPlayer');

    // Open modal when clicked
    videoButton.addEventListener('click', function() {
        // Show modal
        modal.style.display = 'block';

        // Replace the src attribute with the video URL
        videoPlayer.src = 'https://youtube.com/embed/8sXRyHI3bLw';

        // Close modal on button click
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            videoPlayer.sc = '';
        });
        //Close modal on outer click
        window.addEventListener('click', function(event) {
            if(event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    });
});


// Navigation background on scroll
window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0 ){
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});