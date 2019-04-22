// function afterReveal() {
//   var currentCount = 1,
//     doStuff = function() {
//       $(".queue[data-id=" + currentCount + "]").animate({
//         opacity: 1
//       }, 50).promise().done(function() {
//         currentCount++, doStuff(), 45 == currentCount && ($(".first-q .step2-gif").hide(), $(".first-q .step3-gif").show())
//       })
//     };
//   ! function loopingFunction() {
//     doStuff()
//   }()
// }

$("body").on("click", ".cont-label", function() { // Вопросы квиз 
  let form0To1 = $("#form0To1 input[type=radio]:checked").val(),
    form1To2 = $("#form1To2 input[type=radio]:checked").val(),
    form2To3 = $("#form2To3 input[type=radio]:checked").val();
  //$(".btnNextLevel0").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
}), $("body").on("click", ".check_input", function() {
  //$(".next-btn2").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
}), $(".game-phone").keyup(function() {
  let a = $(this).val().length,
    val = $(this).val();
  a >= 11 && $(".next-btn3").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
}), 
// $("body").on("click", "#start-btn, .white", function() { //  Начало квиза 
//   $(".fadeOut-block").fadeOut().promise().done(function() {
//     $(".game-center,.next-btn, .close-btn").fadeIn(), $(".first-q .step2-gif").show(), setTimeout(function() {
//       afterReveal()
//     }, 300)
//   }), count = 0
// }), 
$("body").on("click", ".check_input", function(e) {
  e.preventDefault();
  var id = $(this).data("id");
  $(".radio" + id + " input:radio").prop("checked") ? $(".radio" + id + "  input:radio").prop("checked", !1) : $(".radio" + id + "  input:radio").prop("checked", !0)
});
var count = 0,
  time1, time2, time3;

// function afterReveal2() {
//   var currentCount2 = 1,
//     doStuff2 = function() {
//       $(".queue2[data-id=" + currentCount2 + "]").animate({
//         opacity: 1
//       }, 50).promise().done(function() {
//         currentCount2++, doStuff2(), 45 == currentCount2 && ($(".second-q .step2-gif").hide(), $(".second-q .step3-gif").show())
//       })
//     };
//   ! function loopingFunction() {
//     doStuff2()
//   }()
// }

// function afterReveal3() {
//   var currentCount3 = 1,
//     doStuff3 = function() {
//       $(".queue3[data-id=" + currentCount3 + "]").animate({
//         opacity: 1
//       }, 100).promise().done(function() {
//         currentCount3++, doStuff3(), 39 == currentCount3 && ($(".third-q .step2-gif").hide(), $(".third-q .step3-gif").show())
//       })
//     };
//   ! function loopingFunction() {
//     doStuff3()
//   }()
// }

// function afterReveal4() {
//   var currentCount4 = 1,
//     doStuff4 = function() {
//       $(".queue4[data-id=" + currentCount4 + "]").animate({
//         opacity: 1
//       }, 100).promise().done(function() {
//         currentCount4++, doStuff4(), 31 == currentCount4 && ($(".last-q .step4-gif").hide(), $(".last-q .step3-gif").show(), setTimeout(function() {
//           $(".manager").animate({
//             opacity: 1
//           }, 1e3)
//         }, 500))
//       })
//     };
//   ! function loopingFunction() {
//     doStuff4()
//   }()
// }

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
    success: function() {}
  })
}
if (
  $("body").on("click", "#btnNextLevel0", function() { //переход к второму вопросу
    // $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide(), $(".quiz1 input:radio").is(":checked") ? ($(".next-btn").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".check-radio").empty(), $("#percent33").css("top", "58%"), $("#percent33").css("width", "75%"), $(".first-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
    //   $(".second-q").addClass("animated slideInLeft").fadeIn(), $(".first-q").removeClass("slideOutRight")
    // }), time1 = setInterval(function() {
    //   count < 34 && ($(".percent").empty().append(count + "%"), count++)
    // }, 35), setTimeout(function() {
    //   afterReveal2()
    // }, 1e3)) : 
    
    // (
      $("#form0To1 .check-radio").empty(), $("#form0To1 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
      // )
  }), 
  
  $("body").on("click", "#btnNextLevel1", function() {
    // $(".third-q .step2-gif").show(), $(".third-q .step3-gif").hide(), 
    //$(".quiz2 input:radio").is(":checked") ? ($(".next-btn2, .back-btn1").hide(), 
    //$(".next-btn3, .back-btn2, .close-btn").show(), $("#percent33").css("display", "none"), 
    //$("#percent66").fadeIn(0).promise().done(function() {
    //   $("#percent66").css("top", "51%"), $("#percent66").css("width", "85%")
    // }), $(".second-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
    //   $(".third-q").addClass("animated slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight")
    // }), time2 = setInterval(function() {
    //   count < 67 && ($(".percent").empty().append(count + "%"), count++)
    // }, 35), setTimeout(function() {
    //   afterReveal3()
    // }, 1e3)) : (
      $("#form1To2 .check-radio").empty(), $("#form1To2 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
      // )
  }), 
  $("body").on("click", "#btnNextLevel2", function() {
    // $(".third-q .step2-gif").show(), $(".third-q .step3-gif").hide(), $(".quiz2 input:radio").is(":checked") ? ($(".next-btn2, .back-btn1").hide(), $(".next-btn3, .back-btn2, .close-btn").show(), $("#percent33").css("display", "none"), $("#percent66").fadeIn(0).promise().done(function() {
    //   $("#percent66").css("top", "51%"), $("#percent66").css("width", "85%")
    // }), $(".second-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
    //   $(".third-q").addClass("animated slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight")
    // }), time2 = setInterval(function() {
    //   count < 67 && ($(".percent").empty().append(count + "%"), count++)
    // }, 35), setTimeout(function() {
    //   afterReveal3()
    // }, 1e3)) : (
      $("#form2To3 .check-radio").empty(), $("#form2To3 .check-radio").append("<p>Пожалуйста, выберете один из представленных вариантов!</p>")
    // )
  }), 
  
  $("body").on("click", "#btnNextLevel3", function() {
    let phone;
    if ("" == $(".game-phone").val()) 
    $(".game-phone").css("background", "#D66161");
    else {
      // $(".next-btn3, .next-btn, .back-btn2, .close-btn").hide(), $(".ok-btn, .step4-gif").show(), $("#percent66").fadeOut().promise().done(function() {
      //   $("#percent100").fadeIn()
      // }), 
      // $(".third-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
      //   $(".last-q").addClass("animated slideInLeft").fadeIn()
      // }), 
      
      // time3 = setInterval(function() {
      //   count < 101 && ($(".percent").empty().append(count + "%"), count++)
      // }, 35), setTimeout(function() {
      //   afterReveal4()
      // }, 1e3);
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
        game_phone = $(".game-phone").val(),
        keyword = $(".keyword").val(),
        link = $(".link").val(),
        source;
      SendOrder(firstq, thirdq1, thirdq2, thirdq3, thirdq4, thirdq5, thirdq6, thirdq7, thirdq8, thirdq9, game_phone, $(".source").val(), keyword, link)
    }
  }));
  // $(document).ready(function () {
  //   $(".game-phone")
  //       .inputmask("+7 (999) 999 99 99");
  // })

  function () {
    $(".game-phone")
        .inputmask("+7 (999) 999 99 99");
  }
  
  // , $("body").on("click", ".back-btn1", function() {
  //   $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".second-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
  //     $(".first-q").addClass("slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight"), $(".next-btn2, .back-btn1").hide(), $(".next-btn, .close-btn").show(), $(".first-q .step2-gif").show(), $(".first-q .step3-gif").hide()
  //   })
  // }), $("body").on("click", ".back-btn2", function() {
  //   count = 66, $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".third-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
  //     $(".second-q").addClass("slideInLeft").fadeIn(), $(".third-q").removeClass("slideOutRight"), $(".next-btn3, .back-btn2").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide()
  //   })
  // }), $("body").on("click", ".close-btn", function() {
  //   setTimeout(function() {
  //     count = 0
  //   }, 1e3), clearInterval(time1), clearInterval(time2), clearInterval(time3), $(".game-center").fadeOut().promise().done(function() {
  //     $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
  //       $(".first-q").fadeIn(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
  //     })
  //   })
  // }), $("body").on("click", ".ok-btn", function() {
  //   setTimeout(function() {
  //     count = 0
  //   }, 1e3), clearInterval(time1), clearInterval(time2), clearInterval(time3), $(".game-center").fadeOut().promise().done(function() {
  //     $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
  //       $(".first-q").fadeIn(), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
  //     })
  //   })
  // });