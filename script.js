const userinput=document.getElementById("user-input");
const detailslist=document.querySelector(".detailslist");

function AddList()
{
    const usertext=userinput.value.trim();
    if(usertext==="")
    {
        alert("Enter any text here..")
        userinput.focus();
        return;
    }
    else {
        const li=document.createElement("li");
        li.textContent=usertext;
        detailslist.appendChild(li);

        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    userinput.value="";
    SaveData();
}
userinput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        AddList();
    }
});
detailslist.addEventListener('click',function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    SaveData();
},false)

function SaveData(){
    localStorage.setItem("data",detailslist.innerHTML);
}
function GetData(){
    const data = localStorage.getItem("data");
    if (data) {
        detailslist.innerHTML = data;
    }
}
GetData();



