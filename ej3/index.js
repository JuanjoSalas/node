const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require('./numeros');
const arrayNumeros = [2, 3, 101, 201, 202, 100]

console.log(numeros.esPar(2));
const loggerNumber = () => {
    arrayNumeros.forEach(numero =>{
        if(numeros.esPar(numero)== true){
            logger.info(numero+ ' par')
        } else{
            logger.error(numero+ ' impar')
        } 
    })
};
loggerNumber()
//logger.info(numeros.esPar(2));
//logger.error(numeros.esPar(3));
