let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let con = document.querySelector("#container")
let btn = document.querySelector("#btnclear")
let modes = document.querySelector("#modes")
let body = document.querySelector("body")


const saveTodo = (e)=>{
    e.preventDefault();
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li)
let button = document.createElement("button");
button.innerText = "delete"
li.className = ("list-group-item rounded-0 h3")
button.className =("btn btn-danger float-end rounded-0")
li.appendChild(button);



form.reset();
}
form.addEventListener("submit", saveTodo);

const remove = (e)=>{
    if(e.target.className.includes("btn-danger")){
        let newLi = e.target.parentElement
        if(window.confirm("Are you sure")){
            ul.removeChild(newLi)
        }
        
    }
}
ul.addEventListener("click", remove)

const removeAll = ()=>{
    console.log(window.confirm("Are you sure"))
    ul.innerText =""
    // console.log("clear")
}

btn.addEventListener("click", removeAll)
let count = 0
const  mode = ()=>{
    if(count === 0){
        body.style.backgroundColor ="white"
        count = 1
    }
    else {
        body.style.backgroundColor ="gray"
        count = 0
    }
}
modes.addEventListener("click",mode)


