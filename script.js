var count = 0;
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var date = document.getElementById("date");
function addTask() {
  count++;
  console.log("Task added");

  if (title.value != "" && date.value != "" && desc.value != "") {
    createDiv(count);
    title.value = "";
    date.value = "";
    desc.value = "";
  } else {
    document.getElementById("error").innerText = `Enter all the details`;
  }
}

function createDiv(count) {
  var taskDiv = document.createElement("div");
  taskDiv.id="taskDiv"+count
  taskDiv.classList.add(
    "card",
    "text-center",
    "w-25",
    "mt-2",
    "mb-2",
    "m-auto"
  );
  taskDiv.innerHTML += `
  <div class="card-header">
    Task${count}
  </div>
  <div class="card-body">
    <h5>
    <span>Title:</span><input type='text' id="title${count}" class='text'value=${title.value} readOnly>
    </h5>
    <p>
    <span>Description:</span><input type='text' id="desc${count}" class='text'value=${desc.value} readOnly>
    </p>
    <button id="edit${count}"class="btn btn-primary" onclick="editTask(${count})">Edit</button>
    <button id="delete${count}"class="btn btn-danger" onclick="deleteTask(${count})">Delete</button>
  </div>
  <div id=class="card-footer text-muted">
  <span>Date:</span><input type='text' id="date${count}"class='text'value=${date.value} readOnly>
  </div>
    `;
  document.body.append(taskDiv);
}
// edit Task
function editTask(id){  
    document.getElementById("title"+id).removeAttribute('readonly');
    document.getElementById("date"+id).removeAttribute('readonly');
    document.getElementById("desc"+id).removeAttribute('readonly');
    document.getElementById("title"+id).style.background="lightgrey";

    document.getElementById("date"+id).style.background="lightgrey";
    document.getElementById("desc"+id).style.background="lightgrey";
}

// delete Task

function deleteTask(divId){
    let deleteRequest="Are you sure to delete this task?";
    if(confirm(deleteRequest)==true){
        document.getElementById("taskDiv"+divId).remove();
    }  
}

