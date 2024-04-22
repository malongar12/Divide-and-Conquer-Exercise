function countZeroes(array) {
    let Zero = findFirst(array)
  if (Zero === -1) return 0;

  return array.length - Zero
  
}


function findFirst(array, low = 0, high = array.length - 1) {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2)
      if ((mid === 0 || array[mid - 1] === 1) && array[mid] === 0) {
        return mid;
      } else if (array[mid] === 1) {
        return findFirst(array, mid + 1, high)
      }
      return findFirst(array, low, mid - 1)
    }
    return -1;
  }

module.exports = countZeroes