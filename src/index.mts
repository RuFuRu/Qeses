#! /usr/bin/env node
import chalk from "chalk";
import logBeginMessage from "./beginMessage.mjs";
import * as fileContent from "./fileContent.mjs";
import * as args from "./args.js";
import fs from "node:fs";

let dir = args.argDirectory();

if(dir !== "Bad argument" && dir !== ".") {
    fs.mkdirSync(dir, {recursive: true});
} else {
    dir = ".";
}

fs.mkdirSync(dir + '/client', {recursive: true});
console.log(chalk.blue("./client directory created"));
fs.mkdirSync(dir + '/client/TS', {recursive: true});
console.log(chalk.blue("./client/TS directory created"));
fs.mkdirSync(dir + '/client/JS', {recursive: true});
console.log(chalk.blue("./client/JS directory created"));
fs.mkdirSync(dir + '/client/CSS', {recursive: true})
console.log(chalk.blue("./client/CSS directory created"));
fs.mkdirSync(dir + '/server', {recursive: true});
console.log(chalk.blue("./server directory created"));
fs.mkdirSync(dir + '/server/dist', {recursive: true});
console.log(chalk.blue("./server/dist directory created"));

fs.writeFileSync(dir + '/package.json', fileContent.packageJsonContent);
console.log(chalk.blue('package.json file written successfully'));
fs.writeFileSync(dir + '/package-lock.json', fileContent.packageJsonLockContent)
console.log(chalk.blue('package-lock.json file written successfully'))
fs.writeFileSync(dir + '/tsconfig.json', fileContent.tsconfigJsonContent);
console.log(chalk.blue('tsconfig.json written successfully'))
fs.writeFileSync(dir + '/README.md', fileContent.readmeContent)
console.log(chalk.blue("README.md written successfully"))
fs.writeFileSync(dir + '/.gitignore', fileContent.gitignoreContent)
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
console.log(`           1.Run npm run buildServer`);
console.log(`           2.Enter the http://localhost at the given port`);

console.log(dir + "/");










