//Versao 1.0 - Marcos - 1 Desafio Classificador de nível de Herói
/**# 1️⃣ Desafio Classificador de nível de Herói

*O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome *{nome}* está no nível de *{nivel}*"
/**
console.log("oi");**/

let nomeHeroi = "Maromba Boy";
let XP =  10000;
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

let y = 8000

const nomeDoHeroi = "Nome do seu Jogador: ";
const estaNoNivel = " está no nível: "
const totalXP = "Total XP de: "

if (XP < 1000){
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
} 
else if (XP >= 1001 && XP <= 2000){
    y+=1
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 2001 && XP <= 6000){
    y+=2
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 6001 && XP <= 7000){
    y+=3
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 7001 && XP <= 8000){
    y+=4
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 8001 && XP <= 9000){
    y+=5
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 9001 && XP <= 10000){
    y+=6
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}
else if (XP >= 10001){
    y+=7
    console.log(nomeHeroi + estaNoNivel + estaNoNivel + nivelHeroi[y] + totalXP + y)
}