// let ran = [1,25,54,89,45,85,12,12,54,54,9];
// const fArray =(ranA)=> ran.sort((a,b)=> b-a);

// console.log(fArray(ran)[1])
// // const dupA = (array)=> [...new Set(array.filter((value, index, self)=> self.indexOf(value)!==index))];
// const dupA = (array)=> [...new Set(array)].sort((a,b)=>a-b);

// console.log(dupA(ran));
// // const fib = (n) =>{
// //     s = fib(n-1);
// //      n < 1 ? 0
// //              : n <=2 ? 1
// //              : s.push(s[s.length-1]+s[s.length-2]);
// //              return s
// // }
// // fib(5);
// const dup =array=> [...new Set(array.filter((value, index, self)=>self.indexOf(value) !== index))];
// console.log(dup(ran))
// const rStr = "Hello world";
// const fLtr = (a, b)=> a.split(b).length-1;
// console.log(fLtr("Ka boom","o"))
// const fchar = (str, char)=>{
//     var start = 0;
//     var count = 0;
//     while((start = str.indexOf(char, start)+1) !==0){
//         count ++;
//     }
//     return count;
// }
// console.log(fchar("boom","o"))


let arr = [1,25,54,89,45,85,12,12,54,54,9];

const rDu = [...new Set(arr)].sort((a,b)=>a-b);
const fDu= (ar) => [...new Set(ar.filter((value, index, self)=>self.indexOf(value)!==index))];
console.log(fDu(arr))