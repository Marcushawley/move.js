var emitter = require('component-css-emitter');

function afterTransition(el, callback) {
    // if(true) {
    return emitter(el).bind(callback);
    // }
    // return callback.apply(el);
};

afterTransition.once = function (el, callback) {
    afterTransition(el, function fn() {
        callback.apply(el);
        emitter(el).unbind(fn);
    });
};

module.exports = afterTransition;