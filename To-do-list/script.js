document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");
    const list = document.querySelector("#todo-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === "") return;
        
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    });
});