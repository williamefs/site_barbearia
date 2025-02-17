const radioButtons = document.querySelectorAll('[id^="radio"]');
let cont = 1;

// Inicializa com o primeiro botão selecionado
document.getElementById('radio01').checked = true;

// Função para exibir a próxima imagem automaticamente
const proximaImg = () => {
  cont = cont >= radioButtons.length ? 1 : cont + 1;
  document.getElementById(`radio0${cont}`).checked = true;
};

// Troca de imagem a cada 5 segundos
const intervaloTroca = setInterval(proximaImg, 5000);
