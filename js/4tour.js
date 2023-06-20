 var currentRating = 0;var currentRating1 = 0;

function highlightStars(rating) {
  var stars = document.getElementsByClassName("star");
  for (var i = 0; i < rating; i++) {
    stars[i].classList.add("hovered");
  }
}

function resetStars() {
  var stars = document.getElementsByClassName("star");
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove("hovered");
  }
}

 function setRating(rating) {
      if (currentRating === 0) {
        currentRating = rating;
        var stars = document.getElementsByClassName("star");
        for (var i = 0; i < stars.length; i++) {
          if (i < rating) {
            stars[i].classList.add("selected");
          } else {
            stars[i].classList.remove("selected");
          }
        }
        document.getElementById("ratingText").innerHTML = "Đánh giá: " + rating + "/5 sao";
      } else if (currentRating1 === 0) {
        currentRating1 = rating;
        var stars = document.getElementsByClassName("star");
        for (var i = 5; i < stars.length; i++) {
          if (i < 5 + rating) {
            stars[i].classList.add("selected");
          } else {
            stars[i].classList.remove("selected");
          }
        }
        document.getElementById("ratingText1").innerHTML = "Đánh giá: " + rating + "/5 sao";
      }
    }
