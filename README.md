Griglia Campo Minato
===

## Esercizio  

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

#### Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## HTML

1. dobbiamo costruire una web app quindi diamo le dimensioni della viewport
1. inseriamo un bottone che fa partire il gioco
2. costruiamo un container centralizzato con dimensioni fisse con elementi flex e wrap
3. all'interno gli elementi verranno classificati con la classe square 
4. ogni quadrato avrà dimensioni in rapporto a quelle del container (se abbiamo un griglia 8x8 la dimensione sarà 100% * 1/8)
5. inseriamo una classe clicked che ha uno scopo simile a quella active, quando il quadrato verrà richiamata in js deve essere aggiunta o rimossa a seconda dei casi
6. la classe clicked ci permetterà di cambiare il colore
7. con la classe clicked visualizza il numero corrispondente
8. (bonus?) a seconda se il numero è pari o dispari il colore sarà diverso


## JavaScript

1. **Bonus:** In base all'opzione scelta nel select, uso il valore contenuto in value per indicare quanti quadrati ci sono in ogni riga e colonna e in totale. Con quel valore assegno anche le dimensioni heigh e width.
2. Richiamiamo il container in js
3. Creo l'elemento button in js con la scritta start e lo collego al container
4. Al click del button il bottone scompare e viene generata la griglia
5. Dichiaro la funzione per la creazione della griglia
    1. elemento con classe square che collego al container
    2. tramite variabili custom css modifichiamo il valore di width e height dei quadrati
    3. ogni quadrato viene attivato al click
6. Dichiaro la funzione addRemove
    1. al click si attiva o disattiva l'elemento
    2. assegna un numero uaguale all'indice 
