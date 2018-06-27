
+ **setter**:

```js
let cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'fullName', 
{
  set: function(value){
      let nameParts = value.split(' ');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
  }
})

console.log(cat.fullName);
```

+ **getter**:
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
