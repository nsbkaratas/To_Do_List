let submit=document.querySelector("#submit")
let todo=document.querySelector("#todo")
let clear=document.querySelector("#clear")
let ul=document.querySelector("#list")

submit.addEventListener("click", submitInput)

function submitInput(){
    let arr=[]
    //get input value
    submit= document.getElementById("todo").value
    arr.push(submit)

    //iterating through array to append items
    arr.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      })
    document.getElementById("todo").value=""
}

clear.addEventListener("click", clearList)
function clearList(){
    list.remove()
}