/**
 * @param {Cut} c1
 * @param {Cut} c2
 * @returns {Boolean}
 */
module.exports = (c1, c2) => {
    return c1.name == c2.name 
        && c1.width == c2.width 
        && c1.thickness == c2.thickness 
        && c1.length == c2.length;
}