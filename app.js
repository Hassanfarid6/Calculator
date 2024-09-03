// Calculator

function getNum (num){
    var result = document.getElementById("result")
    result.value += num
}

function getClear(){
    var clear = document.getElementById("result")

    clear.value = ""
}

function getResult(){
    var res = document.getElementById('result')
    res.value = eval(res.value)
}