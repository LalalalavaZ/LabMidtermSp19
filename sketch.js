var col = 90;
var row = 50;
var total = 4500;
//Table table;
let data;

function preload() {
  data = loadTable(
    'data.csv',
    'csv',
    'header');
}

function setup(){
    createCanvas(1000, 400);
    console.log(data.getColumn("hex"));
//    for (var i = 0; i < col; i++) {
//        TableRow rows = data.getRow(i);
//        var x = rows.get("x");
//        var y = rows.get("y");
//        var hex = rows.get("hex");
//        console.log("x" + "y");
//    }
}

function draw(){
    let colorChoice = document.getElementById("colorPicker").value;
    console.log(colorChoice);
    makeGrid(colorChoice);
}

//the big world canvas that shouldn't be edited
function makeGrid(colorChoice){
    for (var i = 0; i < col; i++){
        for (var j = 0; j < row; j++){
            var x = i*10;
            var y = j*10;
            fill (color(colorChoice));
//            if(mouseX > x && mouseX < (x + 10)){
//                fill(color(colorChoice));
//            } else {
//                fill(50,50,50);
//            }
            stroke (100);
            rect(x, y, 10, 10);
        }
    }
}

