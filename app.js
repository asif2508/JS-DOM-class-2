let taskList = ["I will go to gym", "I will take bath and have breakfast"];

const loadTask = () => {
  // 1. we need to get the parent element by id or classname
  // 2. we need to create a new element
  // 3. we need to add something content to the new element
  // 4. we need to add the new element tp the parent element
  const list = document.getElementById("list");
  for (const task of taskList) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p">${task}<span onclick="deleteTask('${task}')" class="text-red-500 ms-2 cursor-pointer">X</span></p>`;
    list.appendChild(listItem);
  }
};


const addTask = () => {
    const input = document.getElementById("task");
    const inputValue = input.value;
    taskList.push(inputValue);
    
    const ulElement = document.getElementById("list");
    ulElement.innerHTML = "";
    input.value = "";
    loadTask();
}


const deleteTask = (deletedTask) => {
const removedList = taskList.filter(task => task !== deletedTask);
taskList = removedList;
const ulElement = document.getElementById("list");
ulElement.innerHTML = "";
loadTask();
}


loadTask();
