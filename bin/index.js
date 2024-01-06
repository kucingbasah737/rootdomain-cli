#! /usr/bin/env node

const readline = require('node:readline');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { orderBy } = require('hostname-natural-order');
const { parse } = require('tldts');

const { argv } = yargs(hideBin(process.argv))
  .option('exclude-non-icann', {
    type: 'boolean',
    default: false,
    describe: 'Exclude domain whose not a valid ICANN TLD'
  })
  .option('exclude-private', {
    type: 'boolean',
    default: false,
    describe: 'Exclude private domain from result'
  })
  .option('sort', {
    type: 'boolean',
    default: false,
    describe: 'Sort result using hostname natural order'
  })
  .strict();

const result = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const lineSanitized = line.trim().toLowerCase();
  if (!lineSanitized) return;

  const parsed = parse(lineSanitized);

  if (argv.excludeNonIcann && !parsed.isIcann) return;
  if (argv.excludePrivate && parsed.isPrivate) return;

  const domain = parsed.domain;
  if (!domain) return;

  if (argv.sort) {
    result.push(domain);
  } else {
    console.log(domain);
  }
});

rl.once('close', () => {
  if (argv.sort) {
    orderBy(result, (item) => item)
      .forEach((line) => console.log(line));
  }
});
