var count = 0;
var rows = []

function del(row) {
    var points = document.getElementById("points");
    var index = rows.indexOf(row);
    points.deleteRow(index + 1);
    rows.splice(index, 1);
}

function addRow() {
  rows.push(count);
  var points = document.getElementById("points");

  var row = points.insertRow();

  var col1 = row.insertCell();
  var col2 = row.insertCell();
  var col3 = row.insertCell();
  var col4 = row.insertCell();


  var xTextBox = document.createElement("input");
  var yTextBox = document.createElement("input");
  var headingTextBox = document.createElement("input");
  var deleteButton = document.createElement("button");

  xTextBox.setAttribute("type", "number");
  yTextBox.setAttribute("type", "number");
  headingTextBox.setAttribute("type", "number");

  xTextBox.setAttribute("value", 0);
  yTextBox.setAttribute("value", 0);
  headingTextBox.setAttribute("value", 0);

  deleteButton.innerHTML = "Delete"
  deleteButton.setAttribute("onclick", "del(" + count + ")");
  deleteButton.className  = "delButton";

  var name1 = "x" + count;
  var name2 = "y" + count;
  var name3 = "theta" + count;

  console.log(name1);
  console.log(name2);
  console.log(name3);

  xTextBox.id = name1;
  yTextBox.id = name2;
  headingTextBox.id = name3;

  col1.appendChild(xTextBox);
  col2.appendChild(yTextBox);
  col3.appendChild(headingTextBox);
  col4.appendChild(deleteButton);

  count = count + 1;
}
