$(function(){

	var text = $('.progress .txt'); //퍼센트 값을 담을 엘리먼트
	var progressBar = $('.progress .bar'); //퍼센트 게이지 엘리먼트

	function getPercent() {

		var scrollHeight = $('body').height(); //스크롤 거리를 구합니다
		var scrollRealHeight = (scrollHeight - $(window).height()); //스크롤 할 실제 거리를 구합니다
		var winScrollTop = $(window).scrollTop(); //스크롤 위치를 구합니다
		var scrollPercent = (winScrollTop / scrollRealHeight) * 100; //백분율을 구합니다
		var textPercent = Math.round(scrollPercent); //텍스트에 삽입될 값은 소수점을 버려줍니다

		render(textPercent,scrollPercent);
	};

	function render(textPercent,scrollPercent) {
		text.text(textPercent + '%'); //텍스트 값을 업데이트합니다

		progressBar.css({ //게이지 값을 업데이트합니다
			width : scrollPercent + '%'
		});
	};

	function init() {
		getPercent();
	};

	$(window).scroll(function() { //스크롤 이벤트를 추가합니다.

		getPercent();
	});

	init(); //초기화
});