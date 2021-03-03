const read_all_cuts = require('./reader/read_all_cuts');
const report_cuts = require('./processor/report_cuts');
const report_volume = require('./processor/report_volume');
const save_cuts_report = require('./processor/save_cuts_report');
const save_cut_solution = require('./processor/save_cut_solution');

// Read files
read_all_cuts('./input')
    .then(cuts => 
        Promise.all([
            report_cuts(cuts).then(report_volume),
            save_cuts_report(cuts),
            save_cut_solution(cuts),
        ]));