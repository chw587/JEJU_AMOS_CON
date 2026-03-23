// DATE 오늘날짜 설정
window.onload = function () {
  const todayISO = new Date().toISOString().slice(0, 10);

  const inputs = document.querySelectorAll('.daterange');
  inputs.forEach(el => {
    el.value = todayISO;
  });
};

// 1117
// 테이블 차트 
$(document).ready(function () {
  $('.btn_wrap .btn').on('click', function () {

    $('.btn_wrap .btn').removeClass('active');
    $(this).addClass('active');

    if ($(this).text() === '테이블') {
      $('.table-wrap').show();
      $('.chart_wrap').hide();
      // 1117 추가
      $('.pagination').show();
    } else if ($(this).text() === '차트') {
      $('.table-wrap').hide();
      $('.chart_wrap').show();
      // 1117 추가
      $('.pagination').hide();
    }
  });
});


// sidebar 
$(function(){
  $('.menu').on('click', function() {
    $('.sidebar').toggleClass('expanded');

    if ($('.sidebar').hasClass('expanded')) {
      // 펼침
      $('.sec').css({ width:'calc(100% - 150px)', marginLeft:'150px' });
      $('.sidebar').css('width','220px');
      $('.rail').css('display','none');
      $('.panel').css('opacity','1');
      $('.menu').css('background', '#ffe9e3');
      
    } else {
      // 접힘
      $('.sec, .sidebar, .panel, .rail, .menu').removeAttr('style');
    }
  });
});


// 1117
// 요소 드롭다운
$(document).ready(function() {
  $('.rigth_area p').on('click', function() {
    $('.element_wrap').toggle();
    $('.rigth_area p').toggleClass('element_active');
  })
})