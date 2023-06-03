
dict = {"millimeter":1, "meter":1000, "kilometer":1000000};

function calculate(){
    var from_value = document.getElementById('number').value;
    if(from_value==""){
        from_value = 0;
    }
    var from_unit = document.getElementById('from').value;
    var to_unit = document.getElementById('to').value;

    var from_ratio = dict[from_unit];
    var to_ratio = dict[to_unit];

    var ratio = from_ratio/to_ratio;

    var to_value = ((from_value*ratio).toPrecision(6))/1;

    document.getElementById('out').value = to_value;

    var history = document.getElementById('history');
    var record = document.createElement("li");
    record.appendChild(document.createTextNode(from_value+from_unit+"(s) -> "+to_value+to_unit+"(s)"));
    history.appendChild(record);
}
//wartość wejściowa, miara wejściowa, miara wyjściowa i wartość wyjściowa​