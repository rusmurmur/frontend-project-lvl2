#!/usr/bin/env node

import { Command } from 'commander';


const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('9.4.0', '-V, --version', 'version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse(process.argv);
