const R = require('ramda');

var letterCount = function (sentence) {
    console.log(require.main.filename);


    console.log(module.parent.filename);

    let trimmed = R.trim(sentence),
        replaced = R.replace(/\s/g, '', trimmed);

    replaced = R.replace(/\W/g, '', replaced);

    let wordArr = R.splitEvery(1, replaced);
    return R.length(wordArr);
};

exports.letterCount = letterCount;