document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

function showVideo(videoName) {

    var videos = document.getElementsByClassName("film-content");

    for (var i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }

    document.getElementById(videoName).style.display = "block";
}
