var items = JSON.parse(localStorage.getItem("todo-list")) || [];
// variable is the object stored in local storage or an empty array

function addTodo(){
	let inputBox = document.querySelector("#todo-input");
	let item = inputBox.value;
	// assigns value for item entered in textbox

	if (item ==="")
		return (document.getElementById("list").innerHTML = "Insert a task");
// prompts user to enter a task

	items.push({
		value: item,
	});
// adds the entered task into the empty array

	localStorage.setItem("todo-list", JSON.stringify(items));
	listItems();
	inputBox.value ="";
// stores the task into local storage and clears the task entry box
}

function deleteItem(index){
	items.splice(index, 1);
//removes the item at the selected index from the array
	localStorage.setItem("todo-list", JSON.stringify(items));
//stores the new array into local storage, minus the deleted item
	listItems();
//displays todos retrieved from local storage
}

function listItems(){
	let list ="";
	for (var i = 0; i < items.length; i++){
		list += "<li>";
// creates a list element
		list += items[i].value + " ";
//inserts the value from the input box into the list element
		list += 
		"<span onclick='deleteItem(" +
		i +
		")'><button class='remove'>Remove</button></span></li>"
// adds a remove button that calls delete function to remove indexed value and spaces
	}
	document.querySelector("#todo-list").innerHTML = list;
//displays listed items and remove button
}

listItems();



