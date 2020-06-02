const Cut = require('../Cut');
const parse_component_name = require('./parse_component_name');

/**
 * @param {String} line
 * @returns {Cut|null}
 */
module.exports = line => {
    const columns = line.split(',').map(param => (param.substring(1, param.length-1)));
    const amount = Number.parseInt(columns[1]);
    const nameColumn = columns[2].trim();
    const params = parse_component_name(nameColumn);
    
    if (!params) return null;

    return new Cut(params.name, params.width, params.thickness, params.length, amount);
}