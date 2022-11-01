//Crie a const para a frase aqui

/* # Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */

//Letra A
let frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

//Letra B
/* const verde = "Verde"
const rosa = "Rosa"
const azul = "azul"
const laranja = "laranja" */

frase = frase.replace("verde", "rosa").replace("azul", "laranja")

//Letra C
console.log(frase.includes("verde"))
console.log(frase.includes("laranja"))

/* **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */

let gato = "mas não deixe o gato sair"
frase = frase.replace(gato,"MAS NÃO DEIXE O GATO SAIR")
console.log(frase)