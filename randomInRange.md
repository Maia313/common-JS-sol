#### Generate a random number that falls within a range of two specific numbers

```js
function randomRange(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min; 

}
```
