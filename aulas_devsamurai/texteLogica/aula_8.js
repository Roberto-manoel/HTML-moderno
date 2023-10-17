function logicalUperators() {
    // AND operator
    alert(true && "Bard");
    // Bard
    alert(true && "Alice");
    // Alice
    alert(false && "Bob");
    // undefined
    alert(false && "Carol");
    // undefined
    // OR operator
    alert(true || "Bob");
    // Bob
    alert(true || "Carol");
    // Carol
    alert(false || "Alice");
    // Alice
    alert(false || "Bard");
    // Bard
    // NOT operator
    alert(!true);
    // false
    alert(!false);
    // true

}
logicalUperators();
