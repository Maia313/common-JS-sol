# Common JS solutions

`A collection of most common JS problems and their solutions`

* ES6 introduces the new method `Array.includes(element)` which is a much cleaner solution than `Array.indexOf(element) > -1`


##### `Remove a particular element from an array` - Find the index of the array element you want to remove, then remove that index with splice.

```js
var array = [2, 5, 9];
var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}
```
##### `Sort an array alphabetically`

```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b){
    if (a < b) return -1;
      else if (a > b) return 1;
    return 0;
  })
}
```

### Native JS
```js

/*****************NATIVE forEACH*********************/

Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

/*****************NATIVE MAP*************************/

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

/*****************NATIVE FILTER*************************/

Array.prototype.myFilter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

/*****************NATIVE REDUCE*************************/


Array.prototype.myReduce = function(callback, initialVal) {
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

/*****************NATIVE EVERY*************************/

Array.prototype.myEvery = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this))
            return false;
    }
    return true;
};

/*****************NATIVE SOME*************************/

Array.prototype.mySome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true;
    }
    return false;
};

```
