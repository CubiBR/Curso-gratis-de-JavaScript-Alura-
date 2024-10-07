// te dá boas vindas
alert("Boas vindas ao jogo do número secreto!");
// cria uma variavel para armazenar o numero secreto
numeroMax = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto)
// cria uma variavel para armazenar o seu chute e tembém coloca no console
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    console.log(chute);

    console.log('Resultado da comparação:', chute == numeroSecreto);
    if (chute ==numeroSecreto) {
            break;
        
    } else {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        };
        tentativas ++;
    };

};

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
