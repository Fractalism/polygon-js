# polygon-js

## Description
Point-generator for regular polygons.

## Usage
### Embedding
Download polygon.js from this repository and put it into your project folder (e.g. ./js/). If you're working with HTML embed this code:
```html
<script src="./js/polygon.js" type="text/javascript"></script>
<script>
    var polygon = new PolygonJS();
</script>
```

### Arguments

| # | Description                                  | Default   |
|--:|:---------------------------------------------|:----------|
| 0 | edge count (optional)                        | 3         |
| 1 | radius (optional)                            | 1         |
| 2 | central point (optional)                     | {x:0,y:0} |
| 3 | function to call back (Stream+Callback only) |           |

### Callback
This will call a function when the generator is done. The output will be an Array of points. Those points are Objects with x and y properties.

```javascript
// 4 edges, 100px radius, M(0|0)
polygon.generate(4,100,{x:0,y:0}, function (err, data) {
    console.log({err:err,data:data});
});

// minimalist
polygon.generate(function (err, data) {
    console.log({err:err,data:data});
});
```

### Synchronous
This will return all points as an Array when done. Those points are Objects with x and y properties.

```javascript
// 4 edges, 100px radius, M(0|0)
console.log(polygon.generateSync(4,100,{x:0,y:0}));

// minimalist
console.log(polygon.generateSync());
```

### Stream
Deprecated.

## License

Copyright `2017` Florian Wendelborn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
