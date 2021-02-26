
let todoItem = document.querySelector("#resultDiv");
let p = document.querySelector('#result')
todoItem.addEventListener('click', function(e) {
    if(e.target.tagName === 'P') {
        e.target.classList.toggle('clicked');
    }
})

const deleteButton = (item) => {
    let addDeleteButton = document.createElement('span');
    let deleteIcon = document.createTextNode('x');

    addDeleteButton.className = "close";
    addDeleteButton.appendChild(deleteIcon);

    item.appendChild(addDeleteButton);

    addDeleteButton.addEventListener('click', ()=> {
        addDeleteButton.parentElement.style.display = 'none';
    })
}

const addTodos = () => {
    let list = document.createElement('P');
    let addTodo = document.querySelector('#addTodo').value;
    let text = document.createTextNode(addTodo);
    list.appendChild(text);
    if (addTodo === '') {
        let error = document.querySelector('#error').innerHTML = 'Please add a todo';
       
    } else {
        document.querySelector('#result').appendChild(list).classList.add('result');
        error.innerHTML = '';
        
    }
   
    document.querySelector('#addTodo').value = '';
   

    deleteButton(list)

    // let span = document.createElement("span");
    // span.className = 'close';
    // span.appendChild(txt);
    // list.appendChild(span);

 

    // let todos = [];

    // todos.push(addTodo);
    // const todoList = todos.map(item => item)
    // document.querySelector("#result").innerHTML = todoList;
}

document.querySelector(".btn").addEventListener('click', addTodos)

