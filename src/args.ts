function argDirectory(): string {
    if(process.argv[2] !== undefined) {
        const output = process.argv[2].replace(/[\/\\\s]+$/g, '');
        return output;
    }
    else {
        return "Bad argument"
    }
}

export {
    argDirectory
}