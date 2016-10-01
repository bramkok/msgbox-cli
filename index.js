#!/usr/bin/env node
const meow = require('meow');
const msgbox = require('msgbox');

const cli = meow(`
	Usage
	  $ msgbox <title> <message>

	Examples
	  $ msgbox "Try a Clickbait Title" "You wont believe what will happen next!"`);

const title = cli.input[0];
const message = cli.input[1];

if (typeof title === 'undefined') {
  console.error('Error: title is missing');
  console.error('Usage: msgbox <title> <message>');
  process.exit(1);
}

if (typeof message === 'undefined') {
  console.error('Error: message is missing');
  console.error('Usage: msgbox <title> <message>');
  process.exit(1);
}

msgbox(title, message);
