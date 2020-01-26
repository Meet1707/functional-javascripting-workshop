function countWords(inputWords) {
    let word = inputWords.reduce((cc, i) => {
        cc[i] = ++cc[i] || 1;
        return cc;
    }, {})
    return word;
}