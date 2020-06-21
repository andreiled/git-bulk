#!/usr/bin/env node
'use strict';
const GitCollection = require('./lib/git-collection');
const ConfigFinder = require('./lib/config-finder');
const program = require('commander');
const HelpStrings = require('./lib/help-strings');
const process = require('./lib/process');

program
  .usage(HelpStrings.usageDoc)
  .description(HelpStrings.editDoc)
  .option('-c, --command-line <commandLine>', HelpStrings.commandLineDoc)
  .parse(process.argv);

new GitCollection(ConfigFinder.getConfig()).edit(program.commandLine, program.args);
