// Função para comparar números
function compareNumbers(a, b) {
    // Verifica se os números são iguais
    if (a === b) {
        return true; // Retorna verdadeiro
    } else if (a > b) {
        return 1; // Retorna 1 se 'a' for maior que 'b'
    } else {
        return -1; // Retorna -1 se 'a' for menor que 'b'
    }
}

// Declaração das variáveis
var inteiro1 = 10;
var inteiro2 = 10;
var decimal1 = 10.5;
var decimal2 = 10.5;
var exponencial1 = 10e10;
var exponencial2 = 10e10;
var binário1 = 0b101010;
var binário2 = 0b101010;
var octal1 = 0o777;
var octal2 = 0o777;
var hexadecimal1 = 0xff;
var hexadecimal2 = 0xff;

// Exibição do resultado da primeira comparação
alert(compareNumbers(inteiro1, inteiro2));

// Função para comparar números convertendo-os em strings
function compareNumbers(a, b) {
    var stringA = String(a);
    var stringB = String(b);

    // Verifica se as strings são iguais
    if (stringA === stringB) {
        return true; // Retorna verdadeiro
    } else if (parseFloat(stringA) > parseFloat(stringB)) {
        return 1; // Retorna 1 se 'a' for maior que 'b' após conversão
    } else {
        return -1; // Retorna -1 se 'a' for menor que 'b' após conversão
    }
}

// Exibição do resultado da segunda comparação
alert(compareNumbers(inteiro1, inteiro2));