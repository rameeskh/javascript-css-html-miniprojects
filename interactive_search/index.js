const search =document.querySelector(".search");
const btn =document.querySelector(".btn");
const input=document.querySelector(".input");


btn.addEventListener('click', () => {
    if(search.classList.length===2){
        search.classList.remove("active");
    }
    else{
        search.classList.add("active");
        input.focus();
    }
})