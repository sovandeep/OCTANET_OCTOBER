const ib=document.getElementById("input-box");
const listtask=document.getElementById("list");
function addTask(){
    if(ib.value === ''){
        alert("you can't add empty task.you must write something & add some task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ib.value="";
    datasaving();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        datasaving();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        datasaving();
    }
},false);

function datasaving(){
    localStorage.setItem("data",list.innerHTML);
}
function showingTask(){
    list.innerHTML=localStorage.getItem("data");
}
showingTask();