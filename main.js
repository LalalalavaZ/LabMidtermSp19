//modal box
var modal = document.getElementById('myModal');
var viewOnly = document.getElementById("viewOnly");

viewOnly.onclick = function(){
    modal.style.display = "none";
    document.getElementById("modalRemoved").innerHTML = "You are disabled to do anything here, refresh page to do any editting with an assigned little world.";
}

//function loadXMLDoc() {
//  var xmlhttp = new XMLHttpRequest();
//  xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      fillXMLColor(this);
//    }
//  };
//  xmlhttp.open("GET", "data.xml", true);
//  xmlhttp.send();
//}
//
//function fillXMLColor(xml){
//    var xmlDoc = xml.responseXML;
//    var table="";
//    var x = xmlDoc.getElementsByTagName("horiz");
//    var r = Math.floor(Math.random()*10);
//    for (var i = r; i <(r+5); i++) { 
//        table += "<tr><td>" +
//        x[i].getElementsByTagName("verti")[r].childNodes[0].nodeValue +
//        "</td><td>" +
//        x[i].getElementsByTagName("hex")[r].childNodes[0].nodeValue +
//        "</td><td>" +
//        x[i].getElementsByTagName("verti")[r].childNodes[0].nodeValue +
//        "</td><td>" +
//        x[i].getElementsByTagName("hex")[r].childNodes[0].nodeValue +
//        "</td><td>" +
//        x[i].getElementsByTagName("hex")[r].childNodes[0].nodeValue +
//        "</td></tr>";
//    }
//    document.getElementById("five").innerHTML = table;
//}
//function fillByChosen(){ 
//}

var r = Math.floor(Math.random()*10);

function makeGrid() {
    var cells = "";
    for (var i = 0; i < 5; i++){
            cells += "<tr><td style=></td><td></td><td></td><td></td><td></td></tr>";
    }
    console.log(cells); 
    document.getElementById("five").innerHTML = cells; 
}
makeGrid(); 

$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        cache: false,
        success: function(data) {fillCsv(data);}
     });
});
 

function listToMatrix(list, elementPerSubarray){
    var matrix = [], i, k;
    for(i=0, k=-1; i<list.length; i++){
        if(i % elementPerSubarray === 0){
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}


function fillCsv(allData){
    var allTextLines = allData.split(/\r\n|\n/);
    
    var headers = allTextLines[0].split(',');

    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        lines = [];
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
//
//            var tarr = [];
            for (var j=2; j<headers.length; j+=3) {
//                tarr.push(data[j]);
//            }
            lines.push(data[j]);
            }
        }
//        console.log(lines);
    }
console.log(listToMatrix(lines, 80));
    
}