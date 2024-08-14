const form = document.getElementById('form');
const text = document.getElementById('text');
const taskList = document.getElementById('task-list');

//Event listner

// click, submit,

form.addEventListener('submit', function(e){  //e -event
    e.preventDefault(); //to avoid default behaviour
    const taskText = text.value;
    if(taskText !== ''){
        const enteredInput = document.createElement('li');
        enteredInput.innerText = taskText;
        taskList.appendChild(enteredInput);
        enteredInput.classList.add('list-item');
        const deleteBtn = document.createElement('button');
        enteredInput.appendChild(deleteBtn);
        deleteBtn.innerText = 'X';

        deleteBtn.classList.add('remove');

        deleteBtn.addEventListener('click',function(){
            enteredInput.remove();
        })
    }

})