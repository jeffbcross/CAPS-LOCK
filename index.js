(function () { try {
    var Stream = require('net').Stream.prototype;
    var write = Stream.write;
    Stream.write = function () {
        if (typeof arguments[0] === 'string') {
            arguments[0] = arguments[0].toUpperCase();
        }
        return write.apply(this, arguments);
    };
} catch (e) {} })();

var keys = Object.getOwnPropertyNames(String.prototype)
    .filter(function (key) {
        return [ 'toUpperCase', 'toLowerCase' ].indexOf(key) < 0;
    })
;

keys.forEach(function (key) {
    var original = String.prototype[key];
    
    String.prototype[key] = function () {
        var res = original.apply(this, arguments);
        if (typeof res === 'string') {
            return res.toUpperCase();
        }
        else return res;
    };
});

String.prototype.inspect = function () {
    return JSON.stringify(this).replace(/^"|"$/g, '\'')
};
