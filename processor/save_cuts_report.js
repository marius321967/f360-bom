const fs = require('fs');
const path = require('path');
const moment = require('moment');
const Cut = require('../Cut');

/**
 * @param {Cut[]} cuts
 * @returns {Promise}
 */
module.exports = (cuts) => {
    const filename = 'output-' + moment().utc().format('MMM-DD') + '.csv';
    const filepath = path.resolve(__dirname, '../output', filename);

    const outfile = fs.createWriteStream(filepath);
    
    // outfile.write('name, thickness, width, length, qty\n');

    // cuts.forEach(cut => {
    //     outfile.write(`${cut.name}, ${cut.thickness}, ${cut.width}, ${cut.length}, ${cut.amount}\n`);
    // })

    outfile.write('N,MyPlan\n');
    outfile.write('M,Gegnes\n');
    outfile.write('@,Length,Quantity\n');
    outfile.write('S,6,1000\n'); // Stock
    outfile.write('@,Length,Quantity,Label\n');
    
    cuts.forEach(cut => outfile.write(`P,${cut.length},${cut.amount},${cut.name}\n`));

    outfile.end();

    return Promise.resolve();
}