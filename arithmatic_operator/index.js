let para=document.getElementsByTagName("p");
// console.log(para);
// console.log(para);
let input1=document.getElementById("num1");
let input2=document.getElementById("num2");
let operator =document.getElementById("operator")
let result=document.getElementById("result");


function calculateResult(){
    let num1=parseInt(input1.value);
    let num2=parseInt(input2.value);


    let op=operator.value;

    if(op==="/" && num2==0){
        result.innerText="cannot perform this operation"
    }
    switch(op){
        case "+":
            result.innerText="Ans = "+(num1+num2);
            break;
         case "-":
             result.innerText="Ans = "+(num1-num2);
             break;
         case "*":
             result.innerText="Ans = "+(num1*num2);
              break;
        case "/":
            result.innerText="Ans = "+(num1/num2);
            break;
        default:
        break;
    }
}


function changeText(){
    para[0].innerText="bye";
    para[1].innerText="guys";
    para[2].innerText="see";
    para[3].innerText="you in";
    para[4].innerText="next class";
}