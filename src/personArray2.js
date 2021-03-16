let persons1= []
for (let i = 0; i < 10; i++) {
  persons.push({ name: "홍길동", age: 16 + i })
}
console.log(persons1)

const person2 = persons1.map(({name, age}) => {
	return {name, age};
})
//Map은 새로운 배열 만든다.

// let persons2= Object.assign([], persons1)
// console.log(persons2)