/* # Exercício 2

Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços `________` por “sticioso”. */

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
//Letra A
let espaco = minhaString.trim()

//Letra B
console.log(`Quantidade de caracteres com espaço: ${minhaString.length}`)
console.log(`Quantidade de caracteres sem espaço: ${espaco.length}`)

//Letra C
console.log(minhaString.replace("________", "sticioso"))



