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
