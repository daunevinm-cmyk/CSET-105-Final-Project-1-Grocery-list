let filterMode = "all"; 

function addItem() {
    const input = document.getElementById("search");
    const list = document.getElementById("items");
    const itemText = input.value.trim();

    if (itemText === "") return;

    const newItem = document.createElement("p");
    newItem.textContent = itemText;
    newItem.classList.add("item");

    newItem.onclick = function() {
        newItem.classList.toggle("crossed");
        applyFilter(); 
    };

    list.appendChild(newItem);
    input.value = "";

    applyFilter();
}

function clearItems() {
    document.getElementById("items").innerHTML = "";
}

function toggleFilter() {
    const button = document.getElementById("filter");

    // Cycle through filter modes
    if (filterMode === "all") {
        filterMode = "uncrossed";
        button.textContent = "Show: Uncrossed";
    } else if (filterMode === "uncrossed") {
        filterMode = "crossed";
        button.textContent = "Show: Crossed";
    } else {
        filterMode = "all";
        button.textContent = "Show: All";
    }

    applyFilter();
}

function applyFilter() {
    const items = document.querySelectorAll("#items .item");

    items.forEach(item => {
        if (filterMode === "all") {
            item.style.display = "block";
        } else if (filterMode === "crossed") {
            item.style.display = item.classList.contains("crossed") ? "block" : "none";
        } else if (filterMode === "uncrossed") {
            item.style.display = item.classList.contains("crossed") ? "none" : "block";
        }
    });
}
