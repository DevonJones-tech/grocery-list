console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

//grab the add btn eliment

const addBtn = document.querySelector("#add-btn");

//
const updateList = (event) => {
    const icon = event.target;
    icon.classList.toggle("bi-bag")
    icon.classList.toggle("bi-bag-check")
    icon.classList.toggle("in-cart")

}//add btn listener

//this function will remove item
const removeItem = (event) => {
    const icon = event.target;
    icon.parentElement.remove();
}




addBtn.addEventListener("click", () => {
// get info 
    const itemInput = document.querySelector('#item');
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value;

    const itemDiv = buildItem(emoji, item)
    console.log(itemDiv);
    document.querySelector(".right").append(itemDiv)

    itemInput.value = "";
    itemInput.focus();
    emojiSelect.value = "🥣"
}); // end of add button listener 

if(item){
    const itemDiv = buildItem(emoji, item)
    document.querySelector(".right").append(itemDiv)
}else{
    alert("please enter an item name")
}
//this function will build the HTML for each item
function buildItem(emoji, item){

    //create the html element
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    // add the text and class info
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
     emojiSpan.innerText = emoji;
     itemSpan.className = "item-description";
     itemSpan.innerText = item;
     bagIcon.className = "bi bi-bag add-icon";
     bagIcon.addEventListener("click", updateList)
      trashIcon.className = "bi bi-trash delete-icon";
      trashIcon.addEventListener("click", removeItem);
    
      //build component
      itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);

      return itemDiv;
}