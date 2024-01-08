export default function cleanSet(Set, StartString) {
  if (!Set || !StartString || !(Set instanceof Set) || typeof StartString !== 'string') {
    return '';
  }
  return Array.from(Set)
    .filter((el) => el && el.startsWith(StartString))
    .map((el) => el.replace(StartString, ''))
    .join('-');
}
