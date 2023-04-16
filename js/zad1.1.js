
function ex1(el_count){
    let arr = [];
    for(let i = 0; i<el_count; i++){
        arr[i] = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    }

    arr.forEach(e => console.log(e + "\n"));

    arr.forEach(e => {
        if(e%2==0){
            console.log(e + " parzysta!\n");
        }
    }
    );

}


ex1(50);