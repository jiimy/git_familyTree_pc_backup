// 헤더 함수.
// 024해상도 이하로 떨어졌을시 햄버거버튼 이벤트
header.hamberBtn();
// 알림버튼 이벤트
header.alertHeader();

// 기본 정의함수.
// 윈도우 리사이즈시 레이아웃 변경.
ftn.window.resize();
// 윈도우 열렸을시 해상도 판별
ftn.window.open();

// 팝업
// 센터로 열게하기
popup.init();
// 정보보기 중 탭1
popup.tabBtn1();
// 정보보기 중 탭2
popup.tabBtn2();
// 메뉴에서 팝업 열기
popup.open('.my_friend','.relationSearch');
popup.open('.my_chatt','.chatt');
popup.open('.editInfo','.myProfileModify');
// 닫기
popup.closeBtn('.popup__close');

// 메뉴 이벤트.
// main메뉴
Menu.ClickMenu();


// 버튼 이벤트.
// 오른쪽 사이드의 칼렌더 버튼 클릭 이벤트
Btn.viewCaledar();
// 버튼 이벤트중 가계도 관련 이벤트
// 노드 클릭시 팝업 열리기.
Btn.myTree.ClickNode();
Btn.Tomb.detailVeiw();
// 노드 추가
Btn.myTree.BtnAddNode();
// 노드 정보 수정
Btn.myTree.modifyNode();
// 노드 정보 보기
Btn.myTree.infoNode();
// 팝업 닫기
Btn.myTree.closeFamily_popup();
// 노드 추가 중 추가할 노드 선택
Btn.myTree.selectAddFamily();
// 노드 추가 중 수정할 노드 선택
Btn.myTree.selectModifyFmaily();


Btn.Tomb.detailView();