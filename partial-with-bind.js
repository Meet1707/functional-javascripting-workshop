function logger(namespace) {
    // SOLUTION GOES HERE
    return console.log.bind(console, namespace)
}

module.exports = logger;


