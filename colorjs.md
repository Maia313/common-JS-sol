```js
function random(num){
    return Math.floor(Math.random()*num)
}

function randomColor() {
    function c(){
        var hex=random(256).toString(16)
        console.log(hex)
        return('0'+String(hex)).substr(-2)
    }

    return "#"+c()+c()+c()
}

randomColor()
```
