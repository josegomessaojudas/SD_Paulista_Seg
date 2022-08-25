function f() {
    console.log(nome);
    var nome = 'João';
    function g() {
        console.log(nome);
    }
    g()
}
f()

