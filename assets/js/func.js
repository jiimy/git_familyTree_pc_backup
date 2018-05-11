// 헤더 관련 함수 - 완
var header = {
  // 모바일 햄버거 버튼
  hamberBtn: function () {
    $(".header__hamberMenu, .header__hamberMenu+span").on("click", function () {
      $(".header__hamberMenu").toggleClass("is-opened");
      $("nav").animate({ width: "toggle" }, 350);
    });
  },
  // 헤더 알림 버튼
  alertHeader: function () {
    $(".header__alert, .header__tooltip div").on("click", function () {
      $(".header__tooltip").toggleClass("db_im");
    });
  }
}

// 기타 함수들 - 완
var ftn = {
  window: {
    resize: function () {
      $(window).resize(function () {
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
    open: function () {
      var $windowWidth = $("body").width();
      if ($windowWidth <= 1024) {
        // $("nav").css("margin-left", -300);
        $("nav").css("display", "none");
        // 바깥 클릭시 메뉴 숨기기
        $(".mainContent, aside").on("click", function () {
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
    }
  }
};


var popup = {
  init: function () {
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
  center: function (content) {
    var w_Width = $(window).width();
    var w_Height = $(window).height();
    var c_width = $(content).outerWidth();
    var c_height = $(content).outerHeight();
    var winW2 = (w_Width - c_width) / 2;
    var winH2 = (w_Height - c_height) / 2;

    if (w_Width > 1024) {
      $(content).css({
        top: winH2,
        left: winW2
      });
    } else {
      $(content).css({
        top: winH2,
        left: winW2 + 50
      });
    }
  },
  // 팝업열기
  // btn = 열기위한버튼, popupName = 열리는 팝업
  open: function (btn, popupName) {
    $(document).on('click', btn, function (e) {
      e.preventDefault();
      $(popupName).toggleClass('block');
      // if (btn.attr('class') == 'my_friend') {
      //   $('.my_friend').addClass('on2');
      // }
    });
  },
  //팝업 닫기 함수. gnb검사를 어케하지.. - 미완
  closeBtn: function (contents) {
    $(document).on("click", contents, function (e) {
      e.preventDefault();
      console.log('팝업닫기');
      $(this).parents(".ui-draggable").removeClass('block');
      var className = $(this).parents('div').attr('class');
      console.log(className);
      if(className == 'chatt__title ui-draggable-handle'){
        console.log('꺼져라');
        $('.menuList').children('.my_chatt').removeClass('on2');
      }
    });
  },
  // 다른사람 정보보기에서 탭부분 1- 완?
  tabBtn1: function () {
    $(".contentNav li").on("click", function () {
      var idx = $(this).index();
      $(".contentNav li")
        .removeClass("active")
        .eq(idx)
        .addClass("active");
      $(".info")
        .removeClass("block")
        .eq(idx)
        .addClass("block");
    });
  },
  // 다른사람 정보보기에서 탭부분 2- 완?
  tabBtn2: function () {
    $(".tabWrap li").on("click", function () {
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
}

var mainMenu = {
  click: function () {
    console.log('메인메뉴 클릭했을때');
  }
}
var gnbMenu = {
  click:function(){
    $('.menuList li').click(function(e){
      e.preventDefault();
      var $li_index = $(this).index();
      var a = $('.menuList li').eq($li_index);
      
      if($li_index == 0 || $li_index == 3 || $li_index == 5){
        $(this).siblings('li').removeClass('on');
        $(this).addClass('on');
      }
      else{
        $(this).toggleClass('on2');
      }
    })
  }
}