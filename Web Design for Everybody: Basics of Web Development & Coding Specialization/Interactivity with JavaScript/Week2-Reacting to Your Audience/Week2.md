---
title: Week2
time: 2023.07.18
tags: [JavaScript, ¼ÆËã»ú]
---

## Functions

use keyword ```function```.

```javascript
function welcomeMsg(msg){
    alert(msg);
    var name = prompt("What is your name?");
    return name;
}

var firstName= welcomeMsg("Hi");
```
<!--more-->

## Code Placement

1. In one HTML file

```javascript
<head>
    <script>
        function message(){
            alert("This alert box was called with the onload event");
        }
    </script>
</head>
<body>
    <h1></h1>
    <script>
        message();
    </script>
</body>
```


2. In a external file

```html

<head>
    <script src="js/two-external.js"></script>
</head>
<body>
    <h1>Functions</h1>
    <script>
        message();
    </script>
</body>
```


```javascript
//js/two-external.js
function message(){
    alert("This alert box was called with the onload event");
}
```

## Folder Structure / Organizing Your Code

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307181541194.png)

## Events

? It has been up to us to decide when the
functions should execute  
? It would be better if the functions were
called based on special ¡°events¡±  
? The JavaScript API lets us add dynamic
function calls!!  

Typical events:  
* onclick
* onmouseover
* onresize
* onload

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307181601107.png)

## Example1

HTML
```html
<body onload="message('onload')" onresize="message('onresize')">

<p id="demo">This is a paragraph.</p>
<button onclick="message('onclick')">Click Me</button>

</body>
```

JS
```js
function message(msg){
    console.log(msg+" event");
    if (msg === "onclick"){
        document.getElementById("demo").innerText=Date();
    }
}
```

## Example2


HTML
```html
<body onload="setTime()">

<p id="time">This is a paragraph.</p>
</body>
```

JS
```js
function setTime(){
    document.getElementById("time").innerText=Date();
}
```


Without the events, JavaScript would be
limited in ability to interact with the DOM


## Code with me 

We can also write JS code, instead of functions in events.

```js
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/codewithme.css">
        <script src="js/test.js"></script>
    </head>
    <body>
        <h1>Modify the DOM</h1>
        <button onclick="getElementById('stuff').innerText='First'">First</button>
        <button onclick="getElementById('stuff').innerText='Third'">Third</button>
        
        <p>This code shouldn't change.</p>
        <p id="stuff">This will change.</p>
        <p>This shouldn't change either.</p>
    </body>
</html>
```


## "this"

"this" is a keyword that allows an element to reference itself, every object in the DOM has an automatically gnerated "this".

```html
<img src="..." alt="Awesome 80's haircut" onclick="console.log(this.alt)">

```
