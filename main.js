console.log('hello node js');

/* console.log(process); */

const PIN = process.env.PIN;
console.log(PIN);

if (!PIN) {
    console.error('Devi aggiungere una variabile PIN');
    process.exit(1)
}

/* Leggi la value di un argument */
/* console.log(process.argv); */
const user = process.argv[2]
console.log(user);

if (!user) {
    console.error('Devi aggiungere un argument user');
    process.exit(1)
}


// BONUS

if (user == 'admin' && PIN == 333) {
    console.log('Benvenuto Admin');
} else {
    console.log('Accesso Negato');
}