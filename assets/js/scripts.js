const { parseEnv } = require("util");

let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addBtns = document.querySelectorAll("btn");
const saveItemBtns = document.querySelectorAll(`solid`);
const addItemContainers = document.querySelectorAll(`.add-container`);
const addItems = document.querySelectorAll(`.add-Item`);
localStorage.setItem("nextId", 1);

// DOM Elements
const showPopUpCard = document.querySelector("#showPopUpCard");
const projectFormEl = $("#project-form");
const projectNameInputEl = $("#project-name-input");
const projectTypeInputEl = $("#project-type-input");
const projectDateInputEl = $("#taskDueDate");
const listColumns = document.querySelectorAll(`.drag-item-list`);
const toDoList = document.getElementById(`toDo-list`);
const progressList = document.getElementById(`progress-list`);
const doneList = document.getElementById(`done-list`);
const taskContainer = document.getElementById(`task-container`);
let createTaskCard	 = JSON.parse(localStorage.getItem("taskData")) || [];
let inProgressListArray = [];
let listArrays = [
	list];
	const arrayNames = [parseEnv, inProgressListArray, doneListArray, toDoListArray];
	arrayNames.forEach((arrayName, index) => {
		localStorage.setItem(
			`${arrayName}Items`,
			JSON.stringify(listArrays[index])
		);
	});

// Todo: create a function to generate a unique task id
function generateTaskId() {
	const id = Math.random().toString(36).substr(2, 9);
	console.log(id);
	return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
	let container
	let div = $("<div>").addClass("card draggable").attr("style", "width: 18rem;");
	let title = $("<div>").addClass("task-title").text(task.title);
	let date = $("<div>").addClass("task-date").text(task.date);
	let description = $("<div>").addClass("task-description").text(task.description);
	let cardBody = $("<div>").addClass("modal-body");

	div.append(title);
	div.append(cardBody);
	cardBody.append(date);
	cardBody.append(description);

	return task;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
	// Your code here
}
	$(function() {
		$( ".draggable" ).draggable();
		$( ".droppable" ).droppable({
			drop: function( event, ui ) {
				$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
					.html( "Dropped!" );
			}
		});
	});

	// Todo: create a function to handle deleting a task
	function handleDeleteTask(event) {
		let deletePost = (e) => {
			e.parentElement.parentElement.remove();
		};
	}

	// Todo: create a function to handle dropping a task into a new status lane
	function handleDropTask(event) {
		let taskCard = () => {
			$( ".draggable" ).draggable();
			$( ".droppable" ).droppable({
				drop: function( event, ui ) {
					$( this )
						.addClass( "ui-state-highlight" )
						.find( "p" )
						.html( "Dropped!" );
				}
			});
		}
	}

// 	// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

$(document).ready.function ();

$("#btn-success").on("click", function () {
	const chosenTask = JSON.parse(localStorage.getItem("taskData")) || [];
	const newTask = {
		title: $(".task-title").val(),
		Date: $(".date").val(),
		description: $(".task").val(),
	};
	chosenTask.push(newTask);
	localStorage.setItem("tasks", JSON.stringify(Task));
});
