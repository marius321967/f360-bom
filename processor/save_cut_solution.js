const fs = require('fs');
const path = require('path');
const moment = require('moment');
const Cut = require('../Cut');
const group = require('../utils/group');
const process_cuts = require('./optimizer/process_cuts');
const inch_to_m = require('../helpers/inch_to_m');

/**
 * @param {Cut[]} cuts
 * @returns {Promise}
 */
module.exports = (cuts) => {
    const filename = 'solution-' + moment().utc().format('MMM-DD') + '.csv';
    const filepath = path.resolve(__dirname, '../output', filename);

    const groupedCuts = group(cuts, c => c.width);

    let totalVolume = 0;
    let totalWasteVolume = 0;

    Object.entries(groupedCuts).forEach(([ width, cuts ]) => {
        const parts = process_cuts(cuts);

        // Calculate volume
        const volume = inch_to_m(2) * inch_to_m(width) * 6 * parts.length;
        const headerLog = `Result for width ${width} (${volume.toFixed(2)} m2)`;
        console.log(headerLog);
        totalVolume += volume;

        parts.forEach((part, index) => {
            const indexPadded = (index + 1).toString().padStart(3, '0');
            let logMessage = 'Part #' + indexPadded + ': ';

            const partMessages = [];
            part.forEach(cut => {
                let partMessage = `${cut.name} (${cut.length.toFixed(2)})`;
                if (cut.amount > 1)
                    partMessage += ' x' + cut.amount;
                
                partMessages.push(partMessage);

                if (cut.name == 'Waste') 
                    totalWasteVolume += inch_to_m(2) * inch_to_m(width) * cut.length;
            });

            logMessage += partMessages.join(' - ');

            console.log(logMessage);
        });
    });

    console.log(`Total volume: ${totalVolume.toFixed(2)} m2`);
    console.log(`Total waste volume: ${totalWasteVolume.toFixed(2)} m2`);

    // const outfile = fs.createWriteStream(filepath);
    
    // outfile.write('N,MyPlan\n');
    // outfile.write('M,Gegnes\n');
    // outfile.write('@,Length,Quantity\n');
    // outfile.write('S,6,1000\n'); // Stock
    // outfile.write('@,Length,Quantity,Label\n');
    
    // cuts.forEach(cut => outfile.write(`P,${cut.length},${cut.amount},${cut.name}\n`));

    // outfile.end();

    return Promise.resolve();
}