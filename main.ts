enum Gender {
  male = '男',
  female = '女'
}


interface Persion {
  gender: Gender

}


function marry(a: Persion, b: Persion): [Persion, Persion] {
  if (a.gender !== b.gender) {
    return [a, b];
  } else {
    throw  new Error('性别不同');
  }
}

let a = {gender: Gender.male};
let b = {gender: Gender.female};
console.log(marry(a, b));

// function selectSort(a: number[]): number[] {
//   for (let i = 0; i < a.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[j] < a[minIndex]) {
//         minIndex = j;
//       }
//     }
//     let temp = a[minIndex];
//     a[minIndex] = a[i];
//     a[i] = temp;
//   }
//   return a;
// }
//
// console.log(selectSort([1, 23, 4, 5, 6, 7]));

// function min(a: number, b: number): number {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
//
// console.log(min(1, 2));
// function add(a: string, b: string): string
// function add(a: number, b: number): number
//
// function add(a: any, b: any): any {
//   return a + b;
// }
//
// console.log(add(2, 1));