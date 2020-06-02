const cuts_match = require('./cuts_match');

/**
 * @oaram {Cut[]} originalCuts
 * @param {Cut[]} newCuts
 * @returns {Cut[]}
 */
module.exports = (originalCuts, newCuts) => {
    newCuts.forEach(cut => {
        for (let i = 0; i < originalCuts.length; i++) {
            const originalCut = originalCuts[i];

            if (cuts_match(originalCut, cut)) {
                // Combine cuts.
                originalCut.amount += cut.amount;
                return; // Prevent originalCuts.push()
            }
        }

        originalCuts.push(cut);
    });

    return originalCuts;
}