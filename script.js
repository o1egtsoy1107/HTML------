function div(){
    let x = +document.getElementsByName("x")[0].value;
    let y = +document.getElementsByName("y")[0].value;
    let result = document.getElementById("result");
    let z = x * y;
    result.innerHTML = `Результат ${z}`
}

