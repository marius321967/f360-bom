const glob = require('glob');
const path = require('path');

/**
 * @returns {Promise<string[]>}
 */
module.exports = directory => {
    return new Promise((resolve, reject) => {
        glob(directory + '/*.csv', (err, matches) => {
            if (err) return reject(err);

            resolve(matches.map(m => (path.basename(m))));
        });
    });
}