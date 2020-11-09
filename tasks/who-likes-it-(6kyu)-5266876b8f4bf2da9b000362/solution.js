export default function likes(names) {
  let prefix;
  if (names.length === 0) {
    prefix = `no one`;
  } else if (names.length === 1) {
    prefix = `${names[0]}`;
  } else if (names.length === 2) {
    prefix = `${names[0]} and ${names[1]}`;
  } else if (names.length === 3) {
    prefix = `${names[0]}, ${names[1]} and ${names[2]}`;
  } else {
    prefix = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
  }

  const postfix = (names.length < 2) ? `likes this` : `like this`;

  return `${prefix} ${postfix}`;
}
