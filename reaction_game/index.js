const btn1=document.getElementById("start-btn");



const randomNumber=(start,end)=>{
    const num=start+Math.floor(Math.random()*(end-start+1))
    return num;
}

let startTime, currTime;

const getDifference=(startTime,endTime)=>{
    let ans=(endTime-startTime)+"ms";
    return ans;
  
}

const showShape=()=>{
    //height
    //border radius
    //bg color
    //left
    //top
    if(startTime!=undefined){
        currTime=new Date();
        const timeTaken=document.getElementById('time-taken');
        timeTaken.innerHTML=getDifference(startTime,currTime);
        startTime=currTime;
    }
    else{
        startTime=new Date();
    }

    const main=document.getElementById('main');
    const parentWidth=main.offsetWidth;
    const parentHeight=main.offsetHeight;


    const shape=document.getElementById("shape")
    
    shape.style.height=`${randomNumber(50,parentWidth*0.3)}px`
    shape.style.width=shape.style.height;

    var borderRadius=randomNumber(0,50)
    shape.style.borderRadius=`${borderRadius}%`
    
    var left=randomNumber(0,parentWidth*0.7)
    var top=randomNumber(0,parentHeight-shape.offsetHeight)

    shape.style.left=left+"px";
    shape.style.top=top+"px";

    const color=`rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`
    shape.style.backgroundColor=color;

    shape.style.display="block"

    const btn1=document.getElementById('start-btn')
    btn1.disabled = true;
}

btn1.addEventListener('click',showShape);

const shape=document.getElementById("shape")

shape.addEventListener('click',showShape)

const btn2=document.getElementById('reset-btn')
btn2.addEventListener('click',()=>{
    shape.style.display="none"
    btn1.disabled = false;
    const timeTaken=document.getElementById('time-taken');
    timeTaken.innerHTML="";
    startTime=undefined
})