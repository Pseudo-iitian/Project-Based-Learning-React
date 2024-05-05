let a= 0;

let intervalId = setInterval(setTime,1000)
function setTime(){
  a = a + 10;
  console.log(a);
  if(a==50){
    clearInterval(intervalId);
  }
}

// console.log(typeof intervalId)