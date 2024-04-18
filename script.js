// Esercizio 1 
let c = 40;
let d = 10;

function verifica(c, d) {
    if (c === 50 || d === 50 || c+d === 50) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  

  
  verifica(c,d); // Output: true

// Esercizio 2 

let parola = "Buonggiorno"

function rimuoviSecondaLettera(parola) {
    let parolaRimossa = parola.slice(0, 4) + parola.slice(5);
    return parolaRimossa;
  }
  
  let parolaRimossa = rimuoviSecondaLettera(parola);
  console.log(parolaRimossa); 
  


  // esercizio  3 
   
  let primoNumero = 70;
  let secondoNumero = 71;

  function verificaNum (x, y) {
    if ( (x>=40 && x<=60 && y>=40 && y<=60 ) || (x>=70 && x<=100 && y>=70 && y<=100) ) {
        console.log (true);
    } else {
        console.log(!true);
    }
  }

 let numeroVerificato = verificaNum(primoNumero, secondoNumero);


 // Esercizio 4 

 let città = "Los Angeles"

 function cittàsimile (città) {
    if (città.startsWith("Los") || città.startsWith("New") ) {
    return console.log (città);
 } else {
    return console.log(false);
 } }

 cittàsimile(città);

 // Esercizio 5 

 let numeriDaSommare = [1, 2, 3, 4, 5, 6]
function arraySommato (numeriDaSommare)
{
    let somma = 0;
    for (let element of numeriDaSommare)
    {
     somma += element;

    }
    return somma
}

console.log(arraySommato(numeriDaSommare))


// Esercizio 6 


let numeri = [2, 3, 4, 5, 6, 7, 8, 9,];

function escludiUnoTre(numeri) {
    for (let numero of numeri) {
        if (numero === 1 || numero === 3) {
            return false;
        }
    }
    return true;
}

console.log(escludiUnoTre(numeri)); 

// Esercizio 7

let gradi = 93;

function verificaAngolo (gradi) {
    switch (gradi) {
    case 90:
        console.log("Questo è un angolo Retto");
        break;
    case 180:
        console.log("Questo è un angolo Piatto");
        break;
 default:
        if (gradi > 0 && gradi < 90) {
                console.log("Questo angolo è Acuto");
            } else if (gradi > 90 && gradi < 180) {
                console.log("Questo è un angolo Ottuso");
            } else {
                console.log("Inserire gradi correttamente.");
            }
  }
}

verificaAngolo(gradi);

// Esercizio 8

let ditta = ["Fabbrica", "Italiana", "Auto", "Torino"];

function acronimo(ditta) {
    var dittaRidotta = ``;
 for (let nome of ditta) {
    dittaRidotta += nome[0]; // Aggiungi la prima lettera di ogni parola all'acronimo
 }
  return dittaRidotta;
}

console.log(acronimo(ditta));

// Esercizi Extra

// Esercizio 1
 let nome =  "antonia";

 function verificaLettereDuplicate(nome) {
    if (nome === "") {
      console.log("La stringa è vuota.");
      return;
    }
  
    if ( typeof nome === "Number" ) {
        console.log("Il campo nome è un numero impossibile calcolare valori duplicati")
        return;
    }

    var letteraDuplicato = "";
    var letteraPiùUtilizzata = "";
    var letteraDuplicatoCount = 0;
  
    for (let lettera of nome) {
      if (lettera === letteraDuplicato) {
        letteraPiùUtilizzata = lettera;
        letteraDuplicatoCount++;
      } else {
        letteraDuplicato = lettera;
        letteraDuplicatoCount = 1;
      }
    }
  
    console.log(letteraPiùUtilizzata);
  }
  
  //Esercizio 2 

  let a = "incerta";
  let b = "trincea";

  function VerificaAnagramma (a, b) {
    var arrayA = a.toLowerCase().split("").sort();
    var arrayB = b.toLowerCase().split("").sort();
    
    console.log(arrayA);
    console.log(arrayB);

    if (arrayA.length !== arrayB.length) {
        console.log("La lunghezza dei caratteri non soddisfa le condizioni per verificare anagramma");
        return false;
    }

    for (let i of arrayA)
    if (arrayA[i] !== arrayB[i]){
        return false;
    } else {
        return true;
    }

  }
  
  console.log(VerificaAnagramma(a, b)); 

  // Esercizio  3 

  let anagrammi = ["stare", "aster","tersa","sarte","taser", "mondo", "ciao mondo"];
  let anagramma = "resta";

  function verificaAnagrammi(anagramma, listaAnagrammi) {
    let anagrammaFiltrato = [];
    let anagrammiErratiFiltrati = [];
    let anagrammaOrdinato = anagramma.toLowerCase().split("").sort();

    for (let parola of listaAnagrammi) {
        let parolaOrdinata = parola.toLowerCase().split("").sort();

        if (JSON.stringify(parolaOrdinata) === JSON.stringify(anagrammaOrdinato)) {
            anagrammaFiltrato.push(parola);
        } else {
            anagrammiErratiFiltrati.push(parola);
        }
    }

    console.log("Gli anagrammi sono: " + anagrammaFiltrato.join(", "));
    console.log("Questi non sono anagrammi: " + anagrammiErratiFiltrati.join(", "));
}


  verificaAnagrammi(anagramma, anagrammi);


  // Esercizio 4 

    let stringaPalindroma = "AnnA";

    function isPalidromoOrNot (stringaPalindroma){
        stringaPalindroma = stringaPalindroma.toLowerCase().replace(/ /g, '');

        let stringaPalindromaInvertita =  stringaPalindroma.split('').reverse().join('');
         if (stringaPalindroma === stringaPalindromaInvertita){
            return true;
         } else {
         return false;
         }
    }

    console.log(isPalidromoOrNot (stringaPalindroma));

    // esercizio 5 
     let numeroIntero = 123;

     function invertiNumero (numeroIntero) {
        numeroIntero =  numeroIntero.toString();

        let numeroInvertito =  numeroIntero.split('').reverse().join('');

        return numeroInvertito;
     }

     console.log(invertiNumero (numeroIntero));

     // esercizio 6 

     let x = 5;

    function scala(x) {
        let valore = "#";
        if (x > 0) {
            let count = 0;
            while (count < x) {
                console.log(valore); //
                valore += "#"; // Aggiunge un altro "#" alla fine della stringa valore
                count++;
            }
        } else {
            console.log("Il numero non è positivo");
        }
    }

scala(x);

    // Esercizio 7 
    let paramentroDaInverire = "Mondo";

    function inversione (paramentroDaInverire){
       let paramentroInvertito = paramentroDaInverire.toLowerCase().split('').reverse();
       paramentroInvertito= paramentroInvertito.join('')
       return console.log(paramentroInvertito);
    }

    inversione (paramentroDaInverire);


    // Esercizio 8 

    function primaFunzione(n1, n2) {
        if (n1 == 50) {
            return true
        } else if (n2 == 50) {
            return true
        } else if ((n1  + n2) == 50) {
            return true
        } else {
            return false
        }
    }
    console.log(primaFunzione(50, 20));
    console.log(primaFunzione(20, 50));
    console.log(primaFunzione(20, 30));
    console.log(primaFunzione(20, 20));
    
    
    function secondaFunzione(parola, posizione) {
        if (posizione > parola.length) {
            return "Posizione non valida";
        } else if (typeof parola != "string") {
            return "La parola inserita non è una stringa";
        } else if (typeof posizione != "number") {
            return "Il numero inserito non è un numero";
        } else {
            nuovaParola = "";
            for (let i = 0; i < parola.length; i++) {
                if ((posizione-1) == i) {
                    continue
                }
                nuovaParola += parola[i];
            }
            return nuovaParola
        }
        
    }
    console.log(secondaFunzione("parola", 4));
    console.log(secondaFunzione("parola", 10));
    console.log(secondaFunzione(5, 4));
    console.log(secondaFunzione("parola", "4"));
    
    
    function terzaFunzione(n1, n2) {
        if (typeof n1 != "number") {
            return "Il primo dato non è un numero"
        } else if (typeof n2 != "number"){
            return "Il secondo dato non è un numero"
        } else {
            if (((n1 > 40 && n1 < 60) || (n1 > 70 && n1 < 100)) && ((n2 > 40 && n2 < 60) || (n2 > 70 && n2 < 100))) {
                return true
            } else {
                return false
            }
        }
    }
    console.log(terzaFunzione("parola", 50));
    console.log(terzaFunzione(50, "parola"));
    console.log(terzaFunzione(50, 50));
    console.log(terzaFunzione(50, 80));
    console.log(terzaFunzione(80, 50));
    console.log(terzaFunzione(80, 80));
    console.log(terzaFunzione(1, 50));
    console.log(terzaFunzione(1, 80));
    console.log(terzaFunzione(80, 1));
    console.log(terzaFunzione(50, 1));
    
    
    function quartaFunzione(città) {
        if (typeof città != "string") {
            return "Quella che hai inserito non è sicuramente una città"
        } else {
            if (città.startsWith("Los") || città.startsWith("New")) {
                return città
            } else {
                return false
            }
        }
    }
    console.log(quartaFunzione(3));
    console.log(quartaFunzione("New York"));
    console.log(quartaFunzione("Padova"));
    
    
    function quintaFunzione(array) {
        let somma = 0;
        for (let elemento of array) {
            if (typeof elemento != "number") {
                return "Non tutti gli elementi dell'array sono numeri "
            } else {
                somma += elemento;
            }
        }
        return somma
    }
    let arrayQuintaFunzione1 = ["ciao", 2, 3, 4, 5]
    let arrayQuintaFunzione2 = [1, 2, 3, 4, 5];
    console.log(quintaFunzione(arrayQuintaFunzione1));
    console.log(quintaFunzione(arrayQuintaFunzione2));
    
    
    function sestaFunzione(array) {
        if ((array.includes(1))||(array.includes(3))) {
            return false
        } else {
            return true
        }
    }
    let arraySestaFunzione1 = ["ciao", 2, 3, 4, 5]
    let arraySestaFunzione2 = [1, 2, 3, 4, 5];
    let arraySestaFunzione3 = [2, 2, 4, 4, 5];
    console.log(sestaFunzione(arraySestaFunzione1));
    console.log(sestaFunzione(arraySestaFunzione2));
    console.log(sestaFunzione(arraySestaFunzione3));
    
    
    function settimaFunzione(angolo) {
        if ((0 < angolo) && (angolo < 90)) {
            return "acuto"
        } else if ((90 < angolo) && (angolo < 180)){
            return "ottuso"
        } else if (angolo == 90){
            return "retto"
        } else if (angolo == 180){
            return "piatto"
        } else {
            return "L'ampiezza dell'angolo non corrisponde a nessun angolo qui presente"
        }
    }
    console.log(settimaFunzione(89));
    console.log(settimaFunzione(135));
    console.log(settimaFunzione(90));
    console.log(settimaFunzione(180));
    console.log(settimaFunzione(270));
    
    
    function ottavaFunzione(frase) {
        if (typeof frase != "string") {
            return "Non è possibile fare l'acronimo"
        }
        let array = frase.split(' ');
        let acronimo = '';
        for (const elemento of array) {
            acronimo += elemento[0]
        }
        return acronimo
    }
    console.log(ottavaFunzione("Fabbrica Italiana Automobili Torino"));
    console.log(ottavaFunzione("You Only Live"));
    console.log(ottavaFunzione(520));
    
    //EXTRA
    //1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
    function nonaFunzione(stringa) {
        let counter = {};
        for (let i = 0; i < stringa.length; i++) {
            let carattere = stringa.charAt(i);
            if (!counter[carattere]) {
                counter[carattere] = 1;
            } else {
                counter[carattere] += 1
            }
        }
        let arrayValori = Object.values(counter);
        let numeroCaratterePiuPresente = Math.max(...arrayValori);
        let caratterePiuPresente = Object.keys(counter).find(key => counter[key] === numeroCaratterePiuPresente)
        return `Il carattere più presente è "${caratterePiuPresente}" con il numero di ${numeroCaratterePiuPresente} caratteri`
    }
    console.log(nonaFunzione("pelle"));
    
    //2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
    function decimaFunzione(parola1, parola2) {
        if (typeof parola1 != "string") {
            return "La prima parola non è una stringa"
        } else if (typeof parola2 != "string") {
            return "La seconda parola non è una stringa"
        }
        let arrayParola1 = parola1.toLowerCase().split("").sort().filter((el => (el =! ".") && (el =! "!") && (el =! ".") && (el =! "?"))).join;
        let arrayParola2 = parola1.toLowerCase().split("").sort().filter((el => (el =! ".") && (el =! "!") && (el =! ".") && (el =! "?"))).join;
        if (arrayParola1 == arrayParola2) {
            return true
        } else {
            return false
        }
    }
    console.log(decimaFunzione("Ciao", "ciao"));
    console.log(decimaFunzione("Dai del pane al cane pazzo", "Dai del pane al pazzo cane"));
    
    
    //3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
    //Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
    function undicesimaFunzione(array, parola) {
        let anagrammi = [];
        for (let i = 0; i < array.length; i++) {
            let parolaArray = array[i].toLowerCase().split('').sort().join('');
            let prolaOrdinata = parola.toLowerCase().split('').sort().join('');
            console.log(parolaArray);
            console.log(prolaOrdinata);
            if (parolaArray === prolaOrdinata) {
                anagrammi.push(array[i])
            } else {
                continue
            }
        }
        return anagrammi
    }
    let lista = ['carenti', 'incerta', 'espatrio'];
    console.log(undicesimaFunzione(lista, 'cartine'));
    
    
    //4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
    function dodicesimaFunzione(parola) {
        let palindromo = '';
        for (let i = parola.length-1; i > -1; i--) {
            palindromo += parola[i];     
        }
        if (parola === palindromo) {
            return true
        } else {
            return false
        }
    }
    console.log(dodicesimaFunzione("osso"));
    console.log(dodicesimaFunzione("oro"));
    
    
    //5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
    function tredicesimaFunzione(numero) {
        if (typeof numero != "number") {
            return "It's not a number"
        }
        numeroInverso = '';
        for (let i = numero.toString().length-1; i > -1; i--) {
            numeroInverso += numero.toString()[i];
            console.log(numeroInverso);
        }
        return Number(numeroInverso)
    }
    
    console.log(tredicesimaFunzione(189));
    console.log(tredicesimaFunzione("ciao"));
    
    
    //6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
    function quattordicesimaFunzione(X) {
        if ((typeof X != "number")) {
            return "Non è stato inserito un numero"
        } else if (X < 0) {
            return "Il numero inserito è negativo"
        } else {
            let scala = "";
            for (let i = 0; i < X; i++) {
                scala += "#";
                console.log(scala);
            }
        }
    }
    quattordicesimaFunzione(5)
    
    //7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
    function quindicesimaFunzione(stringa) {
        if ((typeof stringa != "string")) {
            return "Non è stata inserita una stringa"
        } 
        let contrario = "";
        for (let i = stringa.length-1; i > -1; i--) {
            contrario += stringa[i];
        }
        return contrario
    }
    console.log(quindicesimaFunzione("Ciao"));
    
    
    //8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
    function sedicesimaFunzione(array, Y) {
        if ((typeof Y != "number")) {
            return "Non è stato inserito un numero"
        }
        let cicleLength = array.length/Y
        for (let i = 0; i < cicleLength; i++) {
            let removed = array.splice(i, Y);
            array.splice(i, 0, removed)
        }
        return array
    }
    let sedicesima = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    console.log(sedicesimaFunzione(sedicesima,3)); 
    
    
    //9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
    function diciassettesimaFunzione(X) {
        if ((typeof X != "number")) {
            return "Non è stato inserito un numero"
        } else if (X < 0) {
            return "Il numero inserito è negativo"
        } else {
            let piramide = "";
            for (let i = 0; i < X; i++) {
                if (i > 0) {
                    piramide += "##";  
                } else {
                    piramide += "#";
                }
                console.log(piramide);
            }
        }
    }
    diciassettesimaFunzione(4)
    
    
    //10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
    function diciottesimaFunzione(N) {
        if ((typeof N != "number")) {
            return "Non è stato inserito un numero"
        } else if (N < 0) {
            return "Il numero inserito è negativo"
        } else {
            let matrice = [];
            //Vado ad inserire un numero N di array(in cui andrò a lavorare) alla matrice
            for (let i = 0; i < N; i++) {
                matrice.push([])
            }
            
            let numero = 1; //contatore del numero che vado ad inserire di volta in volta
            let riga = 0; //Limite superiore del movimento, riga in cui si lavora da sinistra verso destra(Si lvaora con questa riga nel primo ciclo for)
            let colonna = 0; //Limite sinistro del movimento, colonna in cui si lavora da sotto verso sopra(Si lvaora con questa colonna nel quarto ciclo for)
            let ultimaRiga = N ; //Limite inferiore del movimento, riga in cui si lavora da destra verso sinistra(Si lvaora con questa riga nel terzo ciclo for)
            let ultimaColonna = N ; //Limite destro del movimento, colonna in cui si lavora da sopra verso sotto(Si lvaora con questa colonna nel secondo ciclo for)
    
            /*Il ciclo while va a concludersi nel momento in cui:
            -il limite sinistro combacia con quello destro (colonna <= ultimaColonna)
            -il limite superiore combacia con quello inferiore (riga <= ultimaRiga)
            In questo caso non ci sarebbe più spazio in cui lavorare
            */
            while (riga <= ultimaRiga && colonna <= ultimaColonna) {
                //Lavoro da sinistra verso destra(nella riga "riga")
                for (let i = colonna; i < ultimaColonna; i++) {
                    matrice[riga][i] = numero;
                    numero++
                    //aumento il contatore del numero che vado ad inserire 
                }
                riga++ 
                //Aumento di 1 così la prossima volta che si lavora al for qui sopra si lavora nella riga più sotto 
                //"abbasso" di 1 livello il limite superiore in cui si vanno ad inserire i numeri
    
                //Lavoro da sopra verso sotto(nella colonna "ultimaColonna")
                for (let i = riga; i < ultimaRiga; i++) {
                    matrice[i][ultimaColonna-1] = numero;
                    // ultimaColonna-1 perchè le posizioni partono da 0 e quindi lavorerei una colonna più a destra del dovuto(fuori dalla matrice)
                    numero++
                    //aumento il contatore del numero che vado ad inserire 
                }
                ultimaColonna--
                //Diminuisco di 1 così la prossima volta che si lavora al for qui sopra si lavora nella colonna più a sinistra 
                //Sposto 1 livello il limite destro in cui si vanno ad inserire i numeri
                
                //Lavoro da destra verso sinistra(nella riga "ultimaRiga")
                for (let i = ultimaColonna-1; i >= colonna; i--) {
                    //ultimaColonna-1 perchè le posizioni partono da 0 e quindi lavorerei una colonna più a destra del dovuto(ultima colonna in cui ho lavorato nel for precedente)
                    //in questo caso se non mettessi il -1 inzierebbe a lavorare dall'ultima colonna(su cui ho già lavorato) 
                    matrice[ultimaRiga-1][i] = numero;
                    //ultimaRiga-1 perchè la posizioni partono da 0 e quindi lavorerei una riga più sotto del dovuto(fuori dalla matrice)
                    numero++             
                    //aumento il contatore del numero che vado ad inserire    
                }
                ultimaRiga--
                //Diminuisco di 1 così la prossima volta che si lavora al for qui sopra si lavora nella riga più sopra 
                //"alzo" di 1 livello il limite superiore in cui si vanno ad inserire i numeri
                
                //Lavoro da sotto verso sopra(nella colonna "colonna")
                for (let i = ultimaRiga-1; i >= riga; i--) {
                    //ultimaRiga-1 perchè la posizioni partono da 0 e quindi lavorerei una riga più sotto del dovuto(ultima riga in cui ho lavorato nel for precedente)
                    //in questo caso se non mettessi il -1 inzierebbe a lavorare dall'ultima riga(su cui ho già lavorato) 
                    matrice[i][colonna] = numero; 
                    numero++
                    //aumento il contatore del numero che vado ad inserire 
                }
                colonna++
                //Aumento di 1 così la prossima volta che si lavora al for qui sopra si lavora nella colonna più a destra 
                //Sposto 1 livello il limite sinistro in cui si vanno ad inserire i numeri
            }
            return matrice
        }
    }
    
    console.log(diciottesimaFunzione(3));
    

    
