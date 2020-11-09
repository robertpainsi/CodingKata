export default function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;

  const time = {
    years: Math.floor(seconds / year),
    days: Math.floor(seconds / day) % 365,
    hours: Math.floor(seconds / hour) % 24,
    minutes: Math.floor(seconds / minute) % 60,
    seconds: seconds % 60,
  };

  const parts = [];
  [
    {
      value: time.years,
      labels: ['year', 'years'],
    }, {
    value: time.days,
    labels: ['day', 'days'],
  }, {
    value: time.hours,
    labels: ['hour', 'hours'],
  }, {
    value: time.minutes,
    labels: ['minute', 'minutes'],
  }, {
    value: time.seconds,
    labels: ['second', 'seconds'],
  }].forEach(({value, labels}) => {
    if (value > 0) {
      parts.push(`${value} ${pluralize(value, labels)}`);
    }
  });

  if (parts.length > 1) {
    const last = parts.pop();
    parts[parts.length - 1] += ` and ${last}`;
  }
  return parts.join(', ');
}

function pluralize(n, singleOrPlural) {
  return (n === 1) ? singleOrPlural[0] : singleOrPlural[1];
}
