let arr=[1,2,3,4,5];
console.log(arr.map(x=>x*3));

let arr4 = [1, 2, 2, 3, 3, 4, 5];
let uniqueArr = arr4.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(uniqueArr); 


let arr2=[
    { name: "hussam", age: 30 },
    { name: "Ali", age: 40 },
    { name: "Ahmad", age: 22 },
  ];
  arr2.sort((a, b) => a.age - b.age);

console.log(arr2);


let arr3 = [1,5,9,6,3,87,72,23];

function findLargestNumber(arr) {
  let largest = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; 
    }
  }

  return largest;
}

console.log(findLargestNumber(arr3)); 

let arr5 = [1, 5, 9, 6, 3, 87, 72, 23];
let reversedArr = [];

for (let i = arr3.length - 1; i >= 0; i--) {
    reversedArr.push(arr3[i]);
}

console.log(reversedArr);



  