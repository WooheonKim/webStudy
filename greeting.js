const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function handleSubmit(event){ // 이벤트발생
    event.preventDefault();
    paintGreeting(input.value);
    localStorage.setItem(USER_LS, input.value)
}

function paintGreeting(text){ // hello @@
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function askForName(){ // what's your name?
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function loadName() { // main
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();