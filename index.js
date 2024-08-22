const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {

  axios.get("https://crudcrud.com/api/ba410f41b043406cab051d487ecfdad4/todo")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  
}

function postTodo() {
  axios
     .post("https://crudcrud.com/api/ba410f41b043406cab051d487ecfdad4/todo",{
        title: "Buy fruits",
        completed:false,
       })
       .then((res) => console.log(res))
       .catch((err) => console.log(err)); 
}

function putTodo() {
  axios.put("https://crudcrud.com/api/ba410f41b043406cab051d487ecfdad4/todo/6675a93719f3e403e81e38df",{
    title:"Learn Axios",
    completed:true,
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}

function deleteTodo() {
  axios.delete("https://crudcrud.com/api/ba410f41b043406cab051d487ecfdad4/todo/6675597d19f3e403e81e37e3")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}
