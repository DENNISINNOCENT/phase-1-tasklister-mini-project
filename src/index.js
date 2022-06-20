document.addEventListener("DOMContentLoaded", () => {
  // your code here 
const form =document.querySelector('form')
const newTask =document.getElementById('new-task-description')
const createTaskBtn = document.querySelector('input[type="submit"]'); 
const ul =document.getElementById('tasks')

function handleSubmit(event){
  event.preventDefault()
  getNewtask()

}
function getNewtask(){
  const task =newTask.value
  createTask(task)
}
function createTask(taskcontent){
  const li =document.createElement("li")
  li.textContent=taskcontent
  ul.appendChild(li)
  form.reset

}
form.addEventListener('submit',handleSubmit)
 
});


