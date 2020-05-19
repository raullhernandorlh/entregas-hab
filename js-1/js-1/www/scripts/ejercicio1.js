// Ejercicio 1 - JS1

// El objetivo del ejercicio es crear un nuevo array que contenga todos los hashtags del array tweets, 
// pero sin repetir

// Nota: ¡como mucho hay 2 hashtag en cada tweet!

tweets = [
    'aprendiendo #javascript en Vigo',
    'empezando el segundo módulo del bootcamp!',
    'hack a boss bootcamp vigo #javascript #codinglive'
]

// Solucion 1
// Voy a realizar el ejercico con el metodo substr()
// const newArray = [];
// const hasthagFirstPositionOfArray = tweets[0].substr(12,12);
// const secondHashtagSecondPositionOfArray = tweets[2].substr(38,11);
// newArray.push(hasthagFirstPositionOfArray,secondHashtagSecondPositionOfArray);
// console.log(newArray);

// Solucion 2

tweet1 = 'aprendiendo #javascript en  Vigo';
tweet2 = 'empezando el segundo módulo del bootcamp!'
tweet3 = 'hack a boss bootcamp vigo #javascript #codinglive';

DEFAULT_HASHTAG_LENGTH = 10;

tweet = tweet3;

firstHashtag= tweet.indexOf('#');
console.log(firstHashtag);
secondHashTag= tweet.indexOf('#', firstHashtag +1); 
console.log(secondHashTag);


if (firstHashtag != -1) {
    // extraigo el hashtag a partir de la posición de la almohadilla y le sumo 10, longitud 
    // del hashtag según el enunciado, más 1, que es la longitud de la almohadilla
    firstHashtag = tweet.slice(firstHashtag, firstHashtag + DEFAULT_HASHTAG_LENGTH + 1);
    console.log(firstHashtag)
}

if (secondHashTag != -1) {
    secondHashTag = tweet.slice(secondHashTag, secondHashTag + DEFAULT_HASHTAG_LENGTH + 1);
    console.log(secondHashTag)

}
