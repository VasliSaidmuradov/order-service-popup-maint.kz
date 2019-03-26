    // GET BLOCKS
    // Get the modal
    var modal = document.getElementById("modal");
    var bgOpacity = document.getElementById("bgOpacity");
    var bgBlur1 = document.getElementById("bgBlur1");
    var bgBlur2 = document.getElementById("bgBlur2");

    //Wellcome box
    var wellcomeBox = document.getElementById("wellcomeBox");
    var congratulateBox = document.getElementById("congratulateBox");
    var levelBox = document.getElementById("levelBox");
    var loaderWindow = document.getElementById("loaderWindow");
    var qBoxLevel0 = document.getElementById("qBoxLevel0");


    // GET BUTTONS
    // Get the button that opens the modal
    var btnStartModal = document.getElementById("btnOpenModal");
    // Get the button that starts game (step 1)
    var btnStartGame = document.getElementById("btnStartGame");
    var btnNextLevel0 = document.getElementById("btnNextLevel0");

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
      document.getElementById("qBoxLevel0").style.display = "block";
      setTimeout(function () {
        loaderWindow.style.animation = "loader 2s linear forwards";
        // loaderWindow.style.filter = "blur(5px)"
      }, 5000);
      setTimeout(function () {
        loaderWindow.style.display = "none";
      }, 7200);
    }

    btnNextLevel0.onclick = function () {
      congratulateBox.style.display = "block";
      document.getElementById("qBoxLevel0").style.display = "none";
      // modal.style.filter = "blur(2px)";
      // congratulateBox.style.filter = "none";

      bgBlur1.style.display = "block";
      bgBlur2.style.display = "block";
    }


    // LEVEL POINTS

    var point0 = document.getElementById("point0");
    var point1 = document.getElementById("point1");
    var point2 = document.getElementById("point2");
    var point3 = document.getElementById("point3");
    var point4 = document.getElementById("point4");
    var point5 = document.getElementById("point5");


    // LEVEL 1
    var form0To1 = document.getElementById("form0To1");
    var form1To2 = document.getElementById("form1To2");
    var btnNextLevel1 = document.getElementById("btnNextLevel1");
    var btnNextCong = document.getElementById("btnNextCong");
    // To Level 1 form Congratulate box
    btnNextCong.onclick = function () {
      congratulateBox.style.display = "none";
      btnNextCong.id = "btnNextCongTo2";
      qBoxLevel0.style.display = "block";
      qBoxLevel0.style.animation = "ldt-power-on 1s forwards .5s";
      form0To1.style.display = "none";
      form1To2.style.display = "block";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";
      point0.style.animation = "none";
      point0.style.background = "url(global-assets/img/levels/level0_cursor.png) no-repeat bottom";
      point0.style.top = "1.5%";
      point0.classList.remove("step_point_before");
      point1.style.animation = "robot 0.3s linear infinite alternate";
      point1.style.background = "url(global-assets/img/levels/level1_man.png) no-repeat center";
      point1.style.top = "6%";
      point1.classList.remove("step_point_after", "step_animated");
      point1.classList.add("step_point_before");
      point2.classList.add("step_point_after", "step_animated");

    }

    // When the user clicks on CLOSE button on top, close the modal
    btnClose.onclick = function () {
      modal.style.display = "none";
      bgOpacity.style.display = "none";
      wellcomeBox.style.display = "none";
      levelBox.style.display = "none";
      loaderWindow.style.animation = "none";
      congratulateBox.style.display = "none";
      document.getElementById("qBoxLevel0").style.display = "none";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";

      qBoxLevel0.style.animation = "ldt-power-on 1s forwards 5.5s";
      form0To1.style.display = "block";
      form1To2.style.display = "none";
      point0.style.background = "url(global-assets/img/levels/level0.png) no-repeat center";
      point0.style.top = "0%";
      point0.classList.add("step_point_before");
      point0.style.animation = "robot 0.3s linear infinite alternate";
      point1.style.background = "url(global-assets/img/levels/level1.png) no-repeat center";
      point1.style.top = "13%";
      point1.style.animation = "none";
      point1.classList.add("step_point_after", "step_animated");
      point1.classList.remove("step_point_before");
      point2.classList.remove("step_point_after", "step_animated");
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