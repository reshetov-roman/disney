function changeTimezone(date, ianatz) {
    let invdate = new Date(date.toLocaleString('en-US', {
      timeZone: ianatz
    }));
  
    const diff = invdate.getTime() - date.getTime();
  
    return new Date(date.getTime() - diff);
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    // конечная дата 1 января 2023
    const fixedData = '2023-01-01T24:00:00';
    const x = new Date(fixedData);
    // часовой пояс
    const deadline = changeTimezone(x, "Asia/Almaty");
    // id таймера
    let timerId = null;
    // Вычесляем позицию времени
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      const diff = deadline - new Date();
      diff <= 0 ? clearInterval(timerId) : false;
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });


const bannerVideo = document.querySelectorAll('.disney-wrapper__video-banner video');
[...bannerVideo].forEach(elm => {
  if(elm) {
    elm.loop = true;
    elm.muted = true;
    elm.setAttribute('autoplay', '');
    elm.setAttribute('playsinline', '');
  }
});

