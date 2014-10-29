#!/usr/bin/env node

var commander = require('commander'),
    await = require('await'),
    fs = require('fs');

var pkg = require('../package.json');

commander
    .version(pkg.version)
    .usage('<command> [options...]');
    
commander
    .command('init')
    .action(require('./init'));

commander
    .command('run')
    .option('--port <port>', 'port hoxy will listen on', 8080)
    .action(require('./run'));

commander
    .parse(process.argv);
