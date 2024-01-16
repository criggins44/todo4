let addTodo = () => {
	let todoText = document.getElementById(todo-text).value;
	if (todoText != ''){
		setData(todoText); //adding item to local storage
		listTodo(); //showing item from local storage
	}
}

let setData = (item) => {
	if (getData(item) != false) {
		alert ("item already added in todo")
	} else {
		let data = getData(); //call getData handler for getting data from list
		data = (data != false) ? data : [];
		data.push(item);
		data = JSON.stringify(data);
		localStorage.setItem('mytodo', data);
	}
}

let getData = (item = null) => {
	let data = JSON.parse(localStorage.getItem('mytodo'));
	if (data){

		if(item) {
			if(data.indexOf(item) != -1) {
				return data[item];
			} else {
				return false;
			}
		}
		return data;
	}
	return false;
}

let listTodo = () => {
	let html = '';
	let data = getData(); // getting item from local storage
	if (data) {
		html += '<ol>';
		data.forEach((value, item) => {
			html += `<li>${value} &nbsp;&nbsp;&nbsp;<button onclick="removeData(${item})">Remove</button></li>`;
		});
		html += '</ol>';
	}
	document.getElementById('todo-item').innerHTML = html;
}

let removeData() = (itemId) => {
	let data = getData();
	if (data){
		let newData = data.filter((v,i) => {return i != itemId});
		newData = JSON.stringify(newData);
		localStorage.setItem('mytodo',newData);
		listTodo();
	} else {
		alert("no data found");
	}
}


