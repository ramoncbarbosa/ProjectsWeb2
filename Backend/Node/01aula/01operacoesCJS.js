//primeira opção
exports.soma = function(num1, num2){
    return num1 + num2
}


//segunda opção
modules.exports = {
    soma(num1, num2){
        return num1 + num2
    },
    multiplicar(num1, num2){
        return num1 * num2
    }
}

// terceira opção
function subtrai(num1, num2){
    return num1 - num2
}

function soma(num1, num2){
    return num1 + num2
}

module.exports = soma
module.exports = {soma, subtrai}
