const fs = require('fs');
const parse_cut = require('./parse_cut');

/**
 * Synchronously parse file for cuts.
 * @returns {Cut[]}
 */
module.exports = filename => {
    const lines = fs.readFileSync(filename).toString().replace('\r', '').split('\n');
    lines.shift(); lines.shift(); lines.pop(); // Remove two top lines and last empty line.

    return lines
        .map(line => parse_cut(line))
        .filter(cut => cut !== null);
}