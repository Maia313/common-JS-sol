![JS](https://img.shields.io/badge/JS-solutions-ff69b4.svg)

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
  return arr.sort(function(a,b){
    if (a < b) return -1;
      else if (a > b) return 1;
    return 0;
  })
}
```
1. If the return value is less than 0, a should come first(have a lower index).
2. If the return value is greater than 0, b should come first.
3. If the return value is equal to 0, leave order of a and b unchanged with respect to
    each other.
```js
products.sort((a, b) => (
      b.votes - a.votes
    ));
```
##### `Sort the elements of an array in ascending order without mutating`
```js
function nonMutatingSort(arr) {
  return arr.concat().sort();
}
```
##### `Return a Sorted Array Without Changing the Original Array`
```js
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b)=>a>b);
}
```

##### `Sum All Numbers in a Range`
```js
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}
```

##### `Diff 2 arrays` - return the symmetric difference of the two arrays
```js
function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  
  return newArr;
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

Array.prototype.myFilter = function(callback){
  var newArray = [];
 
  this.forEach(el => callback(el)? newArray.push(el): '');

  return newArray;

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
### `Currying`

The arity of a function is the number of arguments it requires. `Currying` a function means to convert a function of `N arity` into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:
```js
    //Un-curried function
    function unCurried(x, y, z) {
      return x + y + z;
    }

    //Curried function
    function curried(x) {
      return function(y) {
        return x + y;
      }
    }
    curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:
```js
    // Call a curried function in parts:
    var funcForY = curried(1);
    var funcForZ = funcForY(2);
    console.log(funcForZ(3)); // Prints 6
```
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

Here's an example:
```js
    //Impartial function
    function impartial(x, y, z) {
      return x + y + z;
    }
    var partialFn = impartial.bind(this, 1, 2);
    partialFn(10); // Returns 13
```

```js
function add(x) {
  return function(y) {
    return function(z){
      return x + y + z;
    };
  }
}
```


