exports.ENGAGED = false;
exports.ENGAGE = function () {
    exports.ENGAGED = true;
};

exports.DISENGAGE = function () {
    exports.ENGAGED = false;
};

(function () { try {
    var STREAM = require('net').Stream.prototype;
    var WRITE = STREAM.write;
    STREAM.write = function () {
        if (exports.ENGAGED && typeof arguments[0] === 'string') {
            arguments[0] = arguments[0].toUpperCase();
        }
        return WRITE.apply(this, arguments);
    };
} catch (e) {} })();

var KEYS = Object.getOwnPropertyNames(String.prototype)
    .filter(function (KEY) {
        return [ 'toUpperCase', 'toLowerCase' ].indexOf(KEY) < 0;
    })
;

KEYS.forEach(function (KEY) {
    var ORIGINAL = String.prototype[KEY];
    
    String.prototype[KEY] = function () {
        var RES = ORIGINAL.apply(this, arguments);
        if (exports.ENGAGED && typeof RES === 'string') {
            return RES.toUpperCase();
        }
        else return RES;
    };
});
