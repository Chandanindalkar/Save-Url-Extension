// let dict = [{name: "facebook" , url: "https://facebook.com"}, {name: "google", url: "http://google.com"}];
// window.localStorage.setItem("dict", JSON.stringify(dict));
let dict = []
let storedURL
const btn = document.getElementById("savebtn")
const ul = document.getElementById("ulist") // ul

if (window.localStorage.getItem("dict")){
    storedURL = JSON.parse(window.localStorage.getItem("dict"))
}
else{
    window.localStorage.setItem("dict", JSON.stringify(dict))
}

let newSize;
const first = document.getElementById("up")
const second = document.getElementById("down")

function showInput() {
    first.classList.add("hidden")
    second.classList.remove("hidden")
}


function listReload(){
    if(newSize){
        li = document.createElement("li")
        let p = document.createElement("p")
        let a = document.createElement("a")
        p.textContent = storedURL[newSize - 1].name
        a.setAttribute("href", storedURL[newSize - 1].url)
        a.textContent = "go"
        li.appendChild(p)
        li.appendChild(a)
        let newLi = li
        ul.appendChild(newLi)
    }

}

function btnClick() {
    let obj = {}
    let urlName =  document.getElementById("userInput").value
    obj.name = urlName
    let url = window.location.href
    obj.url = url
    storedURL.push(obj)
    newSize = storedURL.length
    window.localStorage.setItem("dict", JSON.stringify(storedURL))
    first.classList.remove("hidden")
    second.classList.add("hidden")
    listReload()
}

let li

for(let i = 0; i < storedURL.length; i++) {
    li = document.createElement("li")
    let p = document.createElement("p")
    let a = document.createElement("a")
    p.textContent = storedURL[i].name
    a.setAttribute("href", storedURL[i].url)
    a.textContent = "go"
    li.appendChild(p)
    li.appendChild(a)
    let newLi = li
    ul.appendChild(newLi)
}
