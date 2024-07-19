
let person = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting", "cooking"],
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };




  // Lista de cores para o border-bottom, incluindo as novas cores
  const colors = [
    'lightpink',
    'lightblue',
    'lightsalmon',
    'lightgreen',
    'lightseagreen',
    'lightsteelblue',
    'lightcoral',
    'lightgoldenrodyellow',
    'lightcyan',
    'lightgray'
  ];

  // Contador para aplicar a cor na ordem
  let currentColorIndex = 0;

  // Função para adicionar um novo fieldset com a próxima cor
  function addNewFieldset() {
    // Cria um novo fieldset
    const newFieldset = document.createElement('fieldset');
    newFieldset.className = 'titleAndDataConteiner';
    newFieldset.id = `c${currentColorIndex}`;
    newFieldset.innerHTML = `
      <legend>Nova Conta ${currentColorIndex + 1}</legend>
      <h2>Nº de conta</h2>
      <h3>854759375937</h3>
      <h2>Saldo</h2>
      <a href="#">
        <p>0,00</p>
      </a>
    `;

    // Aplica a cor ao border-bottom
    newFieldset.style.borderBottom = `8px solid ${colors[currentColorIndex]}`;

    // Adiciona o novo fieldset ao container principal
    document.querySelector('.acountsInformations').appendChild(newFieldset);

    // Incrementa o índice, reiniciando se exceder o número de cores disponíveis
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  // Exemplo: Adiciona três novos fieldsets ao carregar a página
  window.onload = () => {
    addNewFieldset(); // Adiciona um novo fieldset
    addNewFieldset(); // Adiciona um segundo fieldset
    addNewFieldset(); // Adiciona um terceiro fieldset
  };


  