var items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addTodo(){
	let inputBox = document.querySelector("#todo-input");
	let item = inputBox.value;

	if (item ==="")
		return (document.getElementById("list").innerHTML = "Insert a task");

	items.push({
		value: item,
	});

	localStorage.setItem("todo-list", JSON.stringify(items));
	listItems();
	inputBox.value ="";
}

function deleteItem(index){
	items.splice(index, 1);
	localStorage.setItem("todo-list", JSON.stringify(items));
	listItems();
}

function listItems(){
	let list ="";
	for (var i = 0; i < items.length; i++){
		list += "<li>";
		list += items[i].value + " ";
		list += 
		"<span onclick='deleteItem(" +
		i +
		")'><button class='remove'>Remove</button></span></li>"
	}
	document.querySelector("#todo-list").innerHTML = list;
}

listItems();



