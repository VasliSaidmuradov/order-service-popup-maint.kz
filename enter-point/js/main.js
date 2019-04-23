    // GET BLOCKS
    // Get the modal
    var modal = document.getElementById("modal");
    var bgOpacity = document.getElementById("bgOpacity");
    var bgBlur1 = document.getElementById("bgBlur1");
    var bgBlur2 = document.getElementById("bgBlur2");

    //Box
    var wellcomeBox = document.getElementById("wellcomeBox");
    var congratulateBox = document.getElementById("congratulateBox");
    var levelBox = document.getElementById("levelBox");
    var loaderWindow = document.getElementById("loaderWindow");
    var qBoxLevel0 = document.getElementById("qBoxLevel0");
    var stepBox = document.getElementById("stepBox");

    // GET BUTTONS
    // Get the button that opens the modal
    var btnStartModal = document.getElementById("btnOpenModal");
    // Get the button that starts game (step 1)
    var btnStartGame = document.getElementById("btnStartGame");
    var btnNextLevel0 = document.getElementById("btnNextLevel0");
    var btnNextLevel1 = document.getElementById("btnNextLevel1");

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
    var form2To3 = document.getElementById("form2To3");
    var form3To4 = document.getElementById("form3To4");
    var btnNextLevel1 = document.getElementById("btnNextLevel1");
    var btnNextCong = document.getElementById("btnNextCong0");
    var compassBox = document.getElementById("compassBox");

    // To Level 1 form Congratulate box
    btnNextCong.onclick = function () {
      congratulateBox.style.display = "none";
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
      // compass box
      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-1.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu1.png) no-repeat top/cover";
      document.getElementById("btnNextLevel0").style.display = "none";
      document.getElementById("btnNextLevel1").style.display = "inline-block";
    }
    // btnNextLevel0.onclick = 
    // function btnNextlevel0() {
    //   congratulateBox.style.display = "block";
    //   document.getElementById("qBoxLevel0").style.display = "none";
    //   // modal.style.filter = "blur(2px)";
    //   // congratulateBox.style.filter = "none";
      

    //   bgBlur1.style.display = "block";
    //   bgBlur2.style.display = "block";
    // }
    // Click to Next button 1 (pass to Second level)
    
    //document.getElementById("btnNextLevel1").onclick = 
    
    // $.fn.btnNextLevel1 = function () {
    //   congratulateBox.style.display = "block";
    //   document.getElementById("quiz1_text").style.opacity = "0";
    //   document.getElementById("quiz2_text").style.opacity = "1";
    //   document.getElementById("qBoxLevel0").style.display = "none";
    //   document.getElementById("btnNextCong0").style.display = "none";
    //   document.getElementById("btnNextCong1").style.display = "inline-block";
    //   // modal.style.filter = "blur(2px)";
    //   // congratulateBox.style.filter = "none";

    //   bgBlur1.style.display = "block";
    //   bgBlur2.style.display = "block";
    // }

    // Click to Congratulete button 1 (pass to Second level)
    document.getElementById("btnNextCong1").onclick = function () {
      congratulateBox.style.display = "none";
      qBoxLevel0.style.display = "block";
      qBoxLevel0.style.animation = "ldt-power-on 1s forwards .5s";
      form0To1.style.display = "none";
      form1To2.style.display = "none";
      form2To3.style.display = "block";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";
      point0.style.animation = "none";
      point0.style.background = "url(global-assets/img/levels/level0_cursor.png) no-repeat bottom";
      point0.style.top = "1.5%";
      point0.classList.remove("step_point_before");
      point1.style.animation = "none";
      point1.style.background = "url(global-assets/img/levels/level1_cursor.png) no-repeat bottom";
      point1.style.top = "11%";
      point1.classList.remove("step_point_before");
      point2.style.animation = "robot 0.3s linear infinite alternate";
      point2.style.background = "url(global-assets/img/levels/level2_man.png) no-repeat center";
      point2.style.top = "2%";
      point2.style.height = "30%";
      point2.classList.remove("step_point_after", "step_animated");
      point2.classList.add("point_2_before");
      point3.classList.add("step_point_after", "step_animated");
      // compass box
      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-2.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu2.png) no-repeat top/cover";
      
      document.getElementById("btnNextLevel1").style.display = "none";
      document.getElementById("btnNextLevel2").style.display = "inline-block";
    }
    // Click to Next button 2 (pass to Third level)
    //document.getElementById("btnNextLevel2").onclick = 
    // $.fn.btnNextLevel2 = function () {
    //   congratulateBox.style.display = "block";
    //   document.getElementById("quiz1_text").style.opacity = "0";
    //   document.getElementById("quiz2_text").style.opacity = "0";
    //   document.getElementById("quiz3_text").style.opacity = "1";
    //   document.getElementById("qBoxLevel0").style.display = "none";
    //   document.getElementById("btnNextCong0").style.display = "none";
    //   document.getElementById("btnNextCong1").style.display = "none";
    //   document.getElementById("btnNextCong2").style.display = " inline-block";
    //   bgBlur1.style.display = "block";
    //   bgBlur2.style.display = "block";
    // }
    // Click to Congratulete button 2 (pass to Third level)
    document.getElementById("btnNextCong2").onclick = function () {
      congratulateBox.style.display = "none";
      qBoxLevel0.style.display = "block";
      qBoxLevel0.style.animation = "ldt-power-on 1s forwards .5s";
      form0To1.style.display = "none";
      form1To2.style.display = "none";
      form2To3.style.display = "none";
      form3To4.style.display = "block";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";
      point0.style.animation = "none";
      point0.style.background = "url(global-assets/img/levels/level0_cursor.png) no-repeat bottom";
      point0.style.top = "1.5%";
      point0.classList.remove("step_point_before");
      point1.style.animation = "none";
      point1.style.background = "url(global-assets/img/levels/level1_cursor.png) no-repeat bottom";
      point1.style.top = "11%";
      point1.classList.remove("step_point_before");
      point2.style.animation = "none";
      point2.style.background = "url(global-assets/img/levels/level2_cursor.png) no-repeat center";
      point2.style.top = "21%";
      point2.style.height = "20%";
      point2.classList.remove("step_point_after", "step_animated");
      point2.classList.remove("point_2_before");
      point3.style.animation = "robot 0.3s linear infinite alternate";
      point3.style.background = "url(global-assets/img/levels/level3_man.png) no-repeat center";
      point3.style.top = "44%";
      point3.style.height = "20%";
      point3.classList.add("step_point_before");
      point3.classList.remove("step_point_after", "step_animated");
      point4.classList.add("step_point_after", "step_animated");
      // compass box
      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-3.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu3.png) no-repeat top/cover";
      //return btnNextCongTo2.id = "btnNextCongTo3";

      document.getElementById("btnNextLevel1").style.display = "none";
      document.getElementById("btnNextLevel2").style.display = "none";
      document.getElementById("btnNextLevel3").style.display = "inline-block";
    }

    // Click to Next button 3 (pass to Fourth level)
    
    // $.fn.btnNextLevel3 = function () {
    //   congratulateBox.style.display = "block";
    //   document.getElementById("quiz1_text").style.opacity = "0";
    //   document.getElementById("quiz2_text").style.opacity = "0";
    //   document.getElementById("quiz3_text").style.opacity = "0";
    //   document.getElementById("quiz4_text").style.opacity = "1";
    //   document.getElementById("qBoxLevel0").style.display = "none";
    //   document.getElementById("btnNextCong0").style.display = "none";
    //   document.getElementById("btnNextCong1").style.display = "none";
    //   document.getElementById("btnNextCong2").style.display = " none";
    //   document.getElementById("btnNextCong3").style.display = " inline-block";
    //       bgBlur1.style.display = "block";
    //   bgBlur2.style.display = "block";
    // }

    // Click to Congratulete button 3 (pass to Fourth level)
    document.getElementById("btnNextCong3").onclick = function () {
      congratulateBox.style.display = "none";
      qBoxLevel0.style.display = "block";
      qBoxLevel0.style.animation = "ldt-power-on 1s forwards .5s";
      form0To1.style.display = "none";
      form1To2.style.display = "none";
      form2To3.style.display = "none";
      form3To4.style.display = "none";
      form4To5.style.display = "block";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";
      point0.style.animation = "none";
      point0.style.background = "url(global-assets/img/levels/level0_cursor.png) no-repeat bottom";
      point0.style.top = "1.5%";
      point0.classList.remove("step_point_before");
      point1.style.animation = "none";
      point1.style.background = "url(global-assets/img/levels/level1_cursor.png) no-repeat bottom";
      point1.style.top = "11%";
      point1.classList.remove("step_point_before");
      point2.style.animation = "none";
      point2.style.background = "url(global-assets/img/levels/level2_cursor.png) no-repeat center";
      point2.style.top = "21%";
      point2.style.height = "20%";
      point2.classList.remove("step_point_after", "step_animated");
      point2.classList.remove("point_2_before");
      point3.style.animation = "none";
      point3.style.background = "url(global-assets/img/levels/level3_cursor.png) no-repeat center";
      point3.style.top = "53%";
      point3.style.height = "20%";
      point3.classList.remove("step_point_before");
      point3.classList.remove("step_point_after", "step_animated");
      
      point4.style.animation = "robot 0.3s linear infinite alternate";
      point4.style.background = "url(global-assets/img/levels/level4_man.png) no-repeat center";
      point4.style.top = "35%";
      point4.style.height = "30%";
      point4.classList.add("point_4_before");
      point4.classList.remove("step_point_after", "step_animated");
      point5.classList.add("step_point_after", "step_animated");
      // compass box
      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-4.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu4.png) no-repeat top/cover";
      //return btnNextCongTo2.id = "btnNextCongTo3";

      document.getElementById("btnNextLevel1").style.display = "none";
      document.getElementById("btnNextLevel2").style.display = "none";
      document.getElementById("btnNextLevel3").style.display = "none";
      document.getElementById("btnNextLevel4").style.display = "inline-block";
    }
    // Click to Next button 3 (pass to Fourth level)
    document.getElementById("btnNextLevel4").onclick = function () {
      congratulateBox.style.display = "block";
      document.getElementById("quiz1_text").style.opacity = "0";
      document.getElementById("quiz2_text").style.opacity = "0";
      document.getElementById("quiz3_text").style.opacity = "0";
      document.getElementById("quiz4_text").style.opacity = "0";
      document.getElementById("quiz5_text").style.opacity = "1";
      document.getElementById("qBoxLevel0").style.display = "none";
      document.getElementById("btnNextCong0").style.display = "none";
      document.getElementById("btnNextCong1").style.display = "none";
      document.getElementById("btnNextCong2").style.display = "none";
      document.getElementById("btnNextCong3").style.display = "none";
      document.getElementById("btnNextCong4").style.display = "inline-block";
      //document.getElementById("btnNextCong3")
      // modal.style.filter = "blur(2px)";
      // congratulateBox.style.filter = "none";

      bgBlur1.style.display = "block";
      bgBlur2.style.display = "block";
    }

    // Click to Congratulete button 4 (pass to Fifth level)
    document.getElementById("btnNextCong4").onclick = function () {
      congratulateBox.style.display = "none";
      qBoxLevel0.style.display = "none";
      qBoxLevel0.style.animation = "ldt-power-on 1s forwards .5s";
      form0To1.style.display = "none";
      form1To2.style.display = "none";
      form2To3.style.display = "none";
      form3To4.style.display = "none";
      form4To5.style.display = "none";
      bgBlur1.style.display = "none";
      bgBlur2.style.display = "none";
      point0.style.animation = "none";
      point0.style.background = "url(global-assets/img/levels/level0_cursor.png) no-repeat bottom";
      point0.style.top = "1.5%";
      point0.classList.remove("step_point_before");
      point1.style.animation = "none";
      point1.style.background = "url(global-assets/img/levels/level1_cursor.png) no-repeat bottom";
      point1.style.top = "11%";
      point1.classList.remove("step_point_before");
      point2.style.animation = "none";
      point2.style.background = "url(global-assets/img/levels/level2_cursor.png) no-repeat center";
      point2.style.top = "21%";
      point2.style.height = "20%";
      point2.classList.remove("step_point_after", "step_animated");
      point2.classList.remove("point_2_before");
      
      point3.style.animation = "none";
      point3.style.background = "url(global-assets/img/levels/level3_cursor.png) no-repeat center";
      point3.style.top = "53%";
      point3.style.height = "20%";
      point3.classList.remove("step_point_before");
      point3.classList.remove("step_point_after", "step_animated");
      
      point4.style.animation = "none";
      point4.style.background = "url(global-assets/img/levels/level4_cursor.png) no-repeat center";
      point4.style.top = "51%";
      point4.style.height = "20%";
      point4.classList.remove("point_4_before");
      point4.classList.remove("step_point_after", "step_animated");

      point5.style.animation = "robot 0.3s linear infinite alternate";
      point5.style.background = "url(global-assets/img/levels/level5_man.png) no-repeat center";
      point5.style.top = "61%";
      point5.style.height = "30%";
      point5.classList.add("point_5_before");
      point5.classList.remove("step_point_after", "step_animated");
      
      // compass box
      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-5.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu5.png) no-repeat top/cover";
      //return btnNextCongTo2.id = "btnNextCongTo3";

      document.getElementById("btnNextLevel1").style.display = "none";
      document.getElementById("btnNextLevel2").style.display = "none";
      document.getElementById("btnNextLevel3").style.display = "none";
      document.getElementById("btnNextLevel4").style.display = "inline-block";
    }

    // click on CLOSE button on top, CLOSE the modal
    //btnClose.onclick = 
    
    $.fn.btnClose = function () {
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
      form2To3.style.display = "none";
      form3To4.style.display = "none";
      form4To5.style.display = "none";
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
      point2.classList.remove("point_2_before");
      point2.style.background = "url(global-assets/img/levels/level2.png) no-repeat center";
      point2.style.top = "19%";
      point2.style.height = "20%";

      point3.classList.remove("step_point_after", "step_animated");
      point3.classList.remove("step_point_before");
      point3.style.background = "url(global-assets/img/levels/level3.png) no-repeat center";
      point3.style.top = "51%";
      point3.style.height = "20%";

      point4.classList.remove("step_point_after", "step_animated");
      point4.classList.remove("point_4_before");
      point4.style.background = "url(global-assets/img/levels/level4.png) no-repeat center";
      point4.style.top = "49%";
      point4.style.height = "20%";

      point5.classList.remove("step_point_after", "step_animated");
      point5.classList.remove("point_5_before");
      point5.style.background = "url(global-assets/img/levels/level5.png) no-repeat center";
      point5.style.top = "77%";
      point5.style.height = "20%";

      compassBox.style.background = "url(global-assets/img/level-0/compass.svg) no-repeat center/cover, url(global-assets/img/level-0/compass/compass-0.png) no-repeat center";
      stepBox.style.background = "url(global-assets/img/header/header-menu.png) no-repeat top/cover";

      document.getElementById("btnNextLevel0").style.display = "inline-block";
      document.getElementById("btnNextLevel1").style.display = "none";
      document.getElementById("btnNextLevel2").style.display = "none";
      document.getElementById("btnNextLevel3").style.display = "none";
      document.getElementById("btnNextLevel4").style.display = "none";

      document.getElementById("quiz1_text").style.opacity = "1";
      document.getElementById("quiz2_text").style.opacity = "0";
      document.getElementById("quiz3_text").style.opacity = "0";
      document.getElementById("quiz4_text").style.opacity = "0";
      document.getElementById("quiz5_text").style.opacity = "0";

      document.getElementById("btnNextCong0").style.display = "inline-block";
      document.getElementById("btnNextCong1").style.display = "none";
      document.getElementById("btnNextCong2").style.display = "none";
      document.getElementById("btnNextCong3").style.display = "none";
      document.getElementById("btnNextCong4").style.display = "none";
      document.getElementById("message").value = "";
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