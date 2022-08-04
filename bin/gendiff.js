#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('9.4.0')
 
program.parse();