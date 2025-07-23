import './style.css'

interface Todo{
  title: string;
  isCompleted: boolean;
  readonly id:string;
}

const todos:Todo[]=[];

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit=(e: SubmitEvent)=>{
  e.preventDefault();
  const newTodo:Todo = {
    title:todoInput.value,
    isCompleted:false,
    id:String(Math.random()*1000),
  };
  todos.push(newTodo);
  todoInput.value="";
  renderTodo(todos);
}

const generateTodoItem=(title:string, isCompleted:boolean, id:string)=>{
  const todo:HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  //Creating a checkbox
  const checkBox:HTMLInputElement = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className="isCompleted";
  checkBox.checked=isCompleted;
  checkBox.onchange=()=>{
    todos.find(item=>{
      if(item.id===id){
        item.isCompleted=checkBox.checked;
      }
    });
    paragraph.className = checkBox.checked? "textCut" : "";
  }

  //Creating P for title
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText=title;
  paragraph.className = checkBox.checked? "textCut" : "";
  
  //Creating delete button
  const deleteButton:HTMLButtonElement = document.createElement("button");
  deleteButton.innerText="X";
  deleteButton.className="deleteButton";
  deleteButton.onclick=()=>{
    deleteTodo(id);
  };

  //  Appending all to Todo item
  todo.append(checkBox,paragraph,deleteButton);
  todoContainer.append(todo);
}

const deleteTodo=(id:string)=>{

  const idx = todos.findIndex(item => item.id===id);
  todos.splice(idx,1);
  renderTodo(todos);
}
const renderTodo=(todos:Todo[])=>{
  todoContainer.innerText="";
todos.forEach(item => {
generateTodoItem(item.title,item.isCompleted,item.id);
});
}
