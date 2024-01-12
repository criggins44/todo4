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

