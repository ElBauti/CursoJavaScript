// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [

    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function errorPersonalido(valor) {
    if (valor == 10){
        return valor
    }
    throw new Error("La nota sacada no es 10!")
}


try {
    errorPersonalido(5)
}
catch (errorcito) {
    logger.info("El fallo que tuvimos es que:",errorcito)
}