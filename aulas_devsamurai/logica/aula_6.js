function handleDataType(value) {
    switch (typeof value) {
        case "string":
            alert("O valor é uma string.");
            break;
        case "number":
            alert("O valor é um número.");
            break;
        case "boolean":
            alert("O valor é um booleano.");
            break;
        case "object":
            if (value === null) {
                alert("O valor é nulo.");
            } else {
                alert("O valor é um objeto.");
            }
            break;
        case "undefined":
            alert("O valor é indefinido.");
            break;
        default:
            alert("O valor é desconhecido.");
    }
}
const stringValue = "Hello, world!";
const numberValue = 123;
const booleanValue = true;
const objectValue = {
    name: "John Doe",
    age: 30, };
const undefinedValue = undefined;
const nulValue = null;
handleDataType(stringValue);
// O valor é uma string.
handleDataType(numberValue);
// O valor é um número.
handleDataType(booleanValue);
// O valor é um booleano.
handleDataType(objectValue);
// O valor é um objeto.
handleDataType(undefinedValue);
// O valor é indefinido.
handleDataType(nullValue);
// O valor é nulo.
