const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

let toDos = [];

function paintToDo(text){ 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    delBtn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos()
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter : array에 있는 모든 아이템에 조건식 값도출
    const cleanToDos = toDos.filter(function(toDo){return toDo.id !== parseInt(li.id)})
    toDos = cleanToDos
    saveToDos()
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function handleSubmit(evnet)
{
    event.preventDefault();
    paintToDo(toDoInput.value);
    toDoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
         //forEach : array에 있는 모든 아이템에 함수 실행
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        } );
    }
}

function init() {
    loadToDos();   
    toDoForm.addEventListener("submit", handleSubmit)
}

init();