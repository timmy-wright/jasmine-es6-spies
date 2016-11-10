"use strict";
function spyOnClass(Class) {
    if (!Class || !Class.prototype || !Class.prototype.constructor || !Class.prototype.constructor.name) {
        throw 'createSpyForClass requires an ES6 style class with a class name';
    }
    var props = [];
    var currentSearchClass = Class;
    do {
        if (currentSearchClass.prototype && Object.getOwnPropertyNames(currentSearchClass.prototype)) {
            var currentProps = Object.getOwnPropertyNames(currentSearchClass.prototype);
            for (var propIndex = 0; propIndex < currentProps.length; propIndex++) {
                var prop = currentProps[propIndex];
                if (props.indexOf(prop) === -1 && typeof currentSearchClass.prototype[prop] === 'function') {
                    props.push(prop);
                }
            }
        }
        currentSearchClass = Object.getPrototypeOf(currentSearchClass);
    } while (currentSearchClass);
    return jasmine.createSpyObj(Class.prototype.constructor.name, props);
}
exports.spyOnClass = spyOnClass;
