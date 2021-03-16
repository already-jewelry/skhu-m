let s= "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
for(let i=0; i<s.length; i++){
  if(['a','e','i','o','u'].includes(s.toLowerCase()[i])){
    console.log(i);
  }
}

//indexOf
//serach 정규식
//match 메소드