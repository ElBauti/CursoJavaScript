import * as operaciones from './controller.js'
import chalk from 'chalk';

const suma = operaciones.suma(1,30)
console.log(suma)

const multiplicar = operaciones.multiplicar(1,30)
console.log(chalk.green(multiplicar))

console.log(chalk.green('Hello world!'));
