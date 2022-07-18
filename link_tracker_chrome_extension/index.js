let myLeads=[];
const inputbtn=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");

const deletebtn=document.getElementById("delete-btn");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

const tabbtn=document.getElementById("tab-btn");
// console.log(leadsFromLocalStorage)




if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

tabbtn.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
    
})

function render(leads){
    let list="";
    for(let i=0 ;i<leads.length;i++){
        // list+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>";
        list+=`<li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML=list
}

deletebtn.addEventListener("click", function(){
   localStorage.clear();
   myLeads=[];
   render(myLeads);
})

inputbtn.addEventListener("click", ()=>{
   myLeads.push(inputEl.value)
   inputEl.value="";

   localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads);
});






