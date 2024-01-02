export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = array;
  for (const [idx, element] of arrayCopy.entries()) {
    arrayCopy[idx] = appendString + element;
  }

  return arrayCopy;
}