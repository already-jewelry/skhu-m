const a = []

for (let i = 0; i < 100; i++) {
  a[i] = Math.floor(Math.random() * 100) + 1
}

console.log(a.filter(el => el % 2 !== 0));

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     a.splice(i, 1)
//   }
// }

// console.log(a)