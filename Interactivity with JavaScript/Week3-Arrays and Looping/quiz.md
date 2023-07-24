
# 1.Which is the correct syntax to change the contents of the HTML element below?
```html
<p id = "quiz">This is a quiz. </p>
```

document.getElementsByTagName('p').innerHTML = "New content!";

**document.getElementById('quiz').innerHTML = "New content!";**

document.getElementById('quiz').innerHTML("New content!");

document.getElementsByTagName('p').innerHTML("New content!");

# 2.Where can you put JavaScript?

Just in the ```<body> ```section

Just in the ```<head> ```section

**In the head and body section**

# 3.Built-in JavaScript functions (alert, prompt, etc) cannot be mixed in with other HTML code unless you use the ```<script> ```tag.

True

**False**

> Correct.  Any element of the DOM can have an event attached to it.

# 4.Which of the following is the proper way to link to an external JavaScript file?

```<script href=“file.js”></script>```

```<script = “file.js”></script>```

```<script file = “file.js”></script>```

```<script>”file.js”</script>```

**```<script src = “file.js”></script>```**

# 5.Which keyword is used to define a function in JavaScript?

function


# 6.If a function is defined twice, the first declaration will be called when used.


True

**False**


# 7.A function can be called multiple times in a single file.

**True**

False

# 8.You can define a function without calling it.

**True**

False

> You will find that when you first start coding it isn't uncommon to write functions that you think you will use, but then never do.

# 9.You can call a function without it being defined.


True

**False**

# 10.Conditional statements change the flow of execution in a program — the “next” line of code in the program is not always the next one that is executed.

**True**

False

# 11.What is true about this code?
```html
<a href = "http://www.umich.edu" onclick = "return true">University of Michigan</a><br/>

<a href = "#" onclick = "alert(this.href)">University of Michigan </a><br/> 

<a href = "page2.html" onclick = "alert(this.href)">University of Michigan </a><br/>
```

**Only the first link will take you to the University of Michigan website .**

Only the second link will take you to the University of Michigan website.

Only the third link will take you to the University of Michigan website.

None of the links will take you to the University of Michigan website.

# 12.What is true about this code?
```html
<a href = "http://www.umich.edu" onclick = "alert(this.href)">University of Michigan</a><br/>

<a href = "#" onclick = "alert(this.href)">University of Michigan </a><br/> 

<a href = "page2.html" onclick = "alert(this.href)">University of Michigan </a><br/>
```

**Only the first link will produce the alert  “http://www.umich.edu/“.**

Only the second link will produce the alert  “http://www.umich.edu/“.

Only the third link will produce the alert  “http://www.umich.edu/“.

None of the links will produce the alert  “http://www.umich.edu/“.


# 13.Assume you have a page with four paragraph tags, one of which has the id "second".  What is the proper JavaScript code to change the content of that  paragraph to "What does the Fox say?"

Note:

The quotes shouldn't be part of the value.

Please end the line of code with a semicolon.

Note, you can't assume that this is the second paragraph.



```js
document.getElementById("second").innerHTML = "What does the Fox say?";
```

# 14.Assume you have a page with four paragraph tags.  What is the proper JavaScript code to change the content of the second paragraph to "What does the Fox say?"

```document.getElementById('second').innerHTML = "What does the Fox say?"```

```document.getElementById('p')[2].innerHTML = "What does the Fox say?"```

```document.getElementsByTagName('p').innerHTML = "What does the Fox say?"```

```document.getElementByTagName('p')[2].innerHTML = "What does the Fox say?"```

**```document.getElementsByTagName('p')[1].innerHTML = "What does the Fox say?"```**


# 15.How do you properly access the first element in an array variable named "fruit"

**fruit[0]**

fruit[1]

[fruit]0

fruit_0

None of the above.

