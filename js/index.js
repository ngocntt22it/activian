var images = document.querySelectorAll('.slideshow img');
    var currentIndex = 0;
    var prevArrow = document.querySelector('.slideshow-controls .prev');
    var nextArrow = document.querySelector('.slideshow-controls .next');

    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextArrow.addEventListener('click', nextImage);
    prevArrow.addEventListener('click', prevImage);

    setInterval(nextImage, 3000);


    /*HOT TOUR*/
    // Replace "images/banner/Br1.jpg" with the actual path to your main image file
        // Replace "path-to-small-image.png" with the actual path to your small overlay image file




    /*CẨM NANG DU LỊCH*/
        var imagess = document.getElementById('khung-nho').getElementsByTagName('img');
        var currentIndexx = 0;

        function changeImage() {
            var imageUrl = imagess[currentIndexx].src;
            document.getElementById('khung-to').style.backgroundImage = `url(${imageUrl})`;

            // Hiển thị tiêu đề của ảnh hiện tại
            var imageTitle = imagess[currentIndexx].title;
            document.getElementById('image-titles').innerHTML = `<p>${imageTitle}</p>`;

            currentIndexx = (currentIndexx + 1) % imagess.length;
        }

        setInterval(changeImage, 3000);



    /*THƯ VIỆN*/
    function showLargeImage(src) {
            var largeImage = document.querySelector('.tvha-large-image');
            largeImage.src = src;
            var largeImageContainer = document.querySelector('.tvha-large-image-container');
            largeImageContainer.style.display = 'flex';
        }

        function hideLargeImage() {
            var largeImageContainer = document.querySelector('.tvha-large-image-container');
            largeImageContainer.style.display = 'none';
        }




        /*FOOTER*/
        /*GOC*/
        window.addEventListener('DOMContentLoaded', () => {
            const footerBoxes = document.querySelectorAll('.goc-footer-box');

            footerBoxes.forEach(box => {
                box.addEventListener('mouseover', () => {
                    const tooltip = box.querySelector('.goc-tooltip');
                    tooltip.textContent = box.getAttribute('title');
                    tooltip.style.opacity = 1;
                });

                box.addEventListener('mouseout', () => {
                    const tooltip = box.querySelector('.goc-tooltip');
                    tooltip.style.opacity = 0;
                });
            });
        });




        /*TRỞ VỀ*/ 
        window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("scrollUpButton").style.display = "block";
      } else {
        document.getElementById("scrollUpButton").style.display = "none";
      }
    }

    document.getElementById("scrollUpButton").onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };