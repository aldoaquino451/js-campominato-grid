
// 1. In base all'opzione scelta, uso il valore in value per sapere quanti quadrati ci sono per ogni riga e colonna
const selectSize = document.getElementById('size-container');
const squareRow = selectSize.value;
const squareTot = squareRow * squareRow;


// 2. Richiamiamo il container in js
const container = document.querySelector('.container');
container.innerHTML = '';


// 3. Creo l'elemento button in js con la scritta start e lo collego al container
const btn = document.createElement('button');
btn.innerHTML = 'START';
container.append(btn);


// 4. Al click del button il bottone scompare e viene generata la griglia
btn.addEventListener('click', function() {

  btn.style.display = 'none';

  generate(squareRow, squareTot);

});


// 5. Dichiaro la funzione per la creazione della griglia
function generate(numb, numb2) {
  
  for ( let i = 1; i <= numb2; i++ ) {

    // elemento con classe square che collego al container
    const square = document.createElement('div');
    square.className = 'square';
    container.append(square);
    
    // tramite variabili custom css modifichiamo il valore di width e height dei quadrati
    square.style.setProperty("--number-of-square", numb);

    // ogni quadrato viene attivato al click
    toggleClicked(square, i);  

  };
};


// 6. Dichiaro la funzione addRemove
function toggleClicked(element, index) {  
 
  element.addEventListener('click', function() {

    // al click la attiva o disattiva l'elemento
    element.classList.toggle('clicked');  

    // assegna un numero uguale all'indice 
    element.innerHTML = `
    <span>${index}</span>
    `;
    
  });
};

