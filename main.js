const input = document.getElementById("input");
    const list = document.getElementById("list");

    function addTask() {
        if (input.value === '') {
            alert("Enter task first");
        } else {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const icon = document.createElement("i");
            
            // Set value in h3 
            h3.innerHTML = input.value;
            img.src = "images/unchecked.png";
            img.classList.add('img');
            icon.classList.add('icon', 'fa-solid', 'fa-trash');

            // Add image, h3, and icon in li
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(icon);

            // Add li inside ul
            list.appendChild(li);

            // Set onclick attributes
            img.setAttribute('onclick', 'toggleCheck(this)');
            icon.setAttribute('onclick', 'removeTask(this)');

            saveData();
        }
        input.value = '';
    }

    function toggleCheck(img) {
        const h3 = img.nextElementSibling;
        img.src = img.src.includes("unchecked.png") ? "images/checked.png" : "images/unchecked.png";
        h3.classList.toggle("checked");
        saveData();
    }

    function removeTask(icon) {
        const li = icon.parentElement;
        list.removeChild(li);
        saveData();
    }

    function saveData() {
        localStorage.setItem("data", list.innerHTML);
    }

    function showData() {
        const data = localStorage.getItem("data");
        if (data) {
            list.innerHTML = data;
            // Reattach event listeners
            const imgs = list.querySelectorAll('.img');
            const icons = list.querySelectorAll('.icon');
            imgs.forEach(img => {
                img.setAttribute('onclick', 'toggleCheck(this)');
            });
            icons.forEach(icon => {
                icon.setAttribute('onclick', 'removeTask(this)');
            });
        }
    }

    showData();