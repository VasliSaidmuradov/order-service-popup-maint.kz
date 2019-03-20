    // GET BLOCKS
    // Get the modal
    var modal = document.getElementById("modal");
    var bgOpacity = document.getElementById("bgOpacity");

    //Wellcome box
    var wellcomeBox = document.getElementById("wellcomeBox");
    var congratulateBox = document.getElementById("congratulateBox");
    var levelBox = document.getElementById("levelBox");
    var loaderWindow = document.getElementById("loaderWindow");


    // GET BUTTONS
    // Get the button that opens the modal
    var btnStartModal = document.getElementById("btnOpenModal");
    // Get the button that starts game (step 1)
    var btnStartGame = document.getElementById("btnStartGame");

    // Get the button that closes the modal
    var btnClose = document.getElementsByClassName("close")[0];


    // When the user clicks the button, open the modal and wellcome message
    btnStartModal.onclick = function () {
      modal.style.display = "block";
      bgOpacity.style.display = "block";
      wellcomeBox.style.display = "block";
    }
    btnStartGame.onclick = function () {
      // modal.style.display = "block";
      // bgOpacity.style.display = "block";
      wellcomeBox.style.display = "none";
      // document.getElementById("levelBox").style.display = "block";
      levelBox.style.display = "block";
      loaderWindow.style.display = "block";

      setTimeout(function () {
        loaderWindow.style.animation = "loader 2s linear forwards";
        // loaderWindow.style.filter = "blur(5px)"
      }, 5000);
      setTimeout(function () {
        loaderWindow.style.display = "none";
      }, 7200);
    }

    // When the user clicks on close button on top, close the modal
    btnClose.onclick = function () {
      modal.style.display = "none";
      bgOpacity.style.display = "none";
      wellcomeBox.style.display = "none";
      levelBox.style.display = "none";
      loaderWindow.style.animation = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    //   if (event.target == bg_opacity) {
    //     bgOpacity.style.display = "none";
    //   }
    // }