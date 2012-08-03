exports.engaged = false;
exports.engage = function () {
    exports.engaged = true;
};

exports.disengage = function () {
    exports.engaged = false;
};

(function () { try {
    var Stream = require('net').Stream.prototype;
    var write = Stream.write;
    Stream.write = function () {
        if (exports.engaged && typeof arguments[0] === 'string') {
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
        if (exports.engaged && typeof res === 'string') {
            return res.toUpperCase();
        }
        else return res;
    };
});
