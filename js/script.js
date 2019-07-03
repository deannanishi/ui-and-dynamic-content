let item = document.getElementById("items");
let addBtn = document.getElementById("add");
let ul = document.getElementById("list");
let err = document.querySelector(".error");

function addItems() {

    //collect the value 
    let val = item.value;
    if (val.length !== 0) {
        
        err.innerText = "";
        
        //create list item
        let li = document.createElement("li");

        //add the content to li
        li.innerText = val;

        ul.appendChild(li);
        
        //access text field and overwright the esisting value with ""
        item.value = "";
        
        //Send cursor back into text box
        item.focus();
        
    } else {
        err.innerText = "Please enter an item and click add";
    }
}
addBtn.addEventListener("click", addItems);