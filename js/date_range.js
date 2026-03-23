$(function () {
  $('.date-range-picker').each(function () {
    // ▼ 이 picker's 내부 요소들 (클래스 선택)
    const $root      = $(this);
    const $display   = $root.find('.dateDisplay');
    const $popup     = $root.find('.calendarPopup');
    const $cal1      = $root.find('.calendar1');
    const $cal2      = $root.find('.calendar2');
    const $startTime = $root.find('.startTime');
    const $endTime   = $root.find('.endTime');
    const $apply     = $root.find('.applyBtn');
    const $cancel    = $root.find('.cancelBtn');

    // 상태(적용/임시)
    let appliedStart = null, appliedEnd = null;
    let tempStart = null, tempEnd = null;

    // 현재 보이는(왼쪽) 달
    const today = new Date();
    let viewYear = today.getFullYear();
    let viewMonth = today.getMonth();

    // 유틸
    const pad = n => String(n).padStart(2, '0');
    const fmtDate = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    const fmtHM   = d => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    const sameDay = (a,b)=> a&&b && a.getFullYear()==b.getFullYear() && a.getMonth()==b.getMonth() && a.getDate()==b.getDate();
    const isBetween = (d,a,b)=>{
      if(!a||!b) return false;
      const x=+new Date(d.getFullYear(),d.getMonth(),d.getDate());
      const s=+new Date(a.getFullYear(),a.getMonth(),a.getDate());
      const e=+new Date(b.getFullYear(),b.getMonth(),b.getDate());
      return x>s && x<e;
    };
    const setTime = (dateOnly, hm)=>{
      const [h,m]=(hm||'00:00').split(':').map(Number);
      const d=new Date(dateOnly); d.setHours(h||0,m||0,0,0); return d;
    };

    // 표시 업데이트
    function updateDisplay(){
      if(appliedStart && appliedEnd){
        $display.text(`${fmtDate(appliedStart)} ${fmtHM(appliedStart)} ~ ${fmtDate(appliedEnd)} ${fmtHM(appliedEnd)}`);
      }else{
        $display.text('날짜를 선택하세요');
      }
    }

    // 날짜 선택
    function pickDate(date){
      if(!tempStart || (tempStart && tempEnd)){ tempStart = new Date(date.getFullYear(),date.getMonth(),date.getDate()); tempEnd=null; }
      else{
        const e = +new Date(date.getFullYear(),date.getMonth(),date.getDate());
        const s = +tempStart;
        tempEnd = e < s ? (t=> (tempStart=new Date(date.getFullYear(),date.getMonth(),date.getDate()), t))(tempStart) 
                        : new Date(date.getFullYear(),date.getMonth(),date.getDate());
      }
    }

    // 달력 렌더
    function renderCalendars(){
      renderOne($cal1, viewYear, viewMonth, true);
      const ny=viewMonth===11?viewYear+1:viewYear, nm=(viewMonth+1)%12;
      renderOne($cal2, ny, nm, false);
    }
    function renderOne($container, y, m, isLeft){
      $container.empty();
      const $head=$('<div class="calendar-header"></div>');
      const $title=$(`<div class="month-year">${y}-${pad(m+1)}</div>`);
      if(isLeft){
        const $prev=$('<button class="nav-btn">‹</button>').on('click',()=>{ viewMonth--; if(viewMonth<0){viewMonth=11;viewYear--;} renderCalendars(); });
        $head.append($prev,$title);
      }else{
        const $next=$('<button class="nav-btn">›</button>').on('click',()=>{ viewMonth++; if(viewMonth>11){viewMonth=0;viewYear++;} renderCalendars(); });
        $head.append($title,$next);
      }
      $container.append($head);

      const $grid=$('<div class="calendar-grid"></div>');
      ['일','월','화','수','목','금','토'].forEach(w=>$grid.append(`<div class="day-header">${w}</div>`));

      const first=new Date(y,m,1), firstDay=first.getDay();
      const daysInMonth=new Date(y,m+1,0).getDate();
      const prevDays=new Date(y,m,0).getDate();

      for(let i=firstDay-1;i>=0;i--) $grid.append(makeDay(new Date(y,m-1,prevDays-i),true));
      for(let d=1;d<=daysInMonth;d++) $grid.append(makeDay(new Date(y,m,d),false));
      const total=7+firstDay+daysInMonth, remain=Math.ceil(total/7)*7-total;
      for(let d=1;d<=remain;d++) $grid.append(makeDay(new Date(y,m+1,d),true));

      $container.append($grid);
    }
    function makeDay(date, other){
      const $el=$(`<div class="day${other?' other-month':''}">${date.getDate()}</div>`);
      if(tempStart && sameDay(date,tempStart)) $el.addClass('start-date selected');
      if(tempEnd   && sameDay(date,tempEnd))   $el.addClass('end-date selected');
      if(isBetween(date,tempStart,tempEnd))    $el.addClass('in-range');

      $el.on('click', ()=>{
        if(other){ viewYear=date.getFullYear(); viewMonth=date.getMonth(); renderCalendars(); }
        pickDate(date); renderCalendars();
      });
      return $el;
    }

    // 열기/닫기
    function openPopup(){
      tempStart = appliedStart ? new Date(appliedStart) : null;
      tempEnd   = appliedEnd   ? new Date(appliedEnd)   : null;
      $startTime.val(appliedStart? fmtHM(appliedStart) : '00:00');
      $endTime.val(appliedEnd? fmtHM(appliedEnd) : '23:59');

      const base=appliedStart||today; viewYear=base.getFullYear(); viewMonth=base.getMonth();
      renderCalendars();
      $popup.addClass('active');
    }
    const closePopup=()=> $popup.removeClass('active');

    // 이벤트
    $display.on('click', (e)=>{ e.stopPropagation(); $popup.hasClass('active')?closePopup():openPopup(); });
    $(document).on('click', (e)=>{ if(!$(e.target).closest($root).length) closePopup(); });
    $cancel.on('click', closePopup);
    $apply.on('click', ()=>{
      if(!tempStart || !tempEnd){ closePopup(); return; }
      appliedStart = setTime(tempStart, $startTime.val());
      appliedEnd   = setTime(tempEnd,   $endTime.val());
      if(+appliedStart > +appliedEnd){ const t=appliedStart; appliedStart=appliedEnd; appliedEnd=t; }
      updateDisplay(); closePopup();
    });

    // 초기값(옵션: 오늘)
    appliedStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0);
    appliedEnd   = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59);
    updateDisplay();
  });
});