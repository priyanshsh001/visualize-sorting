var container = document.getElementById("bars");
var arr=[];//it contains the random value generate by random function //basically to store the heights of the divs
var divs=[];// it is the divs to represent bars



container.style.display=`flex`;
container.style.display.justifyContent=`center`;
// function to generate bars
var array_size=60;// size of the array
function generate_array()
{
    container.innerHTML="";
  
    for(var i=0;i<array_size;i++)
    {
        arr[i]=Math.floor(Math.random() *100 ) + 10;// generate the random values
        divs[i]=document.createElement("div");// creating divs
  
        container.appendChild(divs[i]);// appending to the container at the last
       
        divs[i].style.width = `0.7vw`;// sets width
        divs[i].style.height = `${arr[i]*4}px`;// take heights from array
        divs[i].style.margin='2px'; //margin
        divs[i].style.border='2px ';// border
        divs[i].style.background='green'; // background of initial bars

       
    }
}

  
generate_array();
function reload()
{
    window.location.reload();
}
var delay_time=10000/(Math.floor(array_size/10)*100);// for adding delay to  set timeout function        
var delay=0;
//function to update the height  and color of the divs which are passed to it
  function update(cont,heigh,colo)
{
    window.setTimeout(function(){
     
        margin_size=0.1;
       cont.style.width = `${0.7}vw`;// vw to enhance the responsiveness
       cont.style.height = `${heigh*4}px`;
       cont.style.margin='2px'
      
   cont.style.background=colo;
       cont.style.border='2px ';
     
    },delay+=delay_time);
}
