Utils = {};

Utils.getRandom = function(array, samples) {
    var result = new Array(samples),
        len = array.length,
        taken = new Array(len);
    if (samples > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (samples--) {
        var x = Math.floor(Math.random() * len);
        result[samples] = array[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

Utils.shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

