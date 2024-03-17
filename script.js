const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

// when button is clicked (btn) it will alert the 
// addEventListener to call the function ()=>{}
// it will then execute the code inside the bracket {}
// it will create one ("p") and ("img") element

// inside the ("p") element, it will add one input-box. (line 16)
// it will also add ("contenteditable", "true"). (line 17)

// inside the ("img") element the function will add 
// the delete image. (line 20)

// in order to display all of these elements inside of 
// the notes-container
// we are appending the input box and the image inside of 
// the notes-container (line 25)

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// whatever is stored within the html it will be updated 
// and stored within the browser, when calling updateStorage, 
// it will update the data within our browser.

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src =  "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
});