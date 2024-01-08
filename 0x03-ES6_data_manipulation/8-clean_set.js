export default function cleanSet(aSet, aStartString) {
  if (!aSet || !aStartString || !(aSet instanceof aSet) || typeof aStartString !== 'string') {
    return '';
  }
  return Array.from(aSet)
    .filter((ele) => ele && ele.startsWith(aStartString))
    .map((ele) => ele.replace(aStartString, ''))
    .join('-');
}
