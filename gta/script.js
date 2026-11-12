let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

function escolherpersonagem(nomepersonagem, imagempersonagem, corpersonagem) {
    nome.innerHTML = nomepersonagem
    personagem.src = imagempersonagem
    nome.style.color = corpersonagem
}
