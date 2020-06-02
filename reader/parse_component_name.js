const pattern = /^([\w\s]+) (\d)+by(\d+) x ((\d+)(\.\d+)?)m$/

/**
 * Parse BOM component name for some details on the construction material.
 * @param {String} name
 * @returns {Object|null} Part of properties for a Cut.
 */
module.exports = name => {
    
    const matches = name.match(pattern);
    if (!matches) return null;
    
    return {
        name: matches[1],
        thickness: Number.parseInt(matches[2]),
        width: Number.parseInt(matches[3]),
        length: Number.parseFloat(matches[4]),
    };
}