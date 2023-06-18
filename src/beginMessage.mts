import chalk from "chalk";

function logBeginMessage() {
    console.log
    (`
    ${chalk.redBright('/////////////////////////////////////////')}
    ${chalk.redBright('/////////////////////////////////////////')}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright(`////   ${chalk.greenBright("Thanks for using QSS")}          ////`)}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright('////                                 ////')}
    ${chalk.redBright('/////////////////////////////////////////')}
    ${chalk.redBright('/////////////////////////////////////////')}
    `);
}


export default logBeginMessage