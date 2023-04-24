// seleciona o display da calculadora
const display = document.querySelector('.display');

// seleciona todos os botões da calculadora
const buttons = document.querySelectorAll('.calculator button');

// adiciona ouvintes de eventos aos botões da calculadora
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // obtém o valor atual do display
    let currentValue = display.value;
    
    // obtém o valor do botão clicado
    const buttonValue = button.textContent;
    
    // verifica qual botão foi clicado e executa a operação correspondente
    switch(buttonValue) {
      case 'C':
        // limpa o display
        display.value = '';
        break;
      case '=':
        // calcula o resultado da expressão matemática e exibe na tela
        display.value = eval(currentValue);
        break;
      default:
        // adiciona o valor do botão clicado ao display
        display.value += buttonValue;
        break;
    }
  });
});
