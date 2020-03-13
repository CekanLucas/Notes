
function myFunction(){
  
  //setInterval is used to perform function at regular intervals
  let tick = 1;
  
  setInterval(lagfunc,1000);
  function lagfunc(){
    console.log(tick++);
    // clearInterval(); 
    }
} 

myFunction()