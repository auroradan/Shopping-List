function addTask () {
  var input = document.getElementById("input");
  var newTask = input.value;
  if (newTask != "") {
    var item = document.createElement("li");
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" value="!" onclick="important(this.parentNode)" style="width:30px"/>' + " " + newTask; document.getElementById("tasks").appendChild(item);  
    input.value = "";
    input.placeholder = "enter next item...";
  }
}

function markDone (item) { 
    item.className = 'finished';
}

function remove (item) {
  if (item.className == 'finished'){
       item.remove();
  }
}

function doAbout() {
  var about = document.getElementById("divabout");
  about.innerHTML = "Created by University of Virginia student, Dan Tran! 11/19/22";
}

function important(item){
  item.className = "important";
}