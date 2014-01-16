#polygon-js

##Description
Point-generator for regular polygons.

##Usage
###Embedding
Download polygon.js from this repository and put it into your project folder (e.g. ./js/). If you're working with HTML embed this code:
````html
<script src="./js/polygon.js" type="text/javascript"></script>
<script>
    var polygon = new PolygonJS();
</script>
````

###Arguments

| # | Description                                  | Default   |
|--:|:---------------------------------------------|:----------|
| 0 | edge count (optional)                        | 3         |
| 1 | radius (optional)                            | 1         |
| 2 | central point (optional)                     | {x:0,y:0} |
| 3 | function to call back (Stream+Callback only) |           |

###Callback
This will call a function when the generator is done. The output will be an Array of points. Those points are Objects with x and y properties.

````javascript
// 4 edges, 100px radius, M(0|0)
p.generate(4,100,{x:0,y:0}, function (err, data) {
    console.log({err:err,data:data});
});

// minimalist
p.generate(function (err, data) {
    console.log({err:err,data:data});
});
````

###Synchronous
This will return all points as an Array when done. Those points are Objects with x and y properties.

````javascript
// 4 edges, 100px radius, M(0|0)
console.log(p.generateSync(4,100,{x:0,y:0}));

// minimalist
console.log(p.generateSync());
````

###Stream
This will call a function as soon as any point is done. The output will be a point (Object) with x and y properties.

````javascript
// 4 edges, 100px radius, M(0|0)
p.generateStream(4,100,{x:0,y:0}, function (err, data) {
    console.log({err:err,data:data});
});
// minimalist
p.generateStream(function (err, data) {
    console.log({err:err,data:data});
});
````

##License

BSD 2-Clause License

Copyright (c) 2013, Florian Wendelborn
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
