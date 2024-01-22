console.log('working');
var itemsInput = document.getElementById('itemsText');
var list = document.getElementsByClassName('listItems');
var listBox = document.getElementById('listWhole');
var addButton = document.getElementById('addButton'); //button for adding a new task
var divvy = document.getElementById('taskInfo'); //area to displaying the todos
var clearButton = document.getElementById('clear');
// * update UI with the new item

var existingItems = localStorage.getItem('itemsInput');
if (!existingItems) localStorage.setItem('itemsInput', JSON.stringify([]));
if (existingItems) {
	existingItems = JSON.parse(existingItems);
	// clear the container div called divvy
	divvy.innerHTML = '';

	// * for EVERY ITEM put it on the page
	for (var i = 0; i < existingItems.length; i++) {
		// creates new div
		console.log(existingItems[i]);
		var div = document.createElement('div');
		div.classList.add('listItems');
		// set text to inside the new div
		div.innerHTML = existingItems[i];
		// add new div to the divvy container
		divvy.appendChild(div);
	}
}
addButton.addEventListener('click', function (event) {
	event.preventDefault();
	console.log(itemsInput);
	// get value from input
	var itemValue = itemsInput.value;
	// todo: get existing items from local storage
	// todo: if there are existing items in local storage
	if (!existingItems) {
		existingItems = [];
	} else {
		existingItems = JSON.parse(localStorage.getItem('itemsInput'));
	}
	if (!existingItems) localStorage.setItem('itemsInput', JSON.stringify([]));

	console.log(existingItems);

	// add itemValue to the existing values - .push()
	existingItems.push(itemValue);
	// set the updated list to local Storage
	localStorage.setItem('itemsInput', JSON.stringify(existingItems));

	console.log(existingItems); // will print out the updated list

	// * update UI with the new item

	// clear the container div called divvy
	divvy.innerHTML = '';

	// for EVERY ITEM put it on the page
	for (var i = 0; i < existingItems.length; i++) {
		// creates new div
		console.log(existingItems[i]);
		var div = document.createElement('div');
		div.classList.add('listItems');
		// set text to inside the new div
		div.innerHTML = existingItems[i];
		// add new div to the divvy container
		divvy.appendChild(div);
	}
	itemsInput.value = '';
	//.innterHTML = JSON.parse(existingItems);
});

// todo create a button that clears the list...
clearButton.addEventListener('click', function () {
	divvy.innerHTML = '';
	localStorage.removeItem('itemsInput');
});
