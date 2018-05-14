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
  open: function(btn, popupName) {
    $(document).on("click", btn, function(e) {
      e.preventDefault();
      $(popupName).toggleClass("block");
      $(btn).toggleClass('on2');
    });
  },
  //팝업 닫기 함수. gnb검사를 어케하지.. - 미완
  closeBtn: function(contents) {
    $(document).on("click", contents, function(e) {
      e.preventDefault();
      console.log("팝업닫기");
      $(this)
        .parents(".ui-draggable")
        .removeClass("block");
      var className = $(this)
        .parents("div")
        .attr("class");
      console.log(className);
      if (className == "chatt__title ui-draggable-handle") {
        console.log("꺼져라");
        $(".menuList")
          .children(".my_chatt")
          .removeClass("on2");
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
        .eq(idx)
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

// 메인메뉴 클릭시
var mainMenu = {
  click: function() {
    ClickMenu();
  }
};
// gnb메뉴 클릭시
var gnbMenu = {
  click: function() {
    ClickMenu();
  }
};
// gnb와 메인메뉴에서 공통으로 쓰는 클릭이벤트
function ClickMenu() {
  $(".menu li").click(function(e) {
    e.preventDefault();
    var $li_index = $(this).index();
    // 팝업을 제외한 메인메뉴 누를때
    // 내 가계도, 산소찾기, 가계예절
    if ($li_index == 0 || $li_index == 3 || $li_index == 4) {
      $(this).siblings("li").removeClass("on");
      console.log($li_index);
      $('.menu li').eq($li_index).addClass("on");
      var $mainContent = $(".mainContent article");
      $mainContent.removeClass("block");
      $mainContent.siblings("div").removeClass("block");
      $mainContent.siblings("div").eq($li_index).addClass("block");
      $('.CalendarButton').removeClass('active');
    }
    // index번호가 5번일경우. gnb에선 '정보수정',메인메뉴에서는 '일정보기' 여서 조건 설정하기
    if ($li_index == 5) {
      var $class = $(this).attr('class');
      // console.log($class);
      if($class == 'editInfo none ui-draggable'){
        $('.myProfileModify').toggleClass('block');
      }
      if($class == 'my_calendar'){
        $('.mainContent article').removeClass('block');
        $('.calendar').addClass('block');
      }
    }
  });
}
// 버튼 이벤트
var Btn = {
  // 칼렌더보기 버튼
  viewCaledar :function(){
    $('.CalendarButton').click(function(){
      $(this).addClass('active');
      $('.mainContent article').removeClass('block');
      $('.mainContent div').removeClass('block');
      $('.menu li').removeClass('on');
      $('.mainContent .calendar').addClass('block');
    });
  },
  myTree:{
    ClickNode:function(){
      $(document).on('click','.person',function(e){
        e.stopImmediatePropagation();
        console.log('노드 클릭');
        var name = $(this).children('p:nth-child(1)').text();
        let htm =
        '<div class="familyTree_popup popup"><a href="#/" class="familyTree_close"></a><p class="name">' +
        name +
        '</p><ul class="clear_fix"><li><a href="#" class="add">추가</a></li><li><a href="#" class="modify">수정</a></li><li><a href="#">정보</a></li></ul></div>';

        // 삭제(닫기)
        if($(this).hasClass('checked')){
          $(this).removeClass('checked');
          $(this).find('.popup').remove();
        }
        else{
          $('body').find('.familyTree_popup').remove();
          $('.person').removeClass('checked');
          $(this).addClass('checked');
          $(this).append(htm);
        }
      });
    },
    addNode:function(){
      $(doucment).on('click','.familyTree_popup .add'),function(e){
        e.stopImmediatePropagation();
        console.log('추가 클릭');
      }
    },
    modifyNode:function(){
      $(doucment).on('click','.familyTree_popup .modify'),function(e){
        console.log('수정 클릭');
      }
    },
    infoNode:function(){
      $(doucment).on('click','.familyTree_popup .info'),function(e){
        console.log('정보보기 클릭');
      }
    }
  }
}