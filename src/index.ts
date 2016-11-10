
export function spyOnClass(Class: any): any {

  if (!Class || !Class.prototype || !Class.prototype.constructor || !Class.prototype.constructor.name) {
    throw 'createSpyForClass requires an ES6 style class with a class name';
  }

  var props: string[] = [];
  var currentSearchClass = Class;

  // search for any class methods
  do {
    if (currentSearchClass.prototype && Object.getOwnPropertyNames(currentSearchClass.prototype)) {
      var currentProps = Object.getOwnPropertyNames(currentSearchClass.prototype);

      // check for duplicates and only add functions
      for (var propIndex = 0; propIndex < currentProps.length; propIndex++) {
        var prop = currentProps[propIndex];
        if (props.indexOf(prop) === -1 && typeof currentSearchClass.prototype[prop] === 'function') {
          props.push(prop);
        }
      }
    }

    // move up the prototype hierarchy
    currentSearchClass = Object.getPrototypeOf(currentSearchClass);
  } while (currentSearchClass);

  // create a spy object containing all the props
  return jasmine.createSpyObj(Class.prototype.constructor.name, props);
}
