/*
  1. Richiamiamo il container in js
  2. Resetttiamo il container
  3. Creo un ciclo da 100
    1. nel ciclo creo un elemento div
    2. l'elemento lo inserisco nel container
    2. a ogni elemento div assegno la classe square 
    3. a ogni elemento assegno all'evento click la funzione active
  4. L'evento click lo salvo in una funzione
      1. permetterà di aggiugnere o rimuovere la classe clicked
      2. genera un numero per ogni cella in ordine crescente (il numero tot di celle viene deciso dall'indice del ciclo for quindi possiamo usare quel dato per assegnare questo numero)
      3. deve essere visualizzato il numero solo quando il quadrato viene cliccato
  5. (Bonus?) ogni cella corrisponde ad un numero: in base a se è pari o dispari assegna una classe diversa (o solo il background)
*/

// 1. Richiamiamo il container in js
const container = document.querySelector('.container');

// Creo il button in js con la scritta start e lo collego al container
const btn = document.createElement('button');
btn.innerHTML = 'START';
container.append(btn);

init();

// Aggiungo un evento click al button 
function init() {

  btn.addEventListener('click', function() {
    
    // resetta il container
    container.innerHTML = '';
    
    // apparire il container 
    for ( let i = 1; i <= 100; i++ ) {

      // 1. creo un elemento div
      const square = document.createElement('div');
    
      // 1. l'elemento lo inserisco nel container
      container.append(square);
    
      // 2. a ogni elemento div assegno la classe square 
      square.className = 'square';
    
      // 3. a ogni elemento assegno all'evento click la funzione active
      square.addEventListener('click', function() {
        
        // 1. permetterà di aggiugnere o rimuovere la classe clicked
        square.classList.toggle('clicked');
    
        // 2. genera un numero per ogni cella in ordine crescente (il numero tot di celle viene deciso dall'indice del ciclo for quindi possiamo usare quel dato per assegnare questo numero)
        square.innerHTML = `
        <span>${i}</span>
        `;
        console.log(i)
    
      });
    };
  });
};




