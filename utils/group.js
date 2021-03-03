module.exports = (items, callback) => {
    const result = {};

    items.forEach(item => {
        const groupValue = callback(item);

        if (!(groupValue in result))
            result[groupValue] = [];

        result[groupValue].push(item);
    })

    return result;
}