// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  let years = Math.floor(seconds / (3600 * 24 * 365));
  let days = Math.floor((seconds / 86400) % 365);
  let hours = Math.floor((seconds / 3600) % 24);
  let minutes = Math.floor((seconds / 60) % 60);
  let sec = Math.floor(seconds % 60);

  if (seconds === 0) {
    return "now";
  }
  if (seconds < 60) {
    return seconds !== 1 ? `${sec} seconds` : `${sec} second`;
  }
  if (seconds > 60 && seconds < 3600) {
    return sec !== 0
      ? `${minutes} ${minutes !== 1 ? "minutes" : "minute"} and ${sec} ${
          seconds !== 1 ? "seconds" : "second"
        }`
      : `${minutes} ${minutes !== 1 ? "minutes" : "minute"}`;
  }
  if (seconds >= 3600 && seconds < 86400) {
    return sec !== 0 && minutes !== 0
      ? `${hours} ${hours !== 1 ? "hours" : "hour"}, ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : sec === 0 && minutes !== 0
      ? `${hours} ${hours !== 1 ? "hours" : "hour"}, ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : sec !== 0 && minutes === 0
      ? `${hours} ${hours !== 1 ? "hours" : "hour"}
           and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : `${hours} ${hours !== 1 ? "hours" : "hour"}`;
  }
  if (seconds >= 86400 && seconds < 31536000) {
    return hours !== 0 && sec !== 0 && minutes !== 0
      ? `${days} ${days !== 1 ? "days" : "day"}, ${hours} ${
          hours !== 1 ? "hours" : "hour"
        }, ${minutes} ${minutes !== 1 ? "minutes" : "minute"} and ${sec} ${
          sec !== 1 ? "seconds" : "second"
        }`
      : hours === 0 && sec !== 0 && minutes !== 0
      ? `${days} ${days !== 1 ? "days" : "day"}, ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : hours !== 0 && sec !== 0 && minutes === 0
      ? `${days} ${days !== 1 ? "days" : "day"}, ${hours} ${
          hours !== 1 ? "hours" : "hour"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : hours !== 0 && sec === 0 && minutes !== 0
      ? `${days} ${days !== 1 ? "days" : "day"}, ${hours} ${
          hours !== 1 ? "hours" : "hour"
        } and ${minutes} ${minutes !== 1 ? "minutes" : "minute"}`
      : `${days} ${days !== 1 ? "days" : "day"}`;
  }
  if (seconds >= 31536000) {
    return days !== 0 && hours !== 0 && sec !== 0 && minutes !== 0
      ? `${years} ${years !== 1 ? "years" : "year"}, ${days} ${
          days !== 1 ? "days" : "day"
        }, ${hours} ${hours !== 1 ? "hours" : "hour"}, ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : days === 0 && hours !== 0 && sec !== 0 && minutes !== 0
      ? `${years} ${years !== 1 ? "years" : "year"}, 
           ${hours} ${hours !== 1 ? "hours" : "hour"}, ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        } and ${sec} ${sec !== 1 ? "seconds" : "second"}`
      : days === 0 && hours === 0 && sec !== 0 && minutes !== 0
      ? `${years} ${years !== 1 ? "years" : "year"}, 
           ${minutes} ${minutes !== 1 ? "minutes" : "minute"} and ${sec} ${
          sec !== 1 ? "seconds" : "second"
        }`
      : days !== 0 && hours !== 0 && sec === 0 && minutes !== 0
      ? `${years} ${years !== 1 ? "years" : "year"}, ${days} ${
          days !== 1 ? "days" : "day"
        }, ${hours} ${hours !== 1 ? "hours" : "hour"} and ${minutes} ${
          minutes !== 1 ? "minutes" : "minute"
        }`
      : days !== 0 && hours !== 0 && sec !== 0 && minutes === 0
      ? `${years} ${years !== 1 ? "years" : "year"}, ${days} ${
          days !== 1 ? "days" : "day"
        }, ${hours} ${hours !== 1 ? "hours" : "hour"} and ${sec} ${
          sec !== 1 ? "seconds" : "second"
        }`
      : `${years} ${years !== 1 ? "years" : "year"}`;
  }
}

// console.log(formatDuration(0));
// console.log(formatDuration(35));
// console.log(formatDuration(1));
// console.log(formatDuration(31));
// console.log(formatDuration(86400));
