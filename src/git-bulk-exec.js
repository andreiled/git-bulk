#!/usr/bin/env node
'use strict';
const GitCollection = require('./lib/git-collection');
const ConfigFinder = require('./lib/config-finder');
const program = require('commander');
const HelpStrings = require('./lib/help-strings');
const process = require('./lib/process');

program
  .usage(HelpStrings.usageDoc)
  .description(HelpStrings.execDoc)
  .option('-c, --command-line <commandLine>', HelpStrings.commandLineDoc)
  .parse(process.argv);

new GitCollection(ConfigFinder.getConfig()).exec(program.commandLine, program.args);
