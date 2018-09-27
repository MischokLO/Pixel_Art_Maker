//setting the color variable to a default color, because otherwise it would bug, when you dont subbmit any color
var color = "#000000";

// Select color input
const colorInput = document.getElementById("colorPicker");
colorInput.addEventListener("change", function colorPicker() {
  this.style.color = this.value;
  color = this.value;
});

// Select size input
function makeGrid() {
  //getting some variables for the table needed
  var height = document.getElementById("inputHeight");
  var width = document.getElementById("inputWidth");
  var table = document.getElementById("pixelCanvas");
  //setting how the height and width for the table is, it is needed for the "for" loop
  var rows = parseInt(height.value, 10);
  var cols = parseInt(width.value, 10);
  //creating a table
  table.innerHTML = "";
  //creating the table body
  var tbody = document.createElement("tbody");
  for (var i = 0; i < rows; i++) {
    //creating a row element
    var r = document.createElement("tr");
    for (var x = 0; x < cols; x++) {
      //creating a collum element
      var c = document.createElement("td");
      //adding a Attribute, that you can change the colors
      //I used "onmousedown", because it reacts faster
      c.setAttribute("onmousedown", "changingColors(this)");
      //adding the collum to the row
      r.appendChild(c);
    }
    //adding the row to the table body
    tbody.appendChild(r);
  }
  //adding the table body to the whole table
  table.appendChild(tbody);
}

//changing the Color of the elmenent, that is clicked
function changingColors(elmnt) {
  elmnt.style.backgroundColor = color;
}
