
 let timer=document.getElementById("timer");
 let startbutton=document.getElementById("start");
 let stopbutton=document.getElementById("stop");
 let resetbutton=document.getElementById("reset");
 
 let startTime;
 let elapsedTime=0;
 let timerId;
 

 startbutton.addEventListener("click", function(){
  startTime=new Date()
  timerId=setInterval(function(){
  elapsedTime+=Date.now-startTime
  updateTimeText()
  },10);
  });
  
 stopbutton.addEventListener("click", function(){
  clearInterval(timerId)
 });
  
 resetbutton.addEventListener("click", function(){
  });
  
 
  
  function updateTimeText(){
  let m=Math.floor(elapsedTime/60000);
  let s=Math.floor(elapsedTime%60000/1000);
  let ms=elapsedTime%1000;
  
  m=("0"+m).slice(-1);
  s=("0"+s).slice(-1);
  ms=("0"+ms).slice(-1);
  
  timer.textContent=m+":"+s+":"+ms;
 };
 
  
 
  
  
 
 

