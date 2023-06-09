# Week2-1More Properties

## 02-01 Box Model


### border 
Any element can have border, properties include *style*, *color*, and *width*.

The border style MUST be specified
```css
div{
    border: solid 1px #1c1c1c;
}
```

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306071545758.png)


```css
div{
    /*for borders in all directions*/
    border-width: 3px; 
}
div{
    /*3px   for top and bottom*/
    /*10px  for left and right*/
    border-width: 3px 10px; 
}
div{
    /*3px  for top */
    /*10px for left and right*/
    /*20px for bottom*/
    border-width: 3px 10px 20px; 
}
div{
    /*3px  for top */
    /*10px for right*/
    /*20px for bottom*/
    /*1px  for left*/
    border-width: 3px 10px 20px 1px; 
}
```



### Margin


* Positive margin  
element moves right/down
* Negative margin  
element moves left/upward

### Margin and Padding 
(padding has no negative value)

Neither takes a color.
Can also be defined in 1-4 values, like border.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306071543090.png)*blue is border*


```
Actuel width/height = 2*(margin + border + padding) + width/height
```

What is the width and height?
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306071557186.png)

Answer: <font style="background-color: rgb(0, 0, 0);color: rgb(0, 0, 0)">width = 132px: height = 82 px</font>


>How to center a element?  
set `margin: 0 auto;` ,but has some requirements:  
The element must display: block  
The element must not float   
The element must not have a fixed or absolute position  
The element must have a width that is not auto


```
nav{
    margin: 0 auto;
    width: fit-content;
}
```

### Measurement 

* absolute
* Fluid


### Review

* Design before code
* Use box model
* Margin should always be consisderd



## 02-03 Styling Links and Lists

### Links

Apart from general properties, Links have unique property `text-decoration` 

```css
a{
    text-decoration: None; /*no underline*/
}
```

states
* a:link
* a:visited
* a:hover : activated by  mouse (touchscreens….? use a:focus)
  * a:hover MUST come after a:link and a:visited
* a:focus : activated with the keyboard
* a:active : is being clicked
  * a:active MUST come after a:hover



```css
a{
	background-color:#000000;
	color: #ffffff;
}

a:hover,
a:focus{
	background-color:#ffffff;
	color:#000000;
}
```



> **Links or Buttons?**
>
> Many designers try to make their links look like buttons.  
>
> Be semantic, if you want a button use the <button> element instead.



### Lists

•**list-style-type**

specify the markers

•**list-style-image**

​	replace the default markers with a customized picture

•**list-style-position**

​	The list-style-position property specifies the position of the marker box in the principal block box.

•**list-style**



## 02-04 Advanced Selectors



type

```css
nav a{
	/*all <a> inside <nav>*/
}
nav > a{
	/*a must be a direct child of nav*/
}
hl + ol{
    /*hl and ol are adjacent sibling*/
}
```



### id selector

id should be unique

```css
#aparagraph{
	color = #00ff00;
}

/*<p id="aparagraph"> Here is a paragraph. </p>*/
```



### class selector

can select multiple elements.



```css
.paragraph{
	color = #0000ff;
}

/*<p class="paragraph"> Here is a paragraph A. </p>*/
/*<p class="paragraph"> Here is a paragraph B. </p>*/
```



### contribute

```css
a[href='info.html']{
	/*Only for a tags that it's href attribute has value "info.html"*/
}

```



^  : match the beginning exactly
```
a [href^=‘http://umich’]
```



$ : match the end exactly
```
img[src$ = ‘.png’]  apply to .png images
```



\* : wildcard
  ```
  * a [href*=‘umich’]
  ```

  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306091416353.png)



### combination

<font style="color:orange">p.main</font> -> paragraphs using main class
<font style="color:orange">header img.special</font> -> paragraphs inside header that use 'special' class

```css
p{
	color=#202020; !important /*override color #909090*/
}

header, p, nav.a{
    color=#909090;
	/*apply to all the tags selected, except for <p>*/
}
```



### Read more about selectors

http://learn.shayhowe.com/advanced-html-css/complex-selectors/





## 02-05 Browser Capabilites

### Browser prefixes 

To deal with different browser, use prefixes in CSS

• `-webkit-`: Android, Chrome,  iOS , Safari??
• `-moz-`: Firefox??
• `-ms-`: Internet Explorer??
• `-o-`: Opera??

```css
div{
	-webkit-border-radius: 25px;
}
```

some ways to 



### Often Unsupported Properties

- column-count
- border-radius
- gradient
- Sites such as http://caniuse.com/ will tell you when you need to use prefixes



## Review

* Default style sheets remove stylistic differences

    * Should default style sheet be internal or external?  

    * Where should it go in relation to other style sheets?

* Browser prefixes can help remove some differences caused by unsupported options
    * Shouldn’t be overused(check [Can I use](https://caniuse.com/) first)





## 02-07 Designing For Accessibility


POUR guidelines

- **Perceivable**
    - Provide text alternatives for images
    - Provide captions and transcripts for video and audio
    - Use correct semantic markup so content can be presented in different ways

- Operable
    - All functionality available from the keyboard!
    - Users have control over timing and limits

- **Understandable**
    - Economical and plain use of language

    - Text supplemented with illustrations, videos, and other formats where appropriate (i.e., use good Universal Design)

    - Navigation, information structure are discernable and consistent

    - Make pages operate in predictable ways

    - Help users avoid and correct mistakes

- Robust
    - Validate your code at validator.w3c.org and wave.webaim.org





