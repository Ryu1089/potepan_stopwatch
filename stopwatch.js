
 let timer=document.getElementById("timer");
 let startbutton=document.getElementById("start");
 let stopbutton=document.getElementById("stop");
 let resetbutton=document.getElementById("reset");
 
 let startTime;
 let elapsedTime=0;
 let timerId;
 let stopTime=0;
 
 function updateTimeText(){ 
  let m = Math.floor(elapsedTime / 60000);
  let s = Math.floor(elapsedTime %60000 / 10000);
  let ss = Math.floor(elapsedTime % 60000 / 1000);
  let ms = elapsedTime % 1000;

  m = ("0" + m).slice(-1); 
  s = ("0"+ s).slice(-1);
  ss = ("0"+ ss).slice(-1);
  ms = ("0"+ ms).slice(-1);
      
  timer.textContent = m + ':' + s+ss+ ':' + ms;
  };
   
   
   
 function restart(){
  timerId=setTimeout(function(){
  elapsedTime=Date.now()-startTime+stopTime;
  updateTimeText()
  restart();
  },10);
 };
 
  

 startbutton.addEventListener("click", function(){
  startTime=Date.now();
  restart();
  startbutton.setAttribute("disabled", true);  
 });
  
 stopbutton.addEventListener("click", function(){
  clearTimeout(timerId);
  stopTime+=Date.now()-startTime;
  startbutton.removeAttribute("disabled");    
 });
  
 resetbutton.addEventListener("click", function(){
  elapsedTime=0;
  stopTime=0;
  startbutton.removeAttribute("disabled");    
  updateTimeText();
  });
 
 

  
 

  
 
  

 
  
 
  
  
 
 

