export default  function chunkArray(arr, items) {
  const splittedArr = [];
  const totalArrays = Math.ceil(arr.length / items);

  for (let i = 0; i < totalArrays; i++) {
    const startIndex = i*items;
    splittedArr.push(arr.slice(startIndex, startIndex + items));
  }

  return splittedArr;
}
