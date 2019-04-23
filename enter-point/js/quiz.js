$("body").on("click", ".cont-label", function () {
    let form0To1 = $("#form0To1 input[type=radio]:checked").val(),
      form1To2 = $("#form1To2 input[type=radio]:checked").val(),
      form2To3 = $("#form2To3 input[type=radio]:checked").val();
    if (form0To1 == "Другое") $("#form0To1 textarea").prop("disabled", false)
    else $("#form0To1 textarea").prop("disabled", true);
  }),

  $("body").on("click", ".check_input", function () {
    //$(".next-btn2").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
  }),
  $(".game-phone").keyup(function () {
    let a = $(this).val().length,
      val = $(this).val();
    a >= 11 && $(".next-btn3").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
  }),
  
  $("body").on("click", ".check_input", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    $(".radio" + id + " input:radio").prop("checked") ? $(".radio" + id + " input:radio").prop("checked", !1) : $(".radio" + id + "  input:radio").prop("checked", !0)
  });
var count = 0,
  time1, time2, time3;

function SendOrder(firstq, thirdq1, thirdq2, thirdq3, thirdq4, thirdq5, thirdq6, thirdq7, game_phone, keyword, link, source) {
  $.ajax({
    type: "POST",
    url: "game.php",
    data: {
      firstq: firstq,
      secondq: secondq,
      thirdq1: thirdq1,
      thirdq2: thirdq2,
      thirdq3: thirdq3,
      thirdq4: thirdq4,
      thirdq5: thirdq5,
      thirdq6: thirdq6,
      thirdq7: thirdq7,
      thirdq8: thirdq8,
      thirdq9: thirdq9,
      game_phone: game_phone,
      keyword: keyword,
      link: link,
      source: source
    },
    success: function () {}
  })
}

$.fn.btnNextLevel0 = function () {
  congratulateBox.style.display = "block";
  document.getElementById("qBoxLevel0").style.display = "none";
  bgBlur1.style.display = "block";
  bgBlur2.style.display = "block";
};
$.fn.btnNextLevel1 = function () {
  congratulateBox.style.display = "block";
  document.getElementById("quiz1_text").style.opacity = "0";
  document.getElementById("quiz2_text").style.opacity = "1";
  document.getElementById("qBoxLevel0").style.display = "none";
  document.getElementById("btnNextCong0").style.display = "none";
  document.getElementById("btnNextCong1").style.display = "inline-block";
  bgBlur1.style.display = "block";
  bgBlur2.style.display = "block";
}
$.fn.btnNextLevel2 = function () {
  congratulateBox.style.display = "block";
  document.getElementById("quiz1_text").style.opacity = "0";
  document.getElementById("quiz2_text").style.opacity = "0";
  document.getElementById("quiz3_text").style.opacity = "1";
  document.getElementById("qBoxLevel0").style.display = "none";
  document.getElementById("btnNextCong0").style.display = "none";
  document.getElementById("btnNextCong1").style.display = "none";
  document.getElementById("btnNextCong2").style.display = " inline-block";
  bgBlur1.style.display = "block";
  bgBlur2.style.display = "block";
}
$.fn.btnNextLevel3 = function () {
  congratulateBox.style.display = "block";
  document.getElementById("quiz1_text").style.opacity = "0";
  document.getElementById("quiz2_text").style.opacity = "0";
  document.getElementById("quiz3_text").style.opacity = "0";
  document.getElementById("quiz4_text").style.opacity = "1";
  document.getElementById("qBoxLevel0").style.display = "none";
  document.getElementById("btnNextCong0").style.display = "none";
  document.getElementById("btnNextCong1").style.display = "none";
  document.getElementById("btnNextCong2").style.display = " none";
  document.getElementById("btnNextCong3").style.display = " inline-block";
  bgBlur1.style.display = "block";
  bgBlur2.style.display = "block";
}

if (
  $("body").on("click", "#btnNextLevel0", function () {
    $("#form0To1 input:radio").is(":checked") ? ($.fn.btnNextLevel0(), $(".check-radio").empty()) :
      $("#form0To1 .check-radio").empty(), $("#form0To1 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
  }),

  $("body").on("click", "#btnNextLevel1", function () {
    $("#form1To2 input:radio").is(":checked") ? ($.fn.btnNextLevel1(), $(".check-radio").empty()) :
      $("#form1To2 .check-radio").empty(), $("#form1To2 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
  }),
  $("body").on("click", "#btnNextLevel2", function () {
    $("#form2To3 input:radio").is(":checked") ? ($.fn.btnNextLevel2(), $(".check-radio").empty()) :
      $("#form2To3 .check-radio").empty(), $("#form2To3 .check-radio").append("<p>Пожалуйста, выберете один или несколько из представленных вариантов!</p>")
  }),

  $("body").on("click", "#btnNextLevel3", function () {
    if ("" == $(".game-phone").val())
      $(".game-phone").css("background", "#D66161");
    else if ($(".game-phone").inputmask("+7 (999) 999 99 99") == $(".game-phone").val()) {
      $("#form3To4 .check-radio").empty(), $("#form3To4 .check-radio").append("<p>Пожалуйста, заполните номер телефона корректно!</p>")
    }
    else if ($("#form3To4 input:radio").is(":checked")) {
      ($.fn.btnNextLevel3(), $(".check-radio").empty())
    } else {
      $("#form3To4 .check-radio").empty(), $("#form3To4 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
      let firstq = $("#form0To1 input[type=radio]:checked").val(),
        thirdq1 = $("#form2To3 .radio1 input[type=radio]:checked").val(),
        thirdq2 = $("#form2To3 .radio2 input[type=radio]:checked").val(),
        thirdq3 = $("#form2To3 .radio3 input[type=radio]:checked").val(),
        thirdq4 = $("#form2To3 .radio4 input[type=radio]:checked").val(),
        thirdq5 = $("#form2To3 .radio5 input[type=radio]:checked").val(),
        thirdq6 = $("#form2To3 .radio6 input[type=radio]:checked").val(),
        thirdq7 = $("#form2To3 .radio7 input[type=radio]:checked").val(),
        thirdq8 = $("#form2To3 .radio8 input[type=radio]:checked").val(),
        thirdq9 = $("#form2To3 .radio9 input[type=radio]:checked").val(),
        game_phone = $(".game-phone").val()
        //keyword = $(".keyword").val(),
        //link = $(".link").val(),
        //source
        ;
      SendOrder(firstq, thirdq1, thirdq2, thirdq3, thirdq4, thirdq5, thirdq6, thirdq7, thirdq8, thirdq9, game_phone/*, $(".source").val(), keyword, link*/)
    }
  }));

$("body").on("click", ".close", function () {
  $.fn.btnClose();
  $(".game-phone").val(""), $(".game-phone").css("background", "transparent");
  $("input:radio").prop("checked", !1), $(".check-radio").empty()

})
//, $("body").on("click", ".ok-btn", function() {
//   setTimeout(function() {
//     count = 0
//   }, 1e3), clearInterval(time1), clearInterval(time2), clearInterval(time3), $(".game-center").fadeOut().promise().done(function() {
//     $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
//       $(".first-q").fadeIn(), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
//     })
//   })
// });