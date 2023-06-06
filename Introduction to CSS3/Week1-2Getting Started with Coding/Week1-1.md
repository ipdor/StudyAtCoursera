# Week1-2 Getting Started with Coding
## 01-02 Cascading Style

### precedence

- browser default
- external style
- internal style
- inline style



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230605214904.png)



**It is possible to override later rules, use**  ```!important```

```css
h{
	color: blue;
	font-family: Arial; !important
}
h{
	font-family: Times;
}
```

## 01-03 Colors

Do not use name, e.g. ```red```, ```green```, ```blue```. It works, but may causes problems.  
* Hexadecimal is common convention  
<font style="color:#0000FF
">#0000FF
</font>
<font style="color:#FF0000
">#FF0000
</font>
<font style="color:#FFFF00
">#FFFF00
</font>
* rgb  
(0, 0, 1), (1, 0, 0), (1, 1, 0)
* rgba  
(0, 0, 1, .5)


### Contrast (Accessibility)

http://wave.webaim.org/
http://webaim.org/resources/contrastchecker/


## 01-04 Styling Your Text
several ways to make webpage different from default style.

### font
#### font family
Not all browsers support all font, we can use alternatives.  
```CSS
h1{
	font-family: Courier, Impact, Arial; 
}
```

* serif fonts: more fancy. 

* sans-serif fonts: more clean, user friendly. 

#### font style
* normal
* italic 
* oblique

#### font-variant
* normal
* small-caps

```CSS
h1{
	font-variant: small-caps; /*All uppercase*/
}
```

#### font-size

* xx-small, x-small, small, smaller
* medium
* larger, x-large, xx-large, larger
* **Use pixel**
* Use %

#### custome fonts

```CSS
@font-face {
    font-family: mySpecialFont;
    src: url('./GreatVibes-Regular.otf');
}
p{
    font-family: mySpecialFont;
}
```


### colors

color & background color
```CSS
/*
For h1, applying the style to the whole line.
For span, only affecting several text.
*/
h1, span{
	color: #0000FF;					/*Blue*/
	background-color: #B3B3B3;		/*Grey*/
}
```

### text-align
* left
* right
* center
* justify

### line-height
Adjusts the space between the lines of text, doesn't affect the font.


```CSS
h1{
	line-height: 50%;
}
```




## 01-06a Display and Visibility - Part 1


### display
Display is Key to Layout.

//add pics

* inline: sits next to other elements
takes up ¡°just enough¡± width and height, **cannot change them**.

* block: forces line break
default: take up all horizontal width and ¡°just enough¡± height  
rules **can set height and width**

* inline-block: same as inline, but accepts height and width

* none: removed from page
Still in DOM, but not visual (even to  SRs)


#### Complementary Properties
* float  
Reposition elements to the right or left. 
Elements are aware of one another and will not overlap.  
Values: left, right

* clear  
Used to keep floating elements away
Values: left, right, both

//add pics

> What is the position between spans?
```CSS
span{
    background-color: #ff0000;
    display: block;
    height: 100px; /*if display is inline, width and height don't work*/
    width: 100px;
    float: right;
}

    <span>span1</span>
    <span>span2</span>
    <span>span3</span>
```

## 01-06b Display and Visibility - Part 2

### overflow

* visible: Can cause text to show up ¡°on top¡± of other text
* hidden: Hides anything that goes beyond bounding box  
\- This can cause problems since if the user increases font size, they may not be able to see content
* scroll: Gives horizontal and vertical scrollbars
* auto: Adds scrollbars as needed



### Other display value

* Table
* Grid
* Flexbox

### Visibility
* visible
* hidden
* collapse (only for table elements)

### Review
* Display is just one tool for positioning our elements on the page
* Early design will make the coding easier
* Utilize tools to see the different options




