let persons = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 }
]
// let max= persons.reduce((p1,p2)=> p1.age>p2.age ? p1.name:p2.name)
// console.log(max)

// let sum = persons.reduce((a, b) => a.age + b.age, {age:0})
// console.log(sum)

let sum = persons.reduce((a, b) => {
  console.log(a,b)
  return {age: a.age+b.age} //리턴값이 두번째 a    변수:acc, cur
  //return a.age + b.age;
}, {age:0})
console.log(sum.age)