/*NÚT TRỞ VỀ LH,HA,GT*/

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