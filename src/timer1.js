let count = 0;
const timer = setInterval(() => {
  console.log(new Date())
  count += 1
  if (count >= 10) {
    clearInterval(timer)
  }
}, 1000)



//for(i=0; i<10; i++){
//  function printTime(msg) {
//    console.log(msg, new Date())
//   }
// }
// setTimeout(printTime, 1000, "1초 간격")



//node timer1.js
