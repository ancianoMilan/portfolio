// Random Quote Generator
const quote = document.querySelector("#quote");
const person = document.querySelector("#person");
const button = document.querySelector("#button");
const quotes = [
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`
    },
    {
        quote: `"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."`,
        person: `Winston Churchill`
    },
    {
        quote: `"Don't let yesterday take up too much of today."`,
        person: `Will Rogers`
    },
    {
        quote: `"You learn more from failure than from success. Don't let it stop you. Failure builds character."`,
        person: `Unknown`
    },
    {
        quote: `"It's not whether you get knocked down, it's whether you get up."`,
        person: `Vince Lombardi`
    },
    {
        quote: `"If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."`,
        person: `Steve Jobs`
    },
    {
        quote: `"People who are crazy enough to think they can change the world, are the ones who do."`,
        person: `Rob Siltanen`
    },
    {
        quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
        person: `Franklin D. Roosevelt`
    },
    {
        quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
        person: `Margaret Mead`
    },
    {
        quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: `Robert Louis Stevenson`
    },
];

button.addEventListener("click", function(){
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomQuote].quote;
    person.innerText = quotes[randomQuote].person;
});
// Random Quote Generator

// Palindrome Checker
const input = document.querySelector("#input");
const h1 = document.querySelector(".h1");
const checkButton = document.querySelector("#checkButton");

function reverseString (str){
    return str.split("").reverse().join("");

}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    if(value === ""){
        h1.innerHTML = "Enter a word";
    }else if(value === reverse){
        h1.innerHTML = "Palindrome!";
    }else{
        h1.innerHTML = "Not Palindrome";
    }
    input.value = "";
}
// Palindrome Checker

// Color Flipper 
const backgroundColor = document.querySelector(".project-3");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const random = document.querySelector("#random");

function setColor(color){
    backgroundColor.style.backgroundColor = color;
}
function randomColor(){
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    backgroundColor.style.backgroundColor = color;
}

// Color Flipper 


// To do List

const newTask = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-todo");
const clearButton = document.querySelector("#clear-todo");
const ul = document.querySelector("#todo-list");
addButton.classList.add("toDoButtons");
clearButton.classList.add("toDoButtons");   

addButton.addEventListener("click", function(){

    let task = newTask.value;
    if(task != ""){
        let li = document.createElement("li");
        li.classList.add("liTodo");
        li.textContent = task;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("todoButton");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(){
            li.remove();
        })

        let doneButton = document.createElement("button");
        doneButton.classList.add("todoButton")
        doneButton.textContent = "Done";
        doneButton.addEventListener("click", function(){
            li.style.textDecoration  = "line-through";
            doneButton.remove();
        });

        li.appendChild(deleteButton);
        li.appendChild(doneButton);
        ul.appendChild(li);

        task.value = "";
    }else{
        alert("Enter a task");
    }
});

clearButton.addEventListener("click", function(){
    ul.innerHTML = "";
});

// To do List