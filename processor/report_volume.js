const inch_to_m = require('../helpers/inch_to_m');

/**
 * Calculates volume of the material.
 * @param {Cut[]} cuts
 * @returns {Cut[]}
 */
module.exports = cuts => {
    let volume = 0.0; // m^3
    cuts.forEach(cut => {
        const realThickness = inch_to_m(cut.thickness);
        const realWidth = inch_to_m(cut.width);

        volume += realThickness * realWidth * cut.length * cut.amount;
    });

    console.log('Total theoretical volume of construction:\t ' + volume + ' m^3');

    return Promise.resolve(cuts);
}