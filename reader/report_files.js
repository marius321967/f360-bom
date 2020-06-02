module.exports = (files, directory) => {
    console.log('Found .csv files in ' + directory + ':');
    files.forEach(file => {
        console.log(' - ' + file);
    })
    console.log();
}