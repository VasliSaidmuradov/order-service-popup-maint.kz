    // Get the modal
    var modal = document.getElementById("modal");
    var bg_opacity = document.getElementById("bgOpacity");

    // Get the button that opens the modal
    var btn = document.getElementById("btnStart");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
      bg_opacity.style.display = "block";

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
      bg_opacity.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      if (event.target == bg_opacity) {
        bg_opacity.style.display = "none";
      }
    }