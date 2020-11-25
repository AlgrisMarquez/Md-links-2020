const validate = require('./validate');
const stats = require('./stats');

let options = {
    validate: false,
    stats: false,
}

process.argv.forEach((option) => {
    if (option === "--validate" || option === "--v") {
        options.validate = true;
    } else if (option === "--stats" || option === "--s") {
        options.stats = true;
    }
});