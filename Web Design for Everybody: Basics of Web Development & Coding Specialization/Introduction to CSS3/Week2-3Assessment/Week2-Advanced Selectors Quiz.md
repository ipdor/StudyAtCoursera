# 1.Assume that this code is linked together correctly. 

```css
p{
  color: red;
  padding:10px 5px;
  background: black;
}
.fancy{
  font-family: cursive;
  background: red;
  color: green;
}
.plain{
  font-family: Times, serif;
  color: black;
}  
```

```html
<p>Hi</p>
```

What color font is  used to display "Hi"?



**red**



green



black



browser default



# 2.What color font is used to display "Hi"?

```css
p{
  color: red;
  padding:10px 5px;
  background: black;
}
.fancy{
  font-family: cursive;
  background: red;
  color: green;
}
.plain{
  font-family: Times, serif;
  color: black;
}  
```

```html
<p class = "plain fancy">Hi</p>
```

red



**green**



black



browser default



# 3.What color font is used to display "Hi"?

```css
p{
  color: red;
  padding:10px 5px;
  background: black;
}
.fancy{
  font-family: cursive;
  background: red;
  color: green;
}
.plain{
  font-family: Times, serif;
  color: black;
}  
```

```html
<p class = "fancy plain">Hi</p>
```

red



green



**black**



browser default



# 4.What is the correct HTML for referring to an external style sheet?

```css
<link rel="stylesheet" src="mystyle.css">	

<link rel="stylesheet" url="mystyle.css">

<link rel="stylesheet" href="mystyle.css">	/*This is right*/

<style src="mystyle.css"></style>
```



# 5.What is the correct HTML for referring to an external style sheet stored in a subfolder called css?

```css
<link rel="css/stylesheet" href="css/mystyle.css"> 

<link rel="css/stylesheet" href="mystyle.css"> 

<style src="css/mystyle.css">

<link rel="stylesheet" href="css/mystyle.css"> 	/*This is right*/
```



# 6.The style tag and the style attribute are interchangeable -- this means that you accomplish the same effect with both.





False 



why?



# 7.Which CSS property controls the text size?



**font-size**



text-size



text-style



font-height



# 8.How do you display hyperlinks without an underline?

**a { text-decoration:none; }** 



a {underline:none;} 



a {text-decoration:no-underline;} 



a {decoration:no-underline;} 



# 9.In the following code snippet, what value is given for the left margin?

```css
margin: 5px 10px 3px 8px;
```

5px



10px



3px



**8px**

# 10.The # symbol specifies that the selector is a/an

class



tag



**id**



first



# 11.Which of the following would be used to create  class called button which has a width of 750px, a height of 30px and the color of the text is black?

\#button { height: 30px; width: 750px; color: black; } 



**.button { height: 30px; width: 750px; color: black; }** 



\#button { height: 30px; width: 750px; text: black; } 



.button { height: 30px; width: 750px; text: black; } 



# 12.Which snippet of CSS is commonly used to center an element horizontally?

margin: center; 



site-align: center; 



**margin: 0 auto;** 



margin: auto 0; 



# 13.A default style sheet is used to:

**Eliminate differences in browser default styling.**



Insert the prefixes needed to support different browsers.



# 14.Which of the following is not a browser prefix?

moz



o



webkit



**edge**



# 15.Descendant selectors are more general  than child selectors

```css
nav a{ /*Descendant selectors */
  ....
}

nav>a{ /*child selectors*/
  ....
}
```

True



# 16.How much width will this div occupy?

```css
div{
   width:100px;
   padding: 10px;
   margin: 5px;
   border: 2px;
}
```

134