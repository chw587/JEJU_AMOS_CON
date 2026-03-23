$(document).ready(function() {
    // 모든 모달 닫기 함수
    function closeAllModals() {
        $('.modal').removeClass('active');
    }
    
    // 설정 모달
    $('.setting').on('click', function(e) {
        e.stopPropagation();
        closeAllModals();
        $('.setting_modal').toggleClass('active');
    });
    
    $('.setting_modal .modal-item').on('click', function() {
        $('.setting_modal').removeClass('active');
    });
    
    // 알람 모달
    $('.alarm').on('click', function(e) {
        e.stopPropagation();
        closeAllModals();
        $('.alarm_modal').toggleClass('active');
    });
    
    $('.alarm_modal .modal-item').on('click', function() {
        $('.alarm_modal').removeClass('active');
    });
    
    // 마이페이지 모달
    $('.mypage').on('click', function(e) {
        e.stopPropagation();
        closeAllModals();
        $('.mypage_modal').toggleClass('active');
    });
    
    $('.mypage_modal .modal-item').on('click', function() {
        $('.mypage_modal').removeClass('active');
    });
    
    // 모달 외부 클릭 시 모든 모달 닫기
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.modal, .setting, .alarm, .mypage').length) {
            closeAllModals();
        }
    });
});