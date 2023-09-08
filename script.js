document.addEventListener("DOMContentLoaded", function getDayAndTime() {
  const dayOfWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  function getDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getUTCDay();
    return daysOfWeek[dayIndex];
  }

  function getUTCTimeInMilliseconds() {
    return new Date().getTime();
  }

  dayOfWeekElement.textContent = `Today is ${getDayOfWeek()}`;
  utcTimeElement.textContent = `UTC Time in Milliseconds: ${getUTCTimeInMilliseconds()}`;

  setInterval(getDayAndTime, 1);
});
