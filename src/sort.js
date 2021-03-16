let a=[]

for(let i=0; i<100; i++){
a[i]= Math.floor(Math.random()*100)+1}

a.sort((s,j)=>s-j)
console.log(a)

//function compareNumber(s,j){
//  return s-j
//}

//const compareNumber=()=>s-j