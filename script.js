let list = document.querySelector("#to-do-list")
let addinput = document.querySelector("#add-form input")
let searchInput = document.querySelector("#search-form input")
let addBtn = document.querySelector("#add-form button")

list.addEventListener("click",(e)=>{
    if(e.target.nodeName =="SPAN"){
        e.target.parentNode.remove()
        if(list.children.length ==  0){
            listEmptyMsg = document.createElement("div")
            listEmptyMsg.style.textAlign = "center"
            listEmptyMsg.style.color = "#333"
            listEmptyMsg.innerText = "your list is empty"
            listEmptyMsg.id = "emptyMsg"
            list.appendChild(listEmptyMsg)
        }

    }
 }
)
addBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!addinput.value) 
    return

    if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove()
    }

   list.appendChild(createListItem(addinput.value))
   addinput.value = ""
})
function createListItem (itemValue){
    let item= document.createElement("li")
    let title = document.createElement("span")
    let btn  = document.createElement("span")

    item.className = "to-do-list"

    title.className = "title"
    title.innerText = itemValue

    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)

    return item
}
searchInput.addEventListener("input",(e)=>{
    Array.from(list.children).forEach(elemet =>{
        if(document.querySelector("#emptyMsg"))
        return
        if(!elemet.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
             elemet.style.display = "none"
        }else{
            elemet.style.display = "flex"
        }
    })

})