
const todoActive = document.getElementById('todo-active');
const todoCompleted = document.getElementById('todo-completed');

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('addBtn');

let todosActive = [];
let todosComplete = [];

//todo object structure in the array
/*let todo = [
    {
        id:1,
        text:'whatever',
        completed:false
    }
];
*/


//on addBtn click

addBtn.addEventListener('click', function(){
    if(todoInput.value !== ''){
        todosActive.push(todoInput.value);
    
    //console.log(todos);
        addTodo();
    } else {
        alert('Did you forget to add some text');
    }  
});

//on Enter

todoInput.addEventListener('keydown', function (e) {
    let value = this.value;
    if (e.code === 'Enter' && value) {
        todosActive.push(todoInput.value);
    
        //console.log(todos);
        addTodo();
        todoInput.value = '';
    }
});


function createTodoDiv(todoName){
    const todoListItem = document.createElement('LI');
    const label = document.createElement('label');   
    const checkBox = document.createElement('input');
    const editInput = document.createElement('input');      // Input (text)
    const editButton = document.createElement('button');    // Button.edit 
    const deleteBtn = document.createElement('BUTTON');
    const iconC = document.createElement('i');
    const iconD = document.createElement('i');

    checkBox.type = 'checkbox';
    editInput.type = 'text';            //
    editButton.innerText = 'Edit';      //
    editButton.className = 'edit';      //
    deleteBtn.classList.add('delete');
    let clsD = ['fas', 'fa-trash'];
    iconD.classList.add(...clsD);

    label.innerText = todoName;
    todoListItem.appendChild(checkBox);
    todoListItem.appendChild(label);
    todoListItem.appendChild(editInput);
    todoListItem.appendChild(editButton);
    todoListItem.appendChild(deleteBtn);
    
    checkBox.addEventListener('change',todoComplete);
    
    editButton.addEventListener('click', editTodo);
    deleteBtn.setAttribute('class', 'btn');
    deleteBtn.appendChild(iconD);
    deleteBtn.addEventListener('click', deleteTodo);         

    return todoListItem;
}

let addTodo = function() {                            // Add a new task
    let todoListName = todoInput.value;   // We hold the current value or provide the default one
    let todoItem = createTodoDiv(todoListName);  // Create a new list item with the text from #new-task
    todoActive.appendChild(todoItem);        // Append listItem to incompleteTasksHolder
          // We bind it to the incomplete holder
    todoInput.value = '';                               // Resets the field
};                         


let deleteTodo = function() {      // Delete an existing task
    let listItem = this.parentNode;  // We use parentNode to target the object containing the delete button
    let ul = listItem.parentNode;    // We use parentNode again to target the list containing the task
    ul.removeChild(listItem);        // Remove the parent list item from the ul
};


let todoComplete = function() {               // Mark a task as complete
    let listItem = this.parentNode;            // We assign it for readability
    todoCompleted.appendChild(listItem);         // Append the task list item to the #completed-tasks    
};  

let editTodo = function() {                                     // Edit an existing task
    let listItem = this.parentNode;                               // Create List Item
    let editInput = listItem.querySelector('input[type=text]');    // Input (text)
    let label = listItem.querySelector('label');                  // Label
    let button = listItem.getElementsByTagName('button')[0];      // Button
  
    let containsClass = listItem.classList.contains('editMode');  // We check for .editMode and assign it a letiable
    if(containsClass) {                                           // Switch from .editMode
        label.innerText = editInput.value;                        // Label text become the input's value
        button.innerText = 'Edit';                                // Buttons name modified to Edit
    } else {                                                      // Switch to .editMode
       editInput.value = label.innerText;                         // Input value becomes the label's text
       button.innerText = 'Save';                                 // Button name modified to Save
    }
      listItem.classList.toggle('editMode');                      // Toggle .editMode on the parent
  };
  

