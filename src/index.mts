#! /usr/bin/env node
import chalk from "chalk";
import logBeginMessage from "./beginMessage.mjs";
import * as fileContent from "./fileContent.mjs";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

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

fs.writeFileSync('package.json', fileContent.packageJsonContent);
console.log(chalk.blue('package.json file written successfully'));
fs.writeFileSync('package-lock.json', fileContent.packageJsonLockContent)
console.log(chalk.blue('package-lock.json file written successfully'))
fs.writeFileSync('tsconfig.json', fileContent.tsconfigJsonContent);
console.log(chalk.blue('tsconfig.json written successfully'))
fs.writeFileSync('README.md', fileContent.readmeContent)
console.log(chalk.blue("README.md written successfully"))
fs.writeFileSync('.gitignore', fileContent.gitignoreContent)
console.log(chalk.blue(".gitignore written successfully"));


if(fs.existsSync('client')) {
    fs.writeFileSync('client/index.html', fileContent.clientIndexHTMLcontent);
    console.log(chalk.blue("index.html written successfully"));
}

if(fs.existsSync('server')) {
    fs.writeFileSync('server/server.ts', fileContent.serverTsContent);
    console.log(chalk.blue("server.ts written successfully"));
}


logBeginMessage();

console.log("Instructions");
console.log(`           1.Run npm run compile`);
console.log(`           2.Enter the http://localhost at the given port`)










