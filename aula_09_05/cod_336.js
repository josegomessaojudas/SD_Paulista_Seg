async function hello(nome) {
    setTimeout((ttt) => {

    }, 5000)
    return "Oi, " + nome;
}
const boasVindas = hello("João");
boasVindas.then((res) => console.log(res + " jjjjjjj"));
console.log(boasVindas + "kkkkkkk");


