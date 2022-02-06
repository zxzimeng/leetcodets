var numericArray = [2, 3, 4, 1, 5, 8, 11];
var sortedArray = numericArray.sort((n1, n2) => n1 - n2);
console.log(sortedArray);
var sortedArrayLength: any = sortedArray.length - 1;
var returnArray = [];
for (let i in sortedArrayLength) {
  returnArray.push(sortedArray[i] + sortedArray[sortedArrayLength]);
}
