#!/usr/bin/env node

console.time("Took")

const fs = require('fs')
const SRC_DIR = "src/"
const INPUT = "index.html"
const OUTPUT = "index.html"

function toDataURI( filename ){
	var raw = fs.readFileSync( SRC_DIR + filename )
	return "data:image/png;base64," + raw.toString('base64')
}

function replaceAll( filename ){
	var raw = fs.readFileSync( filename, "utf8" )
	return raw.replace( /\w+\.png/g , toDataURI )
}

console.log("Compiling...")
fs.writeFileSync( OUTPUT, replaceAll( SRC_DIR + INPUT ) )
console.log("Done.")

console.timeEnd("Took")

