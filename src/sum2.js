var sum=0;
for(var i=1; i<=7; i++){
   if(i%3==0)
      //continue; //3의 배수가 (3의 배수가 나오면 더하지않고 계속 돈다.) 아닌걸 더하게 된다.
   sum+=i;
}
console.log(sum)