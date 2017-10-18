export default function flatArray(array) {
  return array.reduce((newArray, element) => {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatArray(element));
    } else {
      newArray.push(element);
    }
    return newArray;
  }, []);
}
