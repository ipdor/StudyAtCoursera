
# 1. Which is the correct syntax to change the contents of the HTML element below?    

```js
<p id = "quiz">This is a quiz. </p>
```

**document.getElementById('quiz').innerHTML  ="New content!!";**

quiz.innerHTML="New content!";

#quiz.innerHTML="New content!!";

document.getElementsByTagName('p').innerHTML ="New content!!";

# 2. Where can you put JavaScript?    

A) In the <head> section

B) In the <body> section

C) In an external file

In B) and C) above

**In A),  B) and C) above**

# 3.  Which attribute is used to link to an external JavaScript file?     

**src; e.g., src = "extFile.js"**

file; e.g., file = "extFile.js"

href; e.g., href = "extFile.js"

script; e.g., script = "extFile.js"


Attention, select the correct **attribute**! not tag

# 4. Which word is used to define a function in JavaScript?

**function**

func

define

# 5. Which of the following best defines relation between **defining** a function and **calling** a function?    

You can call a function without it being defined first.

**You can define a function without calling it.**

**Defining** and **calling** a function are the same thing

> I forgot to answer the question 5, so I got a new question when I tried again.

# 5. Which of the following best defines the relationship between defining a function and calling a function?    

A function can be defined multiple times in a single file

**A function can be called multiple times in a single file.**

# 6. Consider the following code:

```js
<body onload = "Hello()">
  <p> This is paragraph one </p>
  <p onclick = "Hello()"> This is paragraph two </p>
```

The function Hello() will be called every time:    

A)  The page is loaded

B) The user clicks on any paragraph on the page

C) The user clicks on the second paragraph on the page

**D) A and C**

E) The function is never called.

# 7. What is wrong with this function definition?

```js
function Hello();{
   alert("Hello");
   document.write("Hello on the screen");
}
```

You can't use document.write after using an alert.

The fact that you are outputting the message twice

**The semicolon after Hello()**