// 헤더 관련 함수 - 완
var header = {
  // 모바일 햄버거 버튼
  hamberBtn: function() {
    $(".header__hamberMenu, .header__hamberMenu+span").on("click", function() {
      $(".header__hamberMenu").toggleClass("is-opened");
      $("nav").animate({ width: "toggle" }, 350);
    });
  },
  // 헤더 알림 버튼
  alertHeader: function() {
    $(".header__alert, .header__tooltip div").on("click", function() {
      $(".header__tooltip").toggleClass("db_im");
    });
  }
};

// 기타 함수들 - 완
var ftn = {
  window: {
    resize: function() {
      $(window).resize(function() {
        var $windowWidth = $("body").width();
        if ($windowWidth <= 1024) {
          $(".header__hamberMenu").removeClass("is-opened");
          $("nav").css("display", "none");
        } else {
          $("nav").css("display", "block");
        }
      });
    },
    // 처음 열때 해상도에 맞춰 위치 잡아주기
    open: function() {
      var $windowWidth = $("body").width();
      if ($windowWidth <= 1024) {
        // $("nav").css("margin-left", -300);
        $("nav").css("display", "none");
        // 바깥 클릭시 메뉴 숨기기
        $(".mainContent, aside").on("click", function() {
          var a = $("nav").css("display");
          if (a == "block") {
            // console.log('닫혀라');
            $("nav").animate({ width: "toggle" }, 350);
            $(".header__hamberMenu").toggleClass("is-opened");
          }
        });
      } else {
        $("nav").css("display", "block");
      }
    },
    //파일업로드
    fileUpload: function() {
      var fileTarget = $(".filebox .upload-hidden");

      fileTarget.on("change", function() {
        if (window.FileReader) {
          var filename = $(this)[0].files[0].name;
        } else {
          var filename = $(this)
            .val()
            .split("/")
            .pop()
            .split("\\")
            .pop();
        }

        $(this)
          .siblings(".upload-name")
          .val(filename);
      });
    },
    // 가계도 줌인 줌아웃 함수
    zoomin: function() {
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
      addOnWheel(text, function(e) {
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
    }
  }
};

var popup = {
  init: function() {
    popup.center(".chatt");
    popup.center(".relationSearch");
    popup.center(".myRelation");
    popup.center(".mainContent .editInfo");
    popup.center(".familyCardModify");
    popup.center(".myProfileModify");

    // 묘지
    popup.center(".pinTomb");
    popup.center(".infoTomb");
    popup.center(".registTomb");
    popup.center(".insertTomb");

    // 가족카드정보보기
    popup.center(".viewfamilyCard");
  },
  // 팝업 가운데에 뜨게하기 - 완
  center: function(content) {
    var w_Width = $(window).width();
    var w_Height = $(window).height();
    var c_width = $(content).outerWidth();
    var c_height = $(content).outerHeight();
    var winW2 = (w_Width - c_width) / 2;
    var winH2 = (w_Height - c_height) / 2;

    if (w_Width > 1024) {
      $(content).css({
        top: winH2,
        left: winW2,
        position: "absolute"
      });
    } else {
      $(content).css({
        top: winH2,
        left: winW2 + 50,
        position: "absolute"
      });
    }
  },
  // 팝업열기
  // btn = 열기위한버튼, popupName = 열리는 팝업
  open: function(btn, popupName) {
    $(document).on("click", btn, function(e) {
      e.preventDefault();
      $(popupName).toggleClass("on2");
      $(btn).toggleClass("on2");
    });
  },
  //팝업 닫기 함수. gnb검사를 어케하지.. - 미완
  closeBtn: function(contents) {
    $(document).on("click", contents, function(e) {
      e.preventDefault();
      $(this)
        .parents(".ui-draggable")
        .removeClass("on2");
      $(this)
        .parents(".ui-draggable")
        .removeClass("block");
      var className = $(this)
        .parents("div")
        .attr("class");
      console.log(className);
      if (className == "chatt__title ui-draggable-handle") {
        $(".menu")
          .children(".my_chatt")
          .removeClass("on2");
        // console.log("꺼져라");
      } else if (className == "relationSearch ui-draggable") {
        $(".menu")
          .children(".my_friend")
          .removeClass("on2");
      } else if (className == "familyCardModify ModifyPopup ui-draggable") {
        $(this)
          .parent("div")
          .css("display", "none");
        //        $('.menu').children('.my_friend').removeClass('on2');
      } else if (className == "title ui-draggable-handle") {
        $(".menu")
          .children(".editInfo")
          .removeClass("on2");
      } else {
        $(this)
          .parent("div")
          .removeClass("block");
      }
    });
  },
  // 다른사람 정보보기에서 탭부분 1- 완?
  tabBtn1: function() {
    $(".contentNav li").on("click", function() {
      var idx = $(this).index();
      $(".contentNav li")
        .removeClass("active")
        .eq(idx)
        .addClass("active");
      $(".info")
        .removeClass("block")
        .eq(idx + 1)
        .addClass("block");
    });
  },
  // 다른사람 정보보기에서 탭부분 2- 완?
  tabBtn2: function() {
    $(".tabWrap li").on("click", function() {
      var idx2 = $(this).index();
      $(".tab3 .tabitem")
        .removeClass("active")
        .eq(idx2)
        .addClass("active");
      $(".tabList")
        .removeClass("block")
        .eq(idx2)
        .addClass("block");
    });
  }
};

// 메인메뉴와 gnb메뉴 통합. 클릭시
var Menu = {
  ClickMenu
};

// gnb와 메인메뉴에서 공통으로 쓰는 클릭이벤트
function ClickMenu() {
  $(".menu li").click(function(e) {
    e.preventDefault();
    var $li_index = $(this).index();
    console.log($li_index);
    // 팝업을 제외한 메인메뉴 누를때
    // 내 가계도, 산소찾기, 가계예절
    if ($li_index == 0 || $li_index == 3 || $li_index == 4) {
      /*
     $(this).siblings("li").removeClass("on");
	 $('.menu li').eq($li_index).addClass("on");
	*/
      if ($li_index == 0) {
        window.location.replace("/web/familyTree");
      }
      if ($li_index == 3) {
        window.location.replace("/web/tomb");
      }
      if ($li_index == 4) {
        window.location.replace("/web/manner");
      }
      /*       $(this).siblings("li").removeClass("on");
      $('.menu li').eq($li_index).addClass("on");
      var $mainContent = $(".mainContent article");
      $mainContent.removeClass("block");
      $mainContent.siblings("div").removeClass("block");
      $mainContent.siblings("div").eq($li_index).addClass("block");
      $('.CalendarButton').removeClass('active');*/
    }
    // index번호가 5번일경우. gnb에선 '정보수정',메인메뉴에서는 '일정보기' 여서 조건 설정하기
    else if ($li_index == 5) {
      var $class = $(this).attr("class");
      //       console.log($class);

      if ($class == "my_calendar") {
        /*
        $('.mainContent article').removeClass('block');
        $('.calendar').addClass('block');
		*/
        $(".CalendarButton").addClass("active");
        window.location.replace("/web/schedule");
      }
    }
    // 나머지 일 경우
    else {
      console.log("팝업부분");
    }
  });
}
// 버튼 이벤트
var Btn = {
  // 칼렌더보기 버튼
  viewCaledar: function() {
    $(".CalendarButton").click(function() {
      $(this).addClass("active");
      $(".mainContent article").removeClass("block");
      $(".mainContent div").removeClass("block");
      $(".menu li").removeClass("on");
      $(".mainContent .calendar").addClass("block");
	  window.location.replace('/web/schedule');
    });
  },

  Cancle:function(cancleBtn){
	  $(cancleBtn).click(function(){
	  $(this).parents('.ui-draggable').removeClass('block');
	  });
  },
  Tomb: {
    detailVeiw: function() {
		$('.detailVeiw').click(function(){
			$('.infoTomb').toggleClass('block');
		});
    },
   registTomb:function(){
	  $('.registTombBtn').click(function(){
		$('.registTombBtn').toggleClass('block');
	  });
   },
	modifyTombInfo:function(){
		$('.modifyTombInfo').click(function(){
			$('.insertTomb').toggleClass('block');
		});
	}
  },
  myTree: {
    closeFamily_popup: function() {
      $(document).on("click", ".myTreeWrap", function(e) {
        e.stopPropagation();
        $("#text")
          .find(".familyTree_popup")
          .remove();
      });
    },
    ClickNode: function() {
      $(document).on("click", ".person", function(e) {
        e.stopImmediatePropagation();

        var cardNo = $(this).attr("data-cardno");
        var childCardNo = $(this).attr("id");

        var name = $(this)
          .children("p:nth-child(1)")
          .text();
        let htm =
          '<div class="familyTree_popup popup"><a href="#/" class="familyTree_close"></a><p class="name">' +
          name +
          '</p><ul class="clear_fix"><li><a href="#" class="add" data-cardno="' +
          cardNo +
          '" data-childcardno="' +
          childCardNo +
          '">추가</a></li><li><a href="#" class="modify" data-cardno="' +
          cardNo +
          '" data-childcardno="' +
          childCardNo +
          '" data-self="' +
          $(this).hasClass("my") +
          '">수정</a></li><li><a href="#" class="info" data-cardno="' +
          cardNo +
          '" data-childcardno="' +
          childCardNo +
          '">정보</a></li></ul></div>';

        // 삭제(닫기)
        // 같은거 클릭시 닫기
        /*      if($(this).hasClass('checked')){
          $(this).removeClass('checked');
          $(this).find('.popup').remove();
        }
		*/
        /*        else{
          $('body').find('.familyTree_popup').remove();
          $('.person').removeClass('checked');
          $(this).addClass('checked');
          $(this).append(htm);
        }*/
        if ($("body").find(".familyTree_popup").length >= 1) {
          $("body")
            .find(".popup")
            .remove();
        }
        //  생성(열기)
        else {
          // if(){
          // }
          $(this).append(htm);
        }
      });
    },
    // 추가하기
    BtnAddNode: function() {
      $(document).on("click", ".familyTree_popup .add", function(e) {
        e.stopPropagation();
        console.log("추가");

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
          '<button class="selectedAddBtn">추가</button>' +
          '<button class="">수정</button>' +
          "</div>";
        $(this)
          .closest(".person")
          .append(htm2);
        $("body")
          .find(".familyTree_popup.popup")
          .remove();
        // $(this).parent('.familyTree_popup').remove();
        $(this)
          .parents(".person")
          .removeClass("checked");
      });
    },
    // 추가,수정, 정보 중 수정
    modifyNode: function() {
      $(document).on("click", ".familyTree_popup .modify", function(e) {
        e.stopPropagation();
        $(".familyCardModify").addClass("block");
      });
    },
    // 정보보기
    infoNode: function() {
      $(document).on("click", ".familyTree_popup .info", function(e) {
        e.stopPropagation();
        $(".viewfamilyCard").addClass("block");
      });
    },
    // 추가할 가족 선택
    selectAddFamily: function() {
      $(document).on("click", ".popup2 label", function(e) {
        e.stopPropagation();
        console.log("추가할 가족 선택");
      });
    },
    selectModifyFmaily: function() {},
    AddnodeEvent: function() {}
  }
};
