# jasmine-es6-spies
ES6 spies for Jasmine

Use it like this:

```typescript

import {spyOnClass} from "jasmine-es6-spies";

class ClassName {
    method() {} 
}

var spyObj = spyOnClass(ClassName);
```

The spyObj variable will contain a jasmine spy object with the same methods
as the class. So in this case, one method called "method".

It's on GitHub at <https://github.com/drtimwright/jasmine-es6-spies>

