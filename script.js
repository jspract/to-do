document.addEventListener("DOMContentLoaded", function() {
    const itemInput = document.getElementById("item-input");
    const addItemButton = document.getElementById("add-item");
    const itemList = document.getElementById("item-list");

    addItemButton.addEventListener("click", function() {
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            addTodoItem(itemText);
            itemInput.value = "";
        }
    });

    function addTodoItem(itemText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const label = document.createElement("label");
        label.innerText = itemText;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
                itemList.appendChild(li);
            } else {
                li.style.textDecoration = "none";
                itemList.prepend(li);
            }
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    }
});
