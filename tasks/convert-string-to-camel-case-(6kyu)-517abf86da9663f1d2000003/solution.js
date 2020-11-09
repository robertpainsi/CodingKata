export default function toCamelCase(str) {
  return str.replace(/[_-](.)/g, function(match, letter) {
    return letter.toUpperCase();
  });
}
