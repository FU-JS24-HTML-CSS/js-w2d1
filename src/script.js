// här är tre olika sätt att skriva strings på
const normalString = "här är en string"
const anotherString = 'här är också en string'
const templateString = `mitt namn är ${10}` // string templates skapar vi med hjälp av back-ticks (grav accent)

// nyckelordet function säger när det är en funktion
// efteråt kommer namnet på funktionen som du bestämmer helt valfritt
// inom parenteserna är argumenten för funktionen, som funkar som variabler för funktionen
// sist kommer kodblocket där du gör dina steg inne i funktionen
function funcExample(arg1, arg2, arg3) {
    console.log("funcExample körs")
    let counter = 0

    while (counter < 5) {
        console.log(counter)
        counter++
    }

    return counter //när du har ett return value så returnerar du värdet till stället du kallar på funktionen
}

let myName = "jesper"

//du behöver skriva namnet på funktionen följt med parenteser för att anropa en funktion
myName = funcExample()

console.log(myName)

console.log("här är texten som vi skriver ut i console.log")


// här skapar vi en egen funktion som gör samma sak som console log, fast utan att behöva skriva console i början
function log(...text) {
    let ourString = ''

    for(let i = 0 ; i < text.length ; i++) {
        ourString += text[i] + " "
    }

    console.log(ourString.trim())
}

log("det", "här", "är", "text", "från", "log-funktionen")



//console.log("mitt", "namn", "är", myString, "och", "mitt", "efternamn", "är", "sjöström")
//console.log("mitt" + "namn" + "är" + "jesper" + "och", "mitt", "efternamn", "är", "sjöström")


// ...numbers gör om argumenten som matas in till en array som innehåller alla argument som du matat in i anropet
function add(...numbers) {
    let total = 0

    for(let i = 0 ; i < numbers.length ; i++) {
        total += numbers[i]
    }

    return total
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20))




// kort preview på DOMen
const btn = document.querySelector(".btn")

console.log(btn)

function clickEvent() {
    console.log("du klickade på knappen!")
}

btn.addEventListener('click', clickEvent)