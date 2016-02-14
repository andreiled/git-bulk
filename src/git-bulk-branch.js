#!/usr/bin/env node
'use strict';

const GitCollection = require('./lib/git-collection');
const PackageFinder = require('./lib/package-finder');
const program = require('commander');
const HelpStrings = require('./lib/help-strings');

program
  .option('-a, --all', HelpStrings.allDoc)
  .description(HelpStrings.branchDoc)
  .parse(process.argv);

new GitCollection(PackageFinder.getPackages()).branch(program.all);
