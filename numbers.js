const numero = 3314

console.log(numero.toFixed(4))          // Retorna uma string que representa um número com a quantidade de casas de precisão determinadas no parâmetro da função
console.log(numero.toExponential(2))    // Retorna uma string com um número em notação cientifica, com a precisão especificada no parâmetro da função
console.log(numero.toPrecision(4))      // Retorna uma string com a representação numérica de um número com a quantidade de dígitos especificada no parâmetro da função
console.log(numero.toLocaleString())    // Transforma um número em string, levando em conta a localidade
console.log(numero.toString())          // Transformar o numero em uma string
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)