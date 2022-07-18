const time=document.getElementById("time")

const playbtn=document.getElementById("playbtn")
const pausebtn=document.getElementById("pausebtn")
const resetbtn=document.getElementById("resetbtn")


let startTime;
let elapsedTime=0;
let stopWatchInterval;

const startstopwatch=()=>{
    startTime=Date.now()-elapsedTime;

    
}




playbtn.addEventListener('click',startstopwatch)

// pausebtn.addEventListener('click',stopstopwatch)
// resetbtn.addEventListener('click',resetstopwatch)