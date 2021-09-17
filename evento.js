//  Cadastre-se e participe do nosso evento

const dataAtual = new Date ("2021-09-14");

const dataEvento = new Date ("2021-09-20");

// se a dataEvento for maior que ha dataAtual!

if (dataEvento > dataAtual) {
    console.log("data valida. cadastro permitido")
    
} else {
    console.log("data invalida. cadastro negado")
  
}

// lista de participantes, limite de participantes 100´

let quantidadeDeParticipantes = 90
 
if (quantidadeDeParticipantes <= 100 ) {
    console.log("Continue seu cadastro!")
    
} else {
    console.log ("O limite de participantes foi atingido!")
    
}

// Verificando idade do participante

var idade;

idade = 28

if (idade >= 18){
    console.log("idade permitidade!")   
} else {
    console.log("cadastro nao permitido para menores de 18 anos")   
}

// Informar nome do participante!
// Regitrando participante no evento!

const NomeParticipante = ["joao", "vitoria", "eduarda"]
console.log(NomeParticipante)

if (NomeParticipante.length <= 100) {
    console.log("é posssivel cadastra mas participantes!")
    
} else {
    console.log("nao ha mas vagas")

}    
   
 console.log("seja bem vindo ao evento")
