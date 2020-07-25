
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var time = document.getElementById("time");

var currentTime = new Date();
var cDate = currentTime.getDate();
var cMonth = currentTime.getMonth();
var cYear = currentTime.getFullYear();
var cDay = currentTime.getDay();
time.innerHTML = months[cMonth] + " " + cDate + ", " + cYear + " " + days[cDay];

function myFunction(event) {
    var x = event.keyCode;
    if (x == 13) {
        addItem();
    }
}

function addItem() {
    var todo_list = document.getElementById("todo-list");
    var todo_input = document.getElementById("todo-input");

    if (todo_input.value != "") {
        var div1 = document.createElement("div");

        var div2 = document.createElement("div");
        var input1 = document.createElement("input");
        input1.setAttribute("type", "checkbox");
        input1.setAttribute("class", "item-checkbox");
        input1.setAttribute("onclick", "check(this)")
        div2.appendChild(input1);

        var span1 = document.createElement("span");
        var span1TN = document.createTextNode(todo_input.value);
        span1.appendChild(span1TN);
        span1.setAttribute("class", "item-text");
        div2.appendChild(span1);

        div2.setAttribute("class", "item-div");

        div1.appendChild(div2);

        var div3 = document.createElement("div");
        var a1 = document.createElement("a");
        a1.setAttribute("href", "JavaScript:void(0)");
        a1.setAttribute("class", "btnEdit");
        a1.setAttribute("onclick", "");

        var a2 = document.createElement("a");
        a2.setAttribute("href", "JavaScript:void(0)");
        a2.setAttribute("class", "btnDelete");
        a2.setAttribute("onclick", "deleteItem(this)");

        var i2 = document.createElement("i");
        i2.setAttribute("class", "fa fa-trash-o");
        i2.setAttribute("aria-hidden", "true");
        a2.appendChild(i2);
        div3.appendChild(a2);

        div3.setAttribute("class", "btn-div");

        div1.appendChild(div3);

        div1.setAttribute("class", "line");

        todo_list.appendChild(div1);

        todo_input.value = "";
    }
}

function deleteItem(dr) {
    dr.parentNode.parentNode.remove();
}

function deleteAll() {
    var todo_list = document.getElementById("todo-list");
    todo_list.innerHTML = "";
}

function check(c) {
    var cItem = c.nextSibling;
    if (c.checked) {
        cItem.style.color = "lightgrey";
        cItem.style.textDecoration = "line-through";
    }
    else {
        cItem.style.color = "white";
        cItem.style.textDecoration = "none";
    }
}

