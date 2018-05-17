$(function () {
  "use strict";

  // $("#calender").datepicker();

  // 메인에서 메뉴 클릭시
  // $(".myTreeMenu li").click(function () {
  //   let index = $(this)
  //     .closest("li")
  //     .index();
  //   // 팝업들은 on2. 깔리는건 on
  //   // 팝업들은 토글
  //   // 인맥찾기, 나의 인맥, 채팅, 정보 수정
  //   console.log("클릭시 메뉴 index 번호 : " + index);
  //   if (index == 1 || index == 2) {
  //     $(this).toggleClass("on2");
  //     $(".mainContent article")
  //       .siblings("div")
  //       .eq(index)
  //       .toggleClass("on2");
  //     $(".menuList li")
  //       .eq(index)
  //       .toggleClass("on2");
  //   } else if (index == 5) {
  //     $(".mainContent article")
  //       .siblings("div")
  //       .removeClass("block");
  //     $(".mainContent article").removeClass("block");
  //     $(".mainContent article")
  //       .siblings("div")
  //       .eq(index + 1)
  //       .addClass("block");
  //   } else {
  //     if (index == 0) {
  //       $(".mainContent article").removeClass("block");
  //       $("aside .sideMenu").removeClass("block");
  //       $(".family").addClass("block");
  //       $(".menuList li")
  //         .eq(index)
  //         .addClass("block");
  //       $(".mainContent article")
  //         .siblings("div")
  //         .eq(index)
  //         .toggleClass("block");
  //       $(".button").addClass("block");
  //     } else {
  //       $(".alertNewWrap").addClass("block");
  //       $("aside .sideMenu").removeClass("block");
  //       $(".button").removeClass("block");

  //       // 팝업이 아닌것들
  //       $(".myTreeMenu li")
  //         .eq(0)
  //         .removeClass("block");
  //       $(".menuList li")
  //         .eq(0)
  //         .removeClass("block");
  //       $(".menuList li")
  //         .eq(4)
  //         .removeClass("block");
  //       $(".menuList li")
  //         .eq(5)
  //         .removeClass("block");
  //       $(".menuList li")
  //         .eq(index)
  //         .addClass("block");
  //       $(".mainContent article").hide();
  //       $(".mainContent article")
  //         .siblings("div")
  //         .eq(index)
  //         .toggleClass("block");
  //     }
  //   }
  // });

  // lnb메뉴 이미지 교체
  // $(".menuList li a").click(function (e) {
  //   e.preventDefault();
  //   var menulist = $(".menuList li").eq(0);
  //   var $li_index = $(this)
  //     .closest("li")
  //     .index();
  //   // console.log($li_index);
  //   // 6번째 이하일때. 내 가계도 ~ 정보 수정
  //   if ($li_index <= 5) {
  //     // 팝업들은 on2. 깔리는건 on
  //     // 인맥찾기, 나의 인맥, 채팅, 정보 수정
  //     if ($li_index == 1 || $li_index == 2 || $li_index == 5) {
  //       console.log($li_index);
  //       if ($li_index == 1 || $li_index == 2) {
  //         $(this)
  //           .closest("li")
  //           .toggleClass("on2");
  //         $(".mainContent>div")
  //           .eq($li_index)
  //           .toggleClass("on2");
  //         $(".myTreeMenu li")
  //           .eq($li_index)
  //           .toggleClass("on2");
  //       }
  //       if ($li_index == 5) {
  //         $(".familyCardModify").toggleClass("block");
  //       }
  //     }
  //     // 내 가계도, 산소 찾기, 가계 예절
  //     else {
  //       $(".CalendarButton").removeClass("active");
  //       if ($li_index == 0) {
  //         console.log("가계도 클릭");
  //         $("article").removeClass("block");
  //         $(".mainContent>div")
  //           .removeClass("block")
  //           .eq($li_index)
  //           .addClass("block");
  //         $(".mainContent")
  //           .children(".calendar")
  //           .removeClass("block");
  //         $(this)
  //           .closest("li")
  //           .siblings("li")
  //           .removeClass("block");
  //         $(this)
  //           .closest("li")
  //           .addClass("block");
  //         $("aside .sideMenu").removeClass("block");
  //         $(".family").addClass("block");
  //         $(".button").addClass("block");
  //         $(".option").addClass("block");
  //       } else if ($li_index == 3) {
  //         list($li_index);
  //         $("aside .sideMenu").removeClass("block");
  //         $(".searchTomb").addClass("block");
  //       } else {
  //         list($li_index);
  //       }
  //     }
  //     if (menulist.hasClass("block")) {
  //     }
  //   }

  //   // return false;
  // });

  // function list(li_index) {
  //   var $li_index;
  //   $li_index = li_index;
  //   $("article").removeClass("block");
  //   $("aside .sideMenu").removeClass("block");
  //   $(".button").removeClass("block");
  //   $(".option").removeClass("block");
  //   $(".alertNewWrap").addClass("block");
  //   $(".mainContent>div")
  //     .removeClass("block")
  //     .eq($li_index)
  //     .addClass("block");
  //   $(this)
  //     .closest("li")
  //     .siblings("li")
  //     .removeClass("block");
  //   $(this)
  //     .closest("li")
  //     .addClass("block");
  //   if ($(".menuList li:nth-child(3)").hasClass("block")) {
  //     $("article").hide();
  //     // 0,4,5번 제외하기
  //     $(".menuList li")
  //       .eq(0)
  //       .removeClass("block");
  //     $(".menuList li")
  //       .eq(3)
  //       .removeClass("block");
  //     $(".menuList li")
  //       .eq(4)
  //       .removeClass("block");
  //     $(this)
  //       .closest("li")
  //       .addClass("block");
  //   } else {
  //     $("article").hide();
  //     $(".menuList li")
  //       .eq(0)
  //       .removeClass("block");
  //     $(".menuList li")
  //       .eq(3)
  //       .removeClass("block");
  //     $(".menuList li")
  //       .eq(4)
  //       .removeClass("block");
  //     $(this)
  //       .closest("li")
  //       .addClass("block");
  //   }
  // }
  // 채팅 탭
  // $(".chatt__tab li").click(function () {
  //   var idx = $(this).index();
  //   cha(idx);
  //   // 탭변경(탭의 css);
  //   $(".chatt__tab li")
  //     .removeClass("block")
  //     .eq(idx)
  //     .addClass("block");
  //   $(".chatt__tablist")
  //     .removeClass("active")
  //     .eq(cha(idx))
  //     .addClass("active");

  //   var chatt__tablist = document.querySelectorAll("chatt__tablist");
  //   for (var i = 0; i < chatt__tablist.length; i++) {
  //     $(this)
  //       .removeClass("block")
  //       .eq(idx)
  //       .addClass("block");
  //   }
  // });


  // 내 정보 수정 - 이미지 변경부분
  // $(".profile__imgUploadfile").click(function () {
  //   $(this)
  //     .siblings(".popup")
  //     .toggleClass("db_im");
  // });

  // 달력보기
  // $(".CalendarButton").click(function () {
  //   // console.log('달력 클릭');
  //   var a = $(".contentWrap section");
  //   a.children().removeClass("block");
  //   a.children(".calendar").addClass("block");
  //   $(this).addClass("active");
  //   $(".menuList li").removeClass("block");
  //   $(".sideMenu").removeClass("block");
  //   $(".calendarSide").addClass("block");
  // });

  // 패밀리카드. 정보 보기
  // var familyCardView = {
  //   // 메인 탭1
  //   tab1: function () {
  //     $(".contentNav li").on("click", function () {
  //       var idx = $(this).index();
  //       $(".contentNav li")
  //         .removeClass("active")
  //         .eq(idx)
  //         .addClass("active");
  //       $(".info")
  //         .removeClass("block")
  //         .eq(idx)
  //         .addClass("block");
  //     });
  //   },
  //   // 메인 탭3번째의 서브탭
  //   tab3_1: function () {
  //     $(".tabWrap li").on("click", function () {
  //       var idx2 = $(this).index();
  //       $(".tab3 .tabitem")
  //         .removeClass("active")
  //         .eq(idx2)
  //         .addClass("active");
  //       $(".tabList")
  //         .removeClass("block")
  //         .eq(idx2)
  //         .addClass("block");
  //     });
  //   }
  // };
  // familyCardView.tab1();
  // familyCardView.tab3_1();

  //가족카드 보기 기본정보, 추가정보, 사진/영상 탭 부분

  // ****************************************** modify__popup ******************************************

  // 한개의 버튼 토글
  // toggleBtn(".subimg", ".uploadingImg");
  // function toggleBtn(button, toggleBtn) {
  //   $(document).on("click", button, function () {
  //     $(this)
  //       .parent()
  //       .children(toggleBtn)
  //       .toggleClass("block");
  //   });
  // }

  // ****************************************** 가계도 팝업 ******************************************

  // 각각의 사람을 눌렀을시 나오는 팝업
  $(document).on("click", ".person", function (e) {
    e.stopImmediatePropagation();
    var name = $(this)
      .children("p:nth-child(1)")
      .text();
    // 추가, 수정, 가족카드
    let htm =
      '<div class="familyTree_popup popup"><a href="#/" class="familyTree_close"></a><p class="name">' +
      name +
      '</p><ul class="clear_fix"><li class="add"><a href="#">추가</a></li><li class="modify"><a href="#">수정</a></li><li class="info"><a href="#">정보</a></li></ul></div>';

    // 삭제(닫기)
    if ($("body").find(".familyTree_popup").length >= 1) {
      $("body")
        .find(".popup")
        .remove();
    }
    //  생성(열기)
    else {
      // if(){
      // }
      console.log("퍼슨 생성");
      $(this).append(htm);
    }
  });

  //  가계도 사람 추가 기능. '추가' 눌렀을 시
  $(document).on("click", ".add", function () {
    var htm2 =
      '<div class="familyTree_popup popup2"><a href="#/" class="familyTree_close"></a><p class="name">가계도에 추가 할 가족을 선택합니다.</p>' +
      '<div class="radio_box clear_fix">' +
      '<input type="radio" name="family" id="father"/><label For="father">아버지</label>' +
      '<input type="radio" name="family" id="mather"/><label For="mather">어머니</label>' +
      '<input type="radio" name="family" id="wife"/><label For="wife">배우자</label>' +
      '<input type="radio" name="family" id="m_OBrother"/><label For="m_OBrother">형</label>' +
      '<input type="radio" name="family" id="w_OBrother"/><label For="w_OBrother">오빠</label>' +
      '<input type="radio" name="family" id="m_OSister"/><label For="m_OSister">누나</label>' +
      '<input type="radio" name="family" id="w_OSister"/><label For="w_OSister">언니</label>' +
      '<input type="radio" name="family" id="m_YBrother"/><label For="m_YBrother">남동생</label>' +
      '<input type="radio" name="family" id="w_YSister"/><label For="w_YSister">여동생</label>' +
      '<input type="radio" name="family" id="son"/><label For="son">아들</label>' +
      '<input type="radio" name="family" id="daughter"/><label For="daughter">딸</label>' +
      '<input type="radio" name="family" id="delete"/><label For="delete">삭제</label>' +
      "</div>" +
      "<button>추가</button>" +
      "<button>수정</button>" +
      "</div>";
    $(this)
      .closest(".person")
      .append(htm2);
  });

  // 가게도 사람 수정 기능. '수정' 눌렀을 시
  // $(document).on('click','modify',function(){
  //   var htm3 =

  // })
});

// *--------------------------------------------- function 문 ---------------------------------------------------------------*


// 가계도 팝업 닫기
// familyTree_popup_close();
// function familyTree_popup_close() {
//   $(document).on("click", ".familyTree_close", function () {
//     console.log("닫기 버튼 눌렀을시 : 삭제");
//     $(this)
//       .parent(".familyTree_popup")
//       .remove();
//   });
// }

// 이름에 故가 들어갈시 흑백처리하기
imgColored();
function imgColored() { }

// 팝업 뜰시 중앙정렬
// function center(content) {
//   var w_Width = $(window).width();
//   var w_Height = $(window).height();
//   var c_width = $(content).outerWidth();
//   var c_height = $(content).outerHeight();
//   var winW2 = (w_Width - c_width) / 2;
//   var winH2 = (w_Height - c_height) / 2;

//   if (w_Width > 1024) {
//     $(content).css({
//       top: winH2,
//       left: winW2
//     });
//   } else {
//     $(content).css({
//       top: winH2,
//       left: winW2 + 50
//     });
//   }
// }

// 가계도 줌인 줌아웃 하는 자바스크립트 함수
function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ("onwheel" in document) {
      // IE9+, FF17+
      elem.addEventListener("wheel", handler);
    } else if ("onmousewheel" in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else {
    // IE8-
    text.attachEvent("onmousewheel", handler);
  }
}
var scale = 1;
addOnWheel(text, function (e) {
  var delta = e.deltaY || e.detail || e.wheelDelta;
  // console.log(scale);
  // console.log(delta);
  if (delta > 0) {
    scale += 0.05;
    if (scale >= 1.5) {
      scale = 1.5;
    }
  } else scale -= 0.05;
  if (scale <= 0.6) {
    scale = 0.6;
  }
  text.style.transform = text.style.WebkitTransform = text.style.MsTransform =
    "scale(" + scale + ")";
  e.preventDefault();
});
// idx가 반대라 반대로 바꾸는 함수 - 보완이 필요하다. 0과 1뿐만 아니라 012면 210으로 나오는걸 추후에 연습해보자
function cha(idx) {
  if (idx == "0") {
    idx = 1;
  } else {
    idx = 0;
  }
  return idx;
}

// 수동으로 움직일시
// $(window).resize(function () {
//   var $windowWidth = $("body").width();
//   if ($windowWidth <= 1024) {
//     $(".header__hamberMenu").removeClass("is-opened");
//     $("nav").css("display", "none");
//   } else {
//     $("nav").css("display", "block");
//   }
// });
