const scan_directory = require('./scan_directory');
const report_files = require('./report_files');
const parse_file = require('./parse_file');
const combine_cuts = require('./combine_cuts');

/**
 * @returns {Promise<Cut[]>}
 */
module.exports = directory => {
    let cuts = [];

    return scan_directory(directory)
        .then(files => {
            if (!files.length) throw new Error('No .csv files found in ' + directory);

            report_files(files, directory);

            // Parse & combine.
            files.forEach(file => {
                const newCuts = parse_file(directory + '/' + file);
                cuts = combine_cuts(cuts, newCuts);
            })

            return cuts;
        })
}