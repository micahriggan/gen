#!/usr/bin/env node
// this program will take in multiple arguments
// the first argument shall be the name of the generator to use
// all generators will be put in the generators/ directory
// the remaining arguments will be passed into the exported function from the generator
//
var path = require('path');
var fs = require('fs');
var args = process.argv.slice(2);
var generatorName = args[0] || '';
var generators = require('./generators');
if(generatorName ===''){
	console.log('Please select a valid generator. Use --list to list all generators');
}
else if (generatorName === '--list') {
	console.log(Object.keys(generators));
}
else{
	var generator = generators[generatorName];
	var genArgs = args.slice(1);
	if (generator && typeof(generator) === 'function') {
		generator.apply(null, genArgs);
	}
}
