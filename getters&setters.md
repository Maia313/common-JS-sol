
+ getter:
```js
let cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'fullName', 
{
  get: function(){
      return this.name.first + ' ' + this.name.last
  }
})

console.log(cat.fullName);
```
