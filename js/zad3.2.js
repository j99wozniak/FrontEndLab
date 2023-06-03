
function make(){
    var table = document.getElementById("tbody");
    var to_insert = "";
    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;
    for(var y = 1; y<=rows; y++){
        to_insert += "<tr>";
        for(var x = 1; x<=columns; x++){
            to_insert += ("<td>" + y*x +"</td>");
        }
        to_insert += "</tr>";
    }
    table.innerHTML = to_insert;
}
/*
Napisz program, który tworzy tabelkę (<table>)
 o zadanej wysokości oraz szerokości (dane pobieramy z inputu).
  W komórkach umieść wynik działania numer wiersza * numer kolumny.

*/
