# QSS - Quick Static Server for Typescript Development
* [Description](#description)
* [Download](#download)
* [Usage](#usage)

# Description

QSS is a CLI that creates a simple static server, for serving static files on localhost, written in Node and Typescript, powered by ESbuild. It is blazingly fast, does not abstract anything and is customisable to the extreme.   

# Download

Run `npx qss [directory]` and follow the instructions in the terminal


# Usage

Once you install it write all the client code in `/client` directory however you desire and build it with `npm run buildClient`.
Afterwards you can view the app on localhost by running
`npm run dev` and entering `http://localhost:PORT/`, in the browser, where PORT is the port number , that the server is running on, by default - `3215`

You can customise the node server code, to suit your needs in `/server` directory if you so desire

All other built-in scripts are in `package.json` and you can add your own.

