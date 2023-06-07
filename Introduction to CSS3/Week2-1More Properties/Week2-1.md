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


## Review

* Design before code
* Use box model
* Margin should always be consisderd



## 02-02 Code Together
