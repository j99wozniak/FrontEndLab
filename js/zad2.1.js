
function ex1(el_count){
    let arr = Array.from({length: el_count}, () => Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
    console.log("Numbers:");
    console.log(arr);
    console.log("Even:");
    console.log(arr.filter(e => e%2==0))

}


ex1(50);