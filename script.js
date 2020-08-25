// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// array con all'interno dei cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsamo", "Verdi"];

// chiedo all'utente di inserire il suo cognome
var cognome = prompt("Inserisci il tuo cognome");

// inserisco il cognome dell'utente all'interno dell' array
cognomi.push(cognome);

// ordino la lista dei cognomi in ordine alfabetico e la stampo
cognomi.sort();
console.log(cognomi);

// indico la posizione "umana" del cognome inserito e la stampo

// cambio la posizione da "informatica" ad "umana" aggiungendo +1
var posizione = (cognomi.indexOf(cognome) + 1);
console.log("Il tuo cognome è in posizione: " + posizione);
