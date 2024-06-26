// Criar elementos HTML para exibir as informações
var header = document.createElement("h1");
header.textContent = "Adivinhe qual das afirmações abaixo é falsa:";
document.body.appendChild(header);

var ul = document.createElement("ul");
document.body.appendChild(ul);

// Definir as afirmações
var afirmacoes = [
  "Minha primeira média abaixo de 6,0 foi na disciplina de educação física, pois não participei da gincana e nem quis participar da aula de dança.",
  "Uso óculos de grau a 23 anos.",
  "Aprendi a nadar aos 10 anos.."
];

// Exibir as afirmações para o usuário
afirmacoes.forEach(function(afirmacao, indice) {
  var li = document.createElement("li");
  li.textContent = (indice + 1) + ". " + afirmacao;
  ul.appendChild(li);
});

// Adicionar texto "Aperte Enter para iniciar"
var textoInstrucao = document.createElement("p");
textoInstrucao.textContent = "Aperte Enter para iniciar";
document.body.appendChild(textoInstrucao);

// Definir o índice da afirmação verdadeira
var indiceFalsa = 2;

// Solicitar a resposta do usuário após pressionar a tecla Enter
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var resposta = parseInt(prompt("Digite o número da afirmação falsa:"));

    // Verificar se a resposta está correta
    if (resposta === indiceFalsa + 1) {
      var resultado = document.createElement("p");
      resultado.textContent = "Parabéns! Você acertou a afirmação falsa!";
      document.body.appendChild(resultado);
    } else {
      var resultado = document.createElement("p");
      resultado.textContent = "Oops! A afirmação falsa era a " + (indiceFalsa + 1);
      document.body.appendChild(resultado);
    }
  }
});