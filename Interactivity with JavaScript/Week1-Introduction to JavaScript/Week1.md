# DOM Review with Object Oriented Programming

## DOM
Document -the root of the page

## node 

Every element in DOM is a node, which has attribute(s)

## nodeList

An array(group) of elements

## How javascript interact with DOM?

API, for example:

> document.getElementById(id)  
> document.getElementsByClassName(class)  
> element.innerHTML  
> element.style  
> element.setAttribute(attribute, value)  
> element.removeAttribute(attribute)  

# Output

JavaScript doesn't have a built-in
print function

Data is displayed via
- an alert box using ```window.alert()```, ```alert()```   
- a prompt using ```window.prompt()```, ```prompt()```   
- HTML output using ```document.write()```  
- HTML element using ```element.innerHTML```  
- the browser console using ```console.log()```   


```javascript
element.innerHTML = "Time to learn JavaScript ";
```

## What's the diffierence 
between ```alert()``` and ```prompt()```, ```document.write()``` and ``element.innerHTML``, and ```console.log()```?
>
> The main difference is **where they output text**
> 
> ```alert()``` and ```prompt()``` - a temporary popup box 
> *   alert - output
> *   prompt - output and input    
> 
> ```document.write()```, ```element.innerHTML``` - permanently write to document(or more specific, an element)  
> 
> ```console.log``` - browser console



## Tricks
I encountered some problems and learnt something.

### Javascript is case-sensitive

problem: ```Uncaught TypeError: document.getelementbyid is not a function```

```html
<script> 
  document.write("Hello World"); 
  document.getelementbyid('a').innerHTML="abc"; //must be 'getElementById'
</script>

<p id='a'>As a test, what happens if you remove the script tag up above?</p>
```


### Be cautious about sequence

problem: ```Uncaught TypeError: document.getElementById(...) is null``` 

```html
<script> 
  document.getElementById('a').innerHTML="abc";
</script>

<p id='a'>As a test, what happens if you remove the script tag up above?</p>
```


When the script excuted, HTML parser hasn't resolved the ```<p>``` element. **Therefore, there isn't any  ```<p>``` element untill excuting the script.**

To solve it:  
1. Rearrange the order of the code
2. Execute the script code after the page has loaded, for example using the ```DOMContentLoaded``` event.



```html
<!--Following is the method 2-->
<script> 
  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('a').innerHTML = "abc";
  });
</script>

<p id='a'>As a test, what happens if you remove the script tag up above?</p>
```

# Variables

If don't use ```var``` to declare a variable, you will get a global variable. That may cause problems

```javascript
document.write(document.baseURI); //get the uri of current page

document.write(window.location); //The window.location.href property returns the URL of the current page.
```
```
https://cdpn.io/cpe/boomboom/index.html?key=index.html-15ca6afd-8a2d-a6b0-06cf-37e145a8e6fa
```


# Data Types

```javascript
var name = prompt( ¡°What is your name?¡± );
var name = Date();
var name = window.location; //String, The window.location.href property returns the URL of the current page.
```


* Number
* String, single and double quates are the same
* Boolean
* Object
  ```javascript
  var topic = document.getElementById('myID');
  ```
* Array
  ```javascript
  var links = document.getElementsByTagName('a');
  document.write(links[0]);
  ```

For now, focus on learning the **types of data returned by the most common APIs**.


example:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <title>JavaScript Types</title>
</head>

<body>
  
	  <script>
		    var name;
    name = prompt("What is your name?");
			    document.write(name);
			    document.write("<h1>" + name + "</h1>");
			    document.write(name + 7+"<br>");
			    document.write(document.title+"<br>");
    var pars = document.getElementsByTagName('p');
    document.write(pars + "<br/>");
    document.write(pars.length);
	  </script>
</body>
</html>
```



# Operators and Expressions

Almost the same as C/C++, but there is a few difference.


1. string  
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307071543612.png)

if we connect a string and a number, the result is a connected string

2. boolean
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307071542045.png)


The == operator only checks for equivalent values, not equivalent type too.

We can compare a number and a string using ```==```.  
But ```===``` is more strict.



```javascript
x = 12;
x === "12";
x !== "12"; 
```

