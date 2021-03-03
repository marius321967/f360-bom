/**
 * Prints the given cuts and their names without modifying them.
 */
module.exports = cuts => {
    console.log('Cuts for construction:');

    cuts.forEach(cut => {
        const nameCol = '[' + cut.name + ']';
        const nameColPadded = nameCol.padEnd(18, ' ');
        console.log(' - ' + nameColPadded + ' thickness: ' + cut.thickness + '\twidth: ' + cut.width + '\tlength: ' + cut.length + '\tamount: ' + cut.amount);
    })

    console.log();
    return Promise.resolve(cuts);
}