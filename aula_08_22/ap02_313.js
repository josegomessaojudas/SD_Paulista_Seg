function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
const d = demorada()
/*
o valor de e não depende do valor devolvido
pela função demorada.
*/
const e = 2 + a + b
console.log(e)