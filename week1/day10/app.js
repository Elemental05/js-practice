// console.log(document);
// console.log(document.querySelector('#title'));

// const title = document.querySelector('#title')
// title.textContent = "Поменял";
// title.style.color = "crimson";

// const btn = document.querySelector("#btn");

// function sayHi(){
//     console.log("клик!");
// }

// btn.addEventListener("click", sayHi);

const btn = document.querySelector("#btn");
const title = document.querySelector('#title');

let counter = 0;

function countPlusOne(){
    counter += 1;
    render();
}

function render(){
    title.textContent = `Нажато: ${counter}`;
}

render();
btn.addEventListener("click", countPlusOne);
//
//
const addBtn = document.querySelector("#add-btn");
const todoText = document.querySelector('#todo-input');
const todoList = document.querySelector("#todo-list");

function addTodo(){
    const inputText = todoText.value.trim();
    if(inputText === ""){ return }
    const li = document.createElement("li");
    li.textContent = inputText;
    todoList.append(li);
    todoText.value = "";
}

addBtn.addEventListener("click", addTodo);

function onListClick(e){
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
}

todoList.addEventListener("click", onListClick);

