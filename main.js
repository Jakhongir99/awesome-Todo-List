const TodoInput = document.querySelector("#TodoInput");
const TodoBtn = document.querySelector("#TodoBtn");
const listItem = document.querySelector(".list-Item");

TodoBtn.addEventListener('click',AddFunction);

listItem.addEventListener("click",DeleteHandler);

function AddFunction() {
	if(TodoInput.value ==="") {
		alert("brat qo'ysezchi endi bo'ladigan ishni qiling iltimos!");
	}
	else {
	newDiv = document.createElement("div");
	newDiv.classList.add("wrapperLi");
	newLi = document.createElement("li");
	newLi.innerText = TodoInput.value;
	checkBtn = document.createElement("button");
	checkBtn.classList.add("checkBtn");
	checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
	deleteBtn = document.createElement("button");
	deleteBtn.classList.add("deleteBtn");
	deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
	newDiv.appendChild(newLi);
	newDiv.appendChild(checkBtn);
	newDiv.appendChild(deleteBtn);
	listItem.appendChild(newDiv);
	TodoInput.value="";
	}
}



function DeleteHandler(e) {
	const item = e.target;
	if(item.classList[0]==="deleteBtn") {
		const todo = item.parentElement;
		todo.classList.add('blacks')
		todo.addEventListener("transitionend",function() {
		todo.remove();
		})
	}

	if(item.className[0]==="checkBtn");
	const todo = item.parentElement;
	todo.classList.toggle("completed");
}
