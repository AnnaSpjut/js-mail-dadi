//Mail////

const allowedEmails = [
  'anna.spjut@gmail.com',
  'pinko.pallino@gmail.com',
  'mario.rossi@gmail.com',
  'giuseppe.verdi@gmail.com',
  'maria@gmail.com',
  'boolean@gmail.com',
]

const userEmail = prompt('Inserisci la tua mail');

for(let i = 0; i < allowedEmails.length; i++){
  const email = allowedEmails[i];
  if(email === userEmail){
    document.querySelector('h1').innerHTML = `Sei un utente iscritto, hai accesso!`
  }
  else{
    document.querySelector('h1').innerHTML = `Mi dispiace non sei iscritto, non hai accesso!`
  }
};



//Dadi////

const numUtente = Math.floor(Math.random() *6 + 1);
const numComputer = Math.floor(Math.random() *6 + 1);
console.log(numComputer, numUtente)

if (numUtente < numComputer){
  risultato = 'Ha vinto il computer!'
}else if (numUtente > numComputer){
  risultato = 'Hai vinto tu!'
}else{
  risultato = 'Pareggio, gioca di nuovo!'
};

output.innerHTML = risultato;












  
