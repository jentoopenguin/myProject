$(function(){
    var zoomControl = "";
    /**
        1. 광고영역 제거
        class btn_close 태그가 클릭되면
        id adsLayer 태그가 위로 올라가면서 숨겨진다
    */
    
    $(".btn_close").click(function(){
        $("#adsLayer").slideUp();
    });


    /*
        2. 이미지갤러리(3초마다 갤러리 이동)
    */
    setInterval(function() {
        // (1) 도트 레이아웃의 on 클래스를 이용하여 현재 보여지는 이미지가 몇번째인지 알수 있다.
        //    이 값을 이용하여 이미지 갤러리를 구현
        var currentIndex = $(".sm_mv_slide > dt > a").index($(".sm_mv_slide > dt > a.on"));
        // console.log(currentIndex);
        // (2) class sm_mv_bg 태그의 갯수(이미지 갯수)를 구하여 변수에 담는다
        var len = $(".sm_mv_bg").length;
        // console.log(len);
        // (3) 레이아웃의 넓이만큼 이동해야 하기 때문에 class sm_mv_slide 태그의 넓이 값을 구하여 변수에 담는다
        var w = $(".sm_mv_slide").css("width");

        // (4)다음 인덱스 구하는 공식 : ((currentIndex) + 1) % (2)에서 구한 변수의 결과를 새로운변수에 담는다
        //   (ex : var nextIndex = (currentIndex + 1) % (2)에서 구한 변수)
        var nextIndex = (currentIndex + 1) % len;
        // console.log(nextIndex);

          // 5. class sm_mv태그의 자손 dd 태그중 (1)번째 태그에 애니메이션 효과를 준다
          // 애니메이션 속성 = left : - (3) 만큼 이동시킨다
          // 동작시간 0.5초
        $(".sm_mv dd").eq(currentIndex).animate({
              left : -w
          }, 500);

          // 6. class sm_mv 태그의 자손 dd 태그 중 (4)번째 태그에 left 스타일 속성값을 이미지 넓이만큼 이동시킨다 
        $(".sm_mv dd").eq(nextIndex).css("left", w);
          // 7. class sm_mv 태그의 자손 dd 태그 중 (4)번째 태그를 보여준다
        $(".sm_mv dd").eq(nextIndex).show();
          // 8. class sm_mv 태그의 자손 dd 태그 중 (4)번째 태그에 애니메이션 효과를 준다
          // 애니메이션 속성 = left : 0 만큼 이동시킨다
          // 동작시간 0.5초
        $(".sm_mv dd").eq(nextIndex).animate({
            left : 0
        }, 500);


          // 9. class  sm_mv_slide 태그의  자손 dt태그의 자손 a 태그를 셀렉터로 잡아서 on 클래스를 제거한다
        $(".sm_mv_slide dt a").removeClass("on");

          // 10 class  sm_mv_slide 태그의  자손 dt태그의 (4) 번째 태그의 자손 a 태그를 셀렉터로 잡아서 on 클래스를 추가한다
        $(".sm_mv_slide dt").eq(nextIndex).find("a").addClass("on");
    }, 3000);

    /**
        3. 탭바 클릭
        클래스 tablinks 클릭이 되면,
        ※ a 태그의 버튼이므로 a태그의 기본기능을 막아줘야한다(상단으로 올라가는 현상) =
           hint : 해당 기능은 e.preventDefault() 함수를 사용하면 막을 수 있다.

        (1) 클래스 tablinks 태그들을 active 클래스를 제거
        (2) 이벤트 자기자신에 active 클래스 추가

        (3) 클릭된 자신의 index번호를 구한다음 변수에 담는다.
            - 첫번째를 클릭했으면 0
            - 두번째를 클릭했으면 1이 나오게..
        (4) 클래스 tabcontent 태그들을 숨긴다
        (5) 클래스 tabcontent 태그들 중 (3) 에서 구한 인덱스번호와 일치하는 태그를 보여준다
    */

    $(".tablinks").click(function(e){
        $(".tablinks").removeClass("active")
        $(this).addClass("active")
        var i = $(".tablinks").index(this);  //모든 버전 인덱스 구하는 법
        $(".tabcontent").css("display", "none");				
        $(".tabcontent").eq(i).show();
        // $("변경하려는 대상").css("속성","속성값"); 

         


    })
    //클릭 이벤트 여러개 하면 문제가 됨

    /**
        4. 상위이동
        클래스 iconbutton을 클릭하면
            (1) 셀렉터(html,body) 에 애니메이션 함수를 동작시긴다
                스크롤이 최상단으로 이동 할수 있게 속성을 적용해주며, 실행시간은 0.5초로 정의
    */
    $(".iconbutton").click(function(){
        $("html, body").animate({scrollTop: "0"}, 500); //html body 셀렉터 안에는 태그들은 문자형태로
    })
    

    /*
        5. 첫번째 탭 기능구현(더보기)
            (1) tag1, tag2, tag3, tag4 변수에 담긴 문자형 html 태그를 클릭된 자기자신 이전에 삽입한다.
            (2) 자기자신을 숨긴다
    */
    $(".view_more").click(function(){
        
        var tag1 = '<li class="item">'+
                         '<div class="thumb_flip">'+
                             '<div class="front"><img class="img" src="http://image2.megabox.co.kr/mop/poster/2019/52/251523-8FED-46E1-8AB6-8C4D387924AB.large.jpg" /></div>'+
                             '<div class="back">'+
                                '<div class="star-rating2" style="float:left;">'+
                                    '<span style="width:20%;"></span>'+
                                '</div>'+
                                '<p >재밌어요</p>'+
                                '<span class="bg"></span>'+
                            '</div>'+
                         '</div>'+
                         '<div class="title" title="존 윅 3: 파라벨룸"><h3>존 윅 3: 파라벨룸</h3></div>'+
                         '<div class="infoBtn" >'+
                             '<a  class="btn detail_btn" href="#" >상세정보</a>'+
                             '<a  class="btn reserveBtn" href="#">예매하기</a>'+
                             '<input type="hidden" class="openday" value="2019.06.26" />'+
                             '<input type="hidden" class="director" value="채드 스타헬스키" />'+
                             '<input type="hidden" class="actors" value="키아누 리브스, 할리 베리, 로렌스 피쉬번, 이안 맥쉐인" />'+
                             '<input type="hidden" class="still1" value="http://image2.megabox.co.kr/mop/still/2019/B1/F40341-32C0-4540-9C9D-A88D5C04EBEB.large.jpg" />'+
                             '<input type="hidden" class="still2" value="http://image2.megabox.co.kr/mop/still/2019/53/7EA147-B4F5-4E3F-89CD-1AC40D095848.large.jpg" />'+
                             '<input type="hidden" class="still3" value="http://image2.megabox.co.kr/mop/still/2019/7D/DB9C85-DB01-4C41-8B17-048350E2F0C9.large.jpg" />'+
                             '<input type="hidden" class="still4" value="http://image2.megabox.co.kr/mop/still/2019/09/E44D58-A48E-453B-B79F-69C9A28C8B38.large.jpg" />'+
                         '</div>'+
                     '</li>';
         var tag2 = '<li class="item">'+
                         '<div class="thumb_flip">'+
                             '<div class="front"><img class="img" src="http://image2.megabox.co.kr/mop/poster/2019/FA/023CEE-98B5-46A5-8877-192D752FBA4C.large.jpg" /></div>'+
                             '<div class="back">'+
                                '<div class="star-rating2" style="float:left;">'+
                                    '<span style="width:20%;"></span>'+
                                '</div>'+
                                '<p >재밌어요</p>'+
                                '<span class="bg"></span>'+
                            '</div>'+
                         '</div>'+
                         '<div class="title" title="맨 인 블랙: 인터내셔널"><h3>맨 인 블랙: 인터내셔널</h3></div>'+
                         '<div class="infoBtn" >'+
                             '<a  class="btn detail_btn" href="#" >상세정보</a>'+
                             '<a  class="btn reserveBtn" href="#">예매하기</a>'+
                             '<input type="hidden" class="openday" value="2019.06.12" />'+
                             '<input type="hidden" class="director" value="F. 게리 그레이" />'+
                             '<input type="hidden" class="actors" value="크리스 헴스워스, 테사 톰슨, 리암 니슨, 엠마 톰슨" />'+
                             '<input type="hidden" class="still1" value="http://image2.megabox.co.kr/mop/still/2019/25/EEFED9-A099-4E3A-B578-19AA3449981B.large.jpg" />'+
                             '<input type="hidden" class="still2" value="http://image2.megabox.co.kr/mop/still/2019/CE/30A867-7913-4422-B959-D486CAF77E10.large.jpg" />'+
                             '<input type="hidden" class="still3" value="http://image2.megabox.co.kr/mop/still/2019/42/67042E-6D78-47B8-891F-014228F6186D.large.jpg" />'+
                             '<input type="hidden" class="still4" value="http://image2.megabox.co.kr/mop/still/2019/F4/5234F9-A815-4884-A82D-CD949BB50542.large.jpg" />'+
                         '</div>'+
                     '</li>';
        var tag3 = '<li class="item">'+
                         '<div class="thumb_flip">'+
                             '<div class="front"><img class="img" src="http://image2.megabox.co.kr/mop/poster/2019/E2/1403D9-9EE2-428D-9D30-E5009102A833.large.jpg" /></div>'+
                             '<div class="back">'+
                                '<div class="star-rating2" style="float:left;">'+
                                    '<span style="width:20%;"></span>'+
                                '</div>'+
                                '<p >잘봤어요</p>'+
                                '<span class="bg"></span>'+
                            '</div>'+
                         '</div>'+
                         '<div class="title" title="사탄의 인형"><h3>사탄의 인형</h3></div>'+
                         '<div class="infoBtn" >'+
                             '<a  class="btn detail_btn" href="#" >상세정보</a>'+
                             '<a  class="btn reserveBtn" href="#">예매하기</a>'+
                             '<input type="hidden" class="openday" value="2019.06.20" />'+
                             '<input type="hidden" class="director" value="라스 클리브버그" />'+
                             '<input type="hidden" class="actors" value="마크 해밀, 오브리 플라자, 가브리엘 베이트먼, 브라이언 타이리 헨리" />'+
                             '<input type="hidden" class="still1" value="http://image2.megabox.co.kr/mop/still/2019/AE/C60EE4-FC23-4139-AB23-0F8F4BB84F37.large.jpg" />'+
                             '<input type="hidden" class="still2" value="http://image2.megabox.co.kr/mop/still/2019/5D/CA6AF0-D100-4F36-A1BE-95C360284C2D.large.jpg" />'+
                             '<input type="hidden" class="still3" value="http://image2.megabox.co.kr/mop/still/2019/76/B10835-51BD-4B75-B087-A99A68BE15B7.large.jpg" />'+
                             '<input type="hidden" class="still4" value="http://image2.megabox.co.kr/mop/still/2019/42/D06DDB-2298-4379-B65D-1BCB443D43AB.large.jpg" />'+
                         '</div>'+
                     '</li>';
         var tag4 = '<li class="item">'+
                         '<div class="thumb_flip">'+
                             '<div class="front"><img class="img" src="http://image2.megabox.co.kr/mop/poster/2019/01/3EA32B-AC6E-444E-ADD8-E3D8C05193CD.large.jpg" /></div>'+
                             '<div class="back">'+
                                '<div class="star-rating2" style="float:left;">'+
                                    '<span style="width:20%;"></span>'+
                                '</div>'+
                                '<p >잘봤어요</p>'+
                                '<span class="bg"></span>'+
                            '</div>'+
                         '</div>'+
                         '<div class="title" title="어벤져스: 엔드게임"><h3>어벤져스: 엔드게임</h3></div>'+
                         '<div class="infoBtn" >'+
                             '<a  class="btn detail_btn" href="#" >상세정보</a>'+
                             '<a  class="btn reserveBtn" href="#">예매하기</a>'+
                             '<input type="hidden" class="openday" value="2019.04.24" />'+
                             '<input type="hidden" class="director" value="안소니 루소, 조 루소" />'+
                             '<input type="hidden" class="actors" value="로버트 다우니 주니어, 크리스 에반스, 마크 러팔로, 크리스 헴스워스, 스칼렛 요한슨, 제레미 레너, 돈 치들, 폴 러드, 브리 라슨, 카렌 길런, 브래들리 쿠퍼, 조슈 브롤린" />'+
                             '<input type="hidden" class="still1" value="http://image2.megabox.co.kr/mop/still/2019/7F/C127BB-3A72-4E27-A9FA-461AD95ABC39.large.jpg" />'+
                             '<input type="hidden" class="still2" value="http://image2.megabox.co.kr/mop/still/2019/29/C27683-B2C7-47C1-9B5E-7213F669B937.large.jpg" />'+
                             '<input type="hidden" class="still3" value="http://image2.megabox.co.kr/mop/still/2019/18/BDD177-AAAF-4556-9ACC-BCDBEA2520C9.large.jpg" />'+
                             '<input type="hidden" class="still4" value="http://image2.megabox.co.kr/mop/still/2019/3A/9529A0-7B90-4AAA-AA9A-572FD91C42ED.large.jpg" />'+
                         '</div>'+
                     '</li>';

        $(".view_more").before(tag1,tag2,tag3,tag4);
        $(".view_more").hide(); //.view_more full_width 띄어쓰기는 셀렉터 안에서 자식 찾는거 
        //아이디 클래스 태그 태그 속성
    })
    
    /*
        6. 카드뒤집기 기능 구현
            (1) 클래스 thumb_flip 태그에 마우스 오버 시, 
                    자기자신에 flipped 클래스 토글 적용

            (2) 클래스 thumb_flip 태그에 마우스 아웃 시, 
                    자기자신에 flipped 클래스 토글 적용
            ※ 탭1에 더보기 후 mouseover 시, flip 되지 않는 이유는 동적으로 생성된 태그이기 때문
               그러므로 on 이벤트를 적용하여 문제해결
    */
    $(".thumb_flip").mouseover(function(){
        $(this).addClass('flipped');
    }).mouseout(function(){
        $(this).removeClass('flipped'); //. 넣어줘야 클래스 차는거 없으면 태그만 찾는 //이벤트에만 주면 this
    })

    /*
        7. 두번째 탭 - 우측하단에 존재하는 아이콘 숨기고 나타내기 및 무한스크롤기능
    */
    
    $(window).scroll(function() {
        var scrollValue = $(document).scrollTop(); 
        // console.log(scrollValue);
        /*
            우측하단 아이콘 숨기고 보여주기
                조건1 . 자신의 scrollTop()상태가 0일 경우
                    클래스 iconbutton 태그를 서서히 숨긴다
                조건2. 그외에는
                    클래스 iconbutton 태그를 서서히 보여준다
        */
        if(scrollValue == 0) {
            $(".iconbutton").fadeOut();
        }

        else {
            $(".iconbutton").fadeIn();
        }
        //스크롤 값 가져와야 한다.

        /**
            무한스크롤 영화 더보기 기능

            클래스 tabcontent 태그 중 3번째 태그의 display css 상태값을 획득하여 변수에 담는다
            조건1. - display 상태가 block 일 경우
            조건2. - 스크롤이 맨 하단에 위치 할 경우 - 조건식 (Math.ceil($(window).scrollTop()) >= Math.ceil($(document).height() - $(window).height()))
                기능 - (1)class tabcontent 두번째 태그의 li 자손 태그들을 복사한다(clone 함수 이용하여 변수에 담는다)
                       (2)class tabcontent 두번째 태그의 자식 ul 태그에 닫힌태그 위에 (1)에서 복사한 변수를 삽입한다
        */
        var display = $(".tabcontent:eq(1)").css("display");
        if(display == "block") {
            if (Math.ceil($(window).scrollTop()) >= Math.ceil($(document).height() - $(window).height())) {
                // var scrollValue = $(window).scrollTop();
                // console.log(scrollValue);
                var cloneTag = $(".tabcontent:eq(1) li").clone();
                $(".tabcontent:eq(1) ul").append(cloneTag);
            }					
        }

        // $(window).scroll(function(e) {
        // console.log($(document).height(),$(window).height());
         // })

        //  window 는 브라우저
        //  document = 화면에 보여지는 html 전부
        // document.height - window.height 를 뜯하는것은 생각하시기 편하게 html 문서(현재 브라우저에 스크롤 오버된 영역의 최대높이) - 브라우저 높이를 뺀 부분
        // 기본적으로 (문서높이 - 브라우저높이) 는 맨 하단을 의미한다고 생각, Math.ceil 이란 함수를 이용한 이유는 소수점까지 정확하게 체크가 되지 않는 문제가 있어서 각각 ceil 함수를 적용해서 계산함
        // Math.floor() : 소수점 이하를 버림한다. 
        // Math.ceil() : 소수점 이하를 올림한다. 
        // Math.round() : 소수점 이하를 반올림한다
    });


    /*
        8. 네번째 탭 - 어코디언 효과
        조건 - 자신이 가지고 있는 클래스 중, show가 존재하지 않을 경우
            클래스 accordion-toggle 태그에 show 클래스 제거
            자신에 show 클래스 추가

            클래스 panel-collapse 숨기면서 open 클래스 제거
            자신의 다음태그를 보여주면서 open 클래스 추가
    */
    $(".accordion-toggle").click(function(e){
        e.preventDefault();
        if(!$(this).hasClass("show")){
            //타이틀 포커스
            console.log(this);
            $(".accordion-toggle").removeClass("show");
            $(this).addClass("show");
            $(".panel-collapse").slideUp().removeClass("open");
            $(this).next().slideDown().addClass("open");
            //hasClass() 함수는 클래스명이 일치하는 것이 있을 경우 true를 반환합니다.

        }
        
    })

    
    /*
        9. 상세정보 클릭

        클릭한 영화 관련정보 셋팅
            (1)자신으로부터 부모태그중 class item태그를 찾을때까지 올라가서 자손 class img태그의 속성값 src값을 구해서 변수에담는다
            (2)자신의 부모태그를 찾고 이전태그를 찾고 자식태그 중 h3태그의 html내용을 얻어서 변수에 담는다
            (3)자신의 부모태그를 찾고 자식 중 openday 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다
            (4)자신의 부모태그를 찾고 자식 중 director 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다
            (5)자신의 부모태그를 찾고 자식 중 actors 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다

            (6)자신의 부모태그를 찾고 still1 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다
            (7)자신의 부모태그를 찾고 still2 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다
            (8)자신의 부모태그를 찾고 still3 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다
            (9)자신의 부모태그를 찾고 still4 클래스가 존재하는 태그의 value 값을 얻어서 변수에 담는다

            클래스가 modal_movie_img 태그에 (1) 에 구한 경로값을 설정한다
            id가 movie_title 태그에 (2)에 구한 내용을 설정한다
            id가 openDay 태그에 (3)에서 구한 내용을 설정한다
            id가 director 태그에 (4)에서 구한 내용을 설정한다
            id가 actors 태그에 (5)에서 구한 태그를 설정한다

            modal 클래스의 자손 태그 중, stillLi 클래스인 태그를 찾아서 on 클래스를 제거한다
            modal 클래스의 자손 태그 중, 첫번째 stillLi 클래스인 태그의 img 자식태그의 src 값을 (6)에서 구한 값으로 변경한다
            modal 클래스의 자손 태그 중, 두번째 stillLi 클래스인 태그의 img 자식태그의 src 값을 (7)에서 구한 값으로 변경한다
            modal 클래스의 자손 태그 중, 세번째 stillLi 클래스인 태그의 img 자식태그의 src 값을 (8)에서 구한 값으로 변경한다
            modal 클래스의 자손 태그 중, 네번째 stillLi 클래스인 태그의 img 자식태그의 src 값을 (9)에서 구한 값으로 변경한다

            modal 클래스의 자손 중 still_img 클래스를 찾고 그 자식 img 태그를 탐색 후, src 속성을 (6)에서 구한 값으로 변경한다
            modal 클래스를 보여준다


            id movieCommentList 의 자식 class item 태그를 찾아서 내부를 비운다
            id movieCommentTotalCount 의 내용을 0으로 변경 한다
    */
    $(".tabcontent").on("click",".detail_btn",function(e){
        e.preventDefault();
        /*
            클릭한 영화 관련정보 셋팅
        */
        var movie_img = $(this).closest(".item").find(".img").attr("src");
        var movie_title = $(this).parent().prev().children("h3").html();
        var openday = $(this).parent().children(".openday").val();
         var director = $(this).parent().children(".director").val();
         var actors = $(this).parent().children(".actors").val();

         var still1 = $(this).parent().children(".still1").val();
         var still2 = $(this).parent().children(".still2").val();
         var still3 = $(this).parent().children(".still3").val();
         var still4 = $(this).parent().children(".still4").val();

        $(".modal_movie_img").
        attr("src", movie_img);
        $("#movie_title").html(movie_title);
        $("#openDay").html(openday);
        $("#director").html(director);
        $("#actors").html(actors);

        $(".modal .still_slide  li.stillLi").removeClass("on");
        $(".modal .still_slide  li.stillLi").eq(0).addClass("on");
        $(".modal .still_slide  li.stillLi").eq(0).children("img").attr("src",still1);
        $(".modal .still_slide  li.stillLi").eq(1).children("img").attr("src",still2);
        $(".modal .still_slide  li.stillLi").eq(2).children("img").attr("src",still3);
        $(".modal .still_slide  li.stillLi").eq(3).children("img").attr("src",still4);

        $(".modal .still_img > img").attr("src",still1);

        // zoom 컨트롤러 기존에 있는 객체 삭제를 해야 오류발생을 막을 수 있음
        if(zoomControl != "" ){
            zoomControl.destroy();
        }
        zoomControl = $('.zoom').magnify({
           src: movie_img
         });

        $(".modal").fadeIn();
        // 댓글 목록을 초기화
        $("#movieCommentList > ul.item").empty();
        $("#movieCommentTotalCount").html(0);
    });    

    //closest() 메소드는 단 하나의 결과만을 리턴, 셀렉터로 잡히는 상위 요소중 가장 근접한 하나를 반환
    //parent() 셀렉터로 잡히는 모든 상위 요소를 반환한다.


    /* 
        10. 모달닫기 클릭
        클래스 modal 을 숨긴다
    */
    $(".close").click(function(){
        $(".modal").fadeOut();
    })

    /*
        11. 스틸이미지 클릭시, 해당 이미지 메인 이미지로 적용
        (1)class modal의 stillLi 클래스 자손 태그를 탐색 후, on 클래스 제거
         (2)자신에게 on 클래스 추가
         (3)자신의 자식태그 중 img 태그를 탐색 후, src 속성 값을 획득
         (4)클래스 modal의 자손 중 클래스 still_img 태그 탐색 후, 자식 img 태그를 탐색하고 숨긴다 + src 속성의 값을 (3)에서 구한 값으로 변경 후, 보여준다
    */
    $(".modal .still_slide  li.stillLi").click(function(){
        $(".modal .still_slide  li.stillLi").removeClass("on");
        $(this).addClass("on");

        var src = $(this).children("img").attr("src");
        $(".modal .still_img > img").hide().attr("src",src).fadeIn(); 
    })
    /*
        12. 저장버튼 클릭하여 댓글 목록 삽입
        (1) 아이디 content 태그의 value 값을 가져와서 변수에 담는다
        (2) 조건 (1)에서 구한 값이 빈값이면 alert("댓글을 입력하세요");경고창 띄우고 return 으로 막는다
        (3) tag 변수에 담기 내용의 일부를 (1)에서 구한 변수로 변경해준다
        (4) id movieCommentList의 자식인 ul 태그에 (3) 문자태그 변수를 삽입한다(최신등록순으로) 
            - 삽입함수는 어떤걸 사용해야하나?
        (5) id movieCommentList 의 자손 li 태그를 탐색 후, 길이(length)를 구해서 변수에 담는다
        (6) (5)에서 구한 변수를 id movieCommentTotalCount 태그안에 내용으로 덮어씌운다
        (7) id content 태그를 빈값으로 적용 후, forcus() 함수를 추가 적용
    */
    $("#saveBtn").click(function(){
        // 빈값("") 대신 id content 태그의 value 값을 변수에 담습니다
        var content = $("#content").val();
        // 경고창 출력
        if(content == "") {
            alert("댓글을 입력하세요.");
            return;
        }
        else {
            var tag = '<li>'+
                        '<div class="photo_profile">'+
                            '<img src="http://image2.megabox.co.kr/mop/home/user/profile_m.png" alt="interpret** 프로필사진 없음">'+
                        '</div>'+
                        '<div class="text">'+
                            '<div class="name">'+
                                '<strong>조*문</strong>'+
                                '<span>18.03.10</span>'+
                            '</div>'+
                            '<p>'+
                                '<span class="comment">'+content+'</span>'+
                            '</p>'+
                        '</div>'+
                    '</li>';

            // 기능 추가
            $("#movieCommentList > ul.item").prepend(tag);
            var size = $("#movieCommentList > ul.item > li").length;
            $("#movieCommentTotalCount").html(size)
            $("#content").val("").focus();	
        }
    })


    /*
        13. 예매버튼 클릭
        (1)자신의 부모태그의 이전태그안에 존재하는 h3 자식태그의 내용을 가져온다
        (2)id reserveMovieName 태그에 (1)에서 구한 내용을 설정한다
        (3)자신으로부터 클래스 item인 조상태그를 탐색 후, 클래스 front의 자식인 클래스 img 태그의 src 속성을 획득하여 변수에 담는다
        (4)id reserveStillImg 태그의 src 속성값을 (3)에서 구한 값으로 변경
        (5)클래스 modal2 태그를 보여준다

        예약 초기화
        (6) class reserveCnt 태그의 내용을 0으로 변경한다
        (7) id ticketTotalPrice 태그의 내용을 0으로 변경한다
        (8) class modal2 의 자손 td 태그에 over 클래스 제거
    */
    $(".tabcontent").on("click", ".reserveBtn", function(e){
        e.preventDefault();
        
        var movieName = $(this). parent().prev().children("h3").html();
        $("reserveMovieName").html(movieName);

        var movieImage = $(this).closest("li.item").find(".front > .img").attr("src");
        $("#reserveStillImg").attr("src", movieImage);

        $(".modal2").fadeIn();

        //예약관련 초기화

        $(".reserveCnt").html(0);
        $("#ticketTotalPrice").html(0);
        $(".modal2 td").removeClass("over");
    });

    /*
        14. 예매모달 닫기
        클래스 modal2 태그를 숨긴다
    */
    $(".close2").click(function(){
        $(".modal12").fadeOut();
    });


    /*
        15. 추가버튼 클릭
        (1) 연령별 금액 획득 - 자신의 부모를 찾아서 직속자식인 첫번째 label 태그의 data 속성의 값을 획득하여 변수에 담는다 - 숫자변환 필요
        (2) 예약인원수 획득 -  자신의 부모를 찾아서 직속자식인 class reserveCnt 태그의 내용을 획득하여 변수에 담는다 - 숫자변환 필요
        (3) (2)에서 구한 변수를 1 증가 시킨 후 다시 (2)에서 구한 변수에 재대입(누적개념)
        (4) 자신의 부모를 찾아서 class reserveCnt 태그에 (3)의 변수를 내용으로 적용한다

        (5) 총액 1단계 - id ticketTotalPrice의 내용을 획득하여 변수에 담는다
        (6) 총액 2단계 - (5)에서 구한 값을 숫자로 변환해주고 다시 변수에 재대입
        (7) (1)과 (6) 에서 구한 변수를 더한 결과값을 아이디 ticketTotalPrice 태그의 내용으로 적용한다
    */ 
    $(".modal2 .plus").click(function(){
        var price = Number($(this).parent().children("label:eq(0)").attr("data"));
        var cnt = Number($(this).parent().children(".reserveCnt").html());
        cnt = cnt + 1;
        $(this).parent().children(".reserveCnt").html(cnt);
        var total = Number($("#ticketTotalPrice").html());
        $("#ticketTotalPrice").html(total + price);
    });
    /*
        16. 빼기버튼 클릭
        (1) 연령별 금액 획득 - 자신의 부모를 찾아서 직속자식인 첫번째 label 태그의 data 속성의 값을 획득하여 변수에 담는다 - 숫자변환 필요
        (2) 예약인원수 획득 -  자신의 부모를 찾아서 직속자식인 class reserveCnt 태그의 내용을 획득하여 변수에 담는다 - 숫자변환 필요

            조건문 추가 - (2)에서 구한 인원수가 0일경우 return으로 다음 줄의 명령어들을 실행시키지 못하게 막아준다
            조건문을 주지 않게되는 경우 - -1.-2 등의 음수 인원이 생기므로 막아주어야 함

        (3) (2)에서 구한 변수를 1 감소 시킨 후 다시 (2)에서 구한 변수에 재대입(누적개념)
        (4) 자신의 부모를 찾아서 class reserveCnt 태그에 (3)의 변수를 내용으로 적용한다
        (5) 총액 1단계 - id ticketTotalPrice의 내용을 획득하여 변수에 담는다
        (6) 총액 2단계 - (5)에서 구한 값을 숫자로 변환해주고 다시 변수에 재대입
        (7) (1)과 (6) 에서 구한 변수를 뺀 결과값을 아이디 ticketTotalPrice 태그의 내용으로 적용한다
    */
    $(".modal2 .minus").click(function(){
        var price = Number($(this).parent().children("label:eq(0)").attr("data"));
        var cnt = Number($(this).parent().children(".reserveCnt").html());
        if(cnt == 0) {
            return;
        }
        cnt = cnt - 1; 
        $(this).parent().children(".reserveCnt").html(cnt);
        var total = Number($("#ticketTotalPrice").html());
        $("#ticketTotalPrice").html((total - price));
    })
    /*
        17. 예매화면 선택
        (1)0을 변수에 담는다
        (2)클래스 reserveCnt 첫번째 태그의 내용을 가져와서 숫자로 변환 후 (1)에 변수에 누적시킨다
        (3)클래스 reserveCnt 두번째 태그의 내용을 가져와서 숫자로 변환 후 (1)에 변수에 누적시킨다
        (4)클래스 reserveCnt 세번째 태그의 내용을 가져와서 숫자로 변환 후 (1)에 변수에 누적시킨다
        (5)클릭한 자기자신의 index값을 구하여 변수에 담는다
        조건 - 예약인원이 0보다 클 경우
            서브조건 - 클래스 modal2의 class over 태그의 갯수가 예약인원보다 적을 경우
                클래스 modal2의 td 중 (5)에서 구한 index태그를 toggleClass함수를 이용하여 over 클래스를 추가/제거한다
            그외에는
                서브조건 - 클래스 modal2 의 자손 td 태그 중 (5)에 해당되는 태그에서 over 클래스가 있으면
                    클래스 modal2 태그의 (5)에 해당되는 태그에 over클래스 삭제
        그외
            서브조건 - class modal2 의 자손중 td 태그 중 (5)에서 구한 index 태그 중 over 클래스가 존재하면
                class modal2 태그의 자손 td 태그 중 (5)에서 구한 index 태그에 over 클래스 제거
    */
    $(".modal2 td").click(function(){
        // 어른,청소년,어린이에 대한 토탈 x명을 구한다
        var reserveCnt = 0;
        reserveCnt += parseInt($(".reserveCnt:eq(0)").text());
        reserveCnt += parseInt($(".reserveCnt:eq(1)").text());
        reserveCnt += parseInt($(".reserveCnt:eq(2)").text());

        // 클릭한 좌석에 대한 index 값을 구한다
        var index = $(".modal2 td").index(this);
        // 총 인원이 1명 이상일 경우,
        if(reserveCnt > 0) {
            // 선택되어있는 좌석의 수보다 예약인원수가 클 경우
            if($(".modal2 td.over").length < reserveCnt){
                // td에 over클래스에 대한 addClass/removeClass 토글기능 적용
                $(".modal2 td").eq(index).toggleClass("over");
            }
            // 그외에는
            else {
                // 클릭한 좌석에 over클래스가 적용되어있을 경우
                if($(".modal2 td").eq(index).hasClass("over")) {
                    // over클래스 삭제(좌석예약 취소)
                    $(".modal2 td").eq(index).removeClass("over");
                }
                // 기타는 존재하지 않는다
            }
        }
        else {
            if($(".modal2 td").eq(index).hasClass("over")){
                $(".modal2 td").eq(index).removeClass("over");
            }
        }
    })

    /**
        18. 별점 플러그인 적용 - 같이 실습
            rateYo 플러그인은 단순히 $("셀렉터").rateYo() 만 호출하여도 기본 기능이 동작된다
            내부 옵션으로 onChange 함수를 준 이유는 각 별점별 문구 변화를 주기 위함
            우리가 실습했던 혈압 및 성적(수우미양가) 출력하는 방식을 떠올리자
    */


    /**
        =============== 19. 비메오플레이어 연동 - 같이실습 ===============
    */
    $(".star-rating").rateYo();

    // 임의의 재생목록 
    var playList = [217149636,222783829,222783687,217151158];
    var player;

    var options = {
        id: playList[0],
        width: 640,
        loop : true
    };

    // 아래 선언은 vimeo 플레이어 호출을 위한 필수 + 상단 include 한 js 파일이 기존에 존재하여야 사용가능
    player = new Vimeo.Player('vimeo_payer', options);

    /**
        서버에서 데이터를 받아온 비메오 썸네일을 각 클릭시,
        플레이어에 비디오 영상 변경(같이 실습하면서 코드를 추가합니다)
    */
    $(".tabcontent:eq(3) li.stillLi").click(function(){
        $(this).siblings(".on").removeClass("on");
        $(this).addClass("on");
        var index = $(".tabcontent:eq(3) li.stillLi").index(this);
        // 아래 함수는 vimeo api 에서 제공하는 플레이어 재생 함수
        player.loadVideo(playList[index])
    });


    // $(".tablinks").removeClass("active")
    // 	$(this).addClass("active")
    // 	var i = $(".tablinks").index(this);  //모든 버전 인덱스 구하는 법
    // 	console.log(i);  // 0번째
    // 	$(".tabcontent").css("display", "none");				
    // 	$(".tabcontent").eq(i).show();
    // 	// $("변경하려는 대상").css("속성","속성값"); 
    /**
        =============== 20. 단축기능 관련 ===============
        모달창 띄웠을 경우, 좀더 간편하게 키보드 이벤트 혹은 클릭이벤트를 통해서 모달을 제어하고 싶을 경우 해당 기능을 적용한다
    */

    /*
        esc 키보드 누를때 모달창 닫기
    */
    // 키코드 확인 법
    // $(document).keydown(function(event) {
    // 		console.log(event.keyCode);
    // });

    $(window).keyup(function(e){
        var modal = $(".modal").css("display");
        var modal2 = $("modal2").css("display");

        if(e.keyCode == 27) {
            if(modal == 'block' || modal2 == "block"){
                $(".modal,.modal2").fadeOut();
            }
        }
    });

    /*
        모달창 외부 클릭시 모달창 닫기
    */
    $(window).click(function(e){
        var target = e.target.className;
        // e.target.className 일경우 브라우저모달의 검은 영역을 눌러보세요
        // 현재 클릭된 엘리먼트의 클래스명이 나옵니다
        console.log(target)
        if(target == "modal" || target == "modal2" || target == "wrapper") {
            $(".modal,.modal2").fadeOut();				
        }
    })
});