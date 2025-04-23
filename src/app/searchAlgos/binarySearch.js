function binSearch(arr, target, start, end) {
  if (start > end ) return false; // check if we run out of dissections
  console.log(arr.slice(start, end + 1))
  
  const middle = Math.floor((start + end ) / 2);
  console.log(`middle idx= ${middle}`);
  // Search if the middle element is our target
  if ((arr[middle]) === target) return true; // found the element
  // if not we need to know if to look on the left or right of middle
  if (target < arr[middle]) {
    return binSearch(arr, target, start, middle - 1);
  } else return binSearch(arr, target, middle + 1, end);
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const target = 5;
const result = binSearch(arr,target, 0, arr.length - 1);
console.log(result);