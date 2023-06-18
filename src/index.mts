#! /usr/bin/env node
import chalk from "chalk";
import logBeginMessage from "./beginMessage.mjs";
import * as fileContent from "./fileContent.mjs";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

logBeginMessage();

fs.mkdirSync('client');
console.log(chalk.blue("./client directory created"));
fs.mkdirSync('client/TS', {recursive: true});
console.log(chalk.blue("./client/TS directory created"));
fs.mkdirSync('client/JS', {recursive: true});
console.log(chalk.blue("./client/JS directory created"));
fs.mkdirSync('client/CSS', {recursive: true})
console.log(chalk.blue("./client/CSS directory created"));
fs.mkdirSync('server');
console.log(chalk.blue("./server directory created"));
fs.mkdirSync('server/dist', {recursive: true});
console.log(chalk.blue("./server/dist directory created"));

fsPromises.writeFile('package.json', fileContent.packageJsonContent).then(() => console.log(chalk.blue('package.json file written successfully')));
fsPromises.writeFile('package-lock.json', fileContent.packageJsonLockContent).then(() => console.log(chalk.blue('package-lock.json file written successfully')));
fsPromises.writeFile('tsconfig.json', fileContent.tsconfigJsonContent).then(() => console.log(chalk.blue('tsconfig.json written successfully')));
fsPromises.writeFile('README.md', fileContent.readmeContent).then(() => console.log(chalk.blue("README.md written successfully")));
fsPromises.writeFile('.gitignore', fileContent.gitignoreContent).then(() => console.log(chalk.blue(".gitignore written successfully")));


if(fs.existsSync('client')) {
    fs.writeFileSync('client/index.html', fileContent.clientIndexHTMLcontent);
    console.log("index.html written successfully");
}

if(fs.existsSync('server')) {
    fs.writeFileSync('server/server.ts', fileContent.serverTsContent);
    console.log("server.ts written successfully");
}











