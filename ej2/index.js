const logger = require('logplease');
const logger1 = logger.create("logger1");
logger1.debug('Hola Mundo de Node');
logger1.info('Noticias de última hora, Node.js me encanta!!');
logger1.warn('Tirando warnings como campeones');
logger1.error('Algo no está bien!!!');