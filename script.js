let history = [];
let displayValue = '';

function addToHistory(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function clearHistory() {
  history = [];
  document.getElementById('history').innerText = '';
}

function calculate() {
  let result = eval(displayValue);
  document.getElementById('display').innerText = result;
  history.push(displayValue + ' = ' + result);
  if (history.length > 3) {
    history.shift();
  }
  document.getElementById('history').innerText = history.join(' | ');
}

// Função para apagar o último caractere digitado
function backspace() {
  displayValue = displayValue.slice(0, -1); // Remove o último caractere da string
  document.getElementById('display').innerText = displayValue || '0'; // Exibe a string atual ou '0' se estiver vazia
}

function calculate() {
  if (displayValue.includes('%')) {
    let currentValue = parseFloat(displayValue); // Converte o valor atual para um número
    let percentage = currentValue / 100; // Calcula a porcentagem
    document.getElementById('display').innerText = percentage; // Exibe a porcentagem no visor
    history.push(displayValue + ' = ' + percentage);
    if (history.length > 3) {
      history.shift();
    }
    document.getElementById('history').innerText = history.join(' | ');
  } else {
    let result = eval(displayValue);
    document.getElementById('display').innerText = result;
    history.push(displayValue + ' = ' + result);
    if (history.length > 3) {
      history.shift();
    }
    document.getElementById('history').innerText = history.join(' | ');
  }
}


// Verifica se está em um dispositivo móvel
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Ativa o modo de tela cheia em dispositivos móveis
function toggleFullScreen() {
  let elem = document.documentElement;
  if (isMobileDevice() && !document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      console.log(`Erro ao tentar ativar o modo de tela cheia: ${err.message}`);
    });
  }
}

// Chama a função para ativar o modo de tela cheia
toggleFullScreen();