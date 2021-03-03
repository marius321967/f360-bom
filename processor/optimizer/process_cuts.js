const Cut = require('../../Cut');

/**
 * 
 * @param {Cut[]} cuts 
 */
module.exports = (cuts) => {
    cuts = cuts.map(c => ({ ...c })); // Clone items

    // Sort cuts by length - needed only for primitive optimization method
    cuts.sort((c1, c2) => {
        if (c1.length == c2.length) return 0;
        return (c1.length < c2.length) ? 1 : -1;
    });

    const parts = [];

    while (cuts.length > 0) {
        // Find optimal solution

        const part = [];
        let remainingLength = 6;

        cuts.forEach(cut => {
            // Include any parts
            const partsFitting = Math.floor(remainingLength/cut.length);
            const partsFittingReal = Math.min(partsFitting, cut.amount); // Dont fit more than we need

            // Include cut in part
            if (partsFittingReal > 0)
                part.push({ ...cut, amount: partsFittingReal });
            cut.amount -= partsFittingReal; // Reduce needed cuts
            
            remainingLength -= partsFittingReal*cut.length;
        });

        if (remainingLength > 0)
            part.push({ name: 'Waste', thickness: 2, width: part[0].width, length: remainingLength, amount: 1 });

        cuts = cuts.filter(c => c.amount > 0);

        parts.push(part);
    }

    return parts;
}