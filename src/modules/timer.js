const timer = deadline => {
  const timerDays = document.querySelector('.count_1 span');
  const timerHours = document.querySelector('.count_2 span');
  const timerMinutes = document.querySelector('.count_3 span');
  const timerSeconds = document.querySelector('.count_4 span');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60) % 24;
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    days.toString().length === 1 ? days = '0' + days : days;
    hours.toString().length === 1 ? hours = '0' + hours : hours;
    minutes.toString().length === 1 ? minutes = '0' + minutes : minutes;
    seconds.toString().length === 1 ? seconds = '0' + seconds : seconds;

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerDays.textContent = getTime.days
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
  };

  if (getTimeRemaining().timeRemaining > 0) {
    setInterval(updateClock, 1000);
  }
};

export default timer;
