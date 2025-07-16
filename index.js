let formInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");
let userData = document.getElementById("list-result");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (formInput.value.trim() === "") {
    alert("Please enter the value");
    return;
  }
  //userinput to list
  const li = document.createElement("li");
  li.textContent = formInput.value;

  //adding cross btn to list
  const span = document.createElement("span");
  span.textContent = "";
  span.classList.add("cross-btn");
  li.appendChild(span);

  span.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure want to delete thsi task?");
    if (confirmDelete) {
      li.remove();
    }
  });

  //add task edit btn
  const taskEditbtn = document.createElement("button");
  taskEditbtn.textContent = "Edit";
  taskEditbtn.classList.add("edit-btn");
  li.appendChild(taskEditbtn);

  //add fucntionality to edit btn

  taskEditbtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", li.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      li.textContent = newTask.trim();
      li.appendChild(span);
      li.appendChild(taskEditbtn);
    }
  });
  userData.appendChild(li);
  formInput.value = "";
});
