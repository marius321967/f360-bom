const read_all_cuts = require('./reader/read_all_cuts');
const report_cuts = require('./processor/report_cuts');
const report_volume = require('./processor/report_volume');

// Read files
read_all_cuts('./input')
    .then(cuts => {
        report_cuts(cuts)
            .then(report_volume);
    });



// Calculate stats

// Report