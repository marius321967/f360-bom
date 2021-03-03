module.exports = inch => {
    switch (inch) {
        case 4: return 0.095;
        case 6: return 0.145;
        case 8: return 0.195;
        default: return inch * 2.5 / 100;
    }
}