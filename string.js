/*Strings*/
const string = "Gabriel Morais 1";
console.log("replace - " + string.replace("a", "l")); // Substitui a letra no primeiro argumento pela letra do segundo argumento
console.log("split - " + string.split("a")); //Divide a string na posição da letra passada no argumento, transformando-a em um array
console.log("length - " + string.length); // Retorna o tamanho da string
console.log("charAt - " + string.charAt(5)); // Retorna o caractere na posição passada no argumento
console.log("charCodeAt - " + string.charCodeAt(5)); // Retorna o valor unicode do caractere na posição passada no argumento
console.log("codePointAt - " + string.codePointAt(5)); // ?
console.log("concat - " + string.concat(" Engenheiro")); // Concatena a string original com a string passada no argumento
console.log("repeat - " + string.repeat(2)); // Retorna uma cópia da string original repetida de acordo com o número de vezes passado no argumento
console.log("endsWith - " + string.endsWith("ais")); // Retorna verdadeiro se a sequência de caracteres for encontrada no final da string
console.log("includes - " + string.includes("bri")); // Retorna verdadeiro se a sequência de caracteres for encontrada em qualquer posição da string
console.log("indesxOf - " + string.indexOf("el")); // Retorna a primeira ocorrência da sequência de caracteres passado como argumento.
console.log("substring - " + string.substring(0, 7)); // Retorna uma parte da string de acordo com os argumentos passados,
//sendo o primeiro argumento a posição do primeiro caractere desejado
//e o segundo argumento o último caracere desejado, então neste caso queremos do caractere 0 até o 7
console.log("localeCompare - " + string.localeCompare("Antenize")); // Determina se duas strings são equivalentes em uma localidade específica
console.log("lastIndexOf- " + string.lastIndexOf("bri")); // Retorna a última ocorrência da sequência de caracteres passadas como argumento.
console.log("slice - " + string.slice(7, 9)); // Parecido com o substring, retorna a range de caracteres de acordo com as posições passadas como argumento
console.log("match - " + string.match("a")); // Retorna um array com todas as ocorrências da sequência de caracteres passadas como argumento.
console.log("matchAll - " + string.matchAll()); // Encontra uma string com uma expressão regular e retorna um iterador contendo o resultado da pesquisa.
console.log("normalize - " + string.normalize());
console.log("padEnd - " + string.padEnd(2, "!")); // Adiciona no final da string o caractere passado no segundo argumento e aquantidade passado no primeiro argumento
console.log("padStart - " + string.padStart(2, ".")); // Adiciona no começo da string o caractere passado no segundo argumento e aquantidade passado no primeiro argumento
console.log("search - " + string.search(/\d/)); //Retorna a posição da primeira ocorrência na busca de uma expressão regular, se não encontrada retorna -1
console.log("startsWith - " + string.startsWith("Gab")); // Retorna verdadeiro se a sequência de caracteres for encontrada no começo da string
console.log("trim - " + string.trim()); // Remove espaços em branco e quebras de linha da string
console.log("toLocaleLowerCase - " + string.toLocaleLowerCase()); //Converte todas as letras da string em minúsculas de acordo com a localidade
console.log("toLocaleUpperCase - " + string.toLocaleUpperCase()); //Converte todas as letras da string em maiúsculas de acordo com a localidade
console.log("trimEnd - " + string.trimEnd()); //Remove os espaços em branco e as quebras de linha do final do string
console.log("trimStart - " + string.trimStart()); //Remove os espaços em branco e as quebras de linha do inicio do string
console.log("toLowerCase - " + string.toLowerCase()); //Converte todas as letras em minusculas
console.log("toUpperCase - " + string.toUpperCase()); //Converte todas as letras em maiusculas
console.log("valueOf - " + string.valueOf()); // Retorna o valor primitivo do objeto especificado

console.log("String iterator");
const regex = /\w/
string.match(regex).map((match) => console.log(match));

