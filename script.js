var items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addTodo(){
	let inputBox = document.querySelector(#todo-input);
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
	localStorage.setItems("todo-list", JSON.stringify(items));
	listItems();
}



