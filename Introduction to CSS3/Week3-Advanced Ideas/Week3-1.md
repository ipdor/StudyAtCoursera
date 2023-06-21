# Advanced Ideas

## 03-01 Pseudo Classes and Elements

These elements **aren‘t part of the DOM**;  
Can be used to style specific (unique) parts of the page;  
Pseudo-elements and classes are just one more way to add style to your page.



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306211351219.png)


* Link   
:link, :visited
* User Action  
:hover, :active, :focus 
* Forms (interfaces)  
:enabled, :checked, :disabled   
* Structural/Positional  
:first-child, :last-child, :nth-child(), :only-child  
:first-of-type, :last-of-type, :only-of-type
* Textual  
:first-letter, :first-line
* Positional/Generated  
:before, :after
* Fragments  
::selection


```css
li: first-child{ }
li:nth-child(4){ }
p:empty{ }
img:only-of-type{ }
p:last-of-type{ }
```



## 03-02 Transitions过渡/渐变效果

When elements transition from one state to another, we can alter their appearance.



There are 4 properties about transition :

* **transition-property**
    What is it you want to change?  (size, color, position, etc.)
* **transition-duration**
    How long should each transition last? 
* **transition-timing**
    Should it be a smooth transition (linear)?  Or different?
* **transition-delay**
    How long should the wait be before the transition begins?



### Setting up

1.**Define your element**

2.**Choose the elements for transition**

3.**Define the new values**

​	–**You must combine this step with a pseudo-class**



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306211410739.png)



we can also use shortcuts here:

```css
div{
    /* *  */
    transition: background .2s linear,border-radius 1s ease-in 1s;
    /*
    1. change background in a linear way within 0.2s to a new style;
    2. change border-radius, after 1s in ease-in way within 1s.
    */
}
```

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Lets Position</title>
    <link rel="stylesheet" href="css/1.css">
  </head>
  <body>
    <p>Hover over this square.<br/>
      Click (and hold) your mouse over this square.<br/></p>
    
    <div>TRANSITION</div>
  </body>
</html>
```


```css
div{
    background-color: #00f;
    color: #fff;
    width: 200px;
    height: 40px;
    text-align: center;
    padding: 20px 0px;
    border-radius: 5px;
    transition: background 0.1s linear 0.001s, color 0.1s ease-in 0.001s, border-radius 1s;
}

div:hover{
    background-color: #f00;
    border-radius: 40%;
    color: #00ff00;
}

div:active{
    background-color: #00ff00;
    color: #ff0000;
    font-size: 20px;
    font-weight:600;
}

```



## 03-03 Transforms



•**translate**

```css
transform:translate(x, y);
```

•**rotate**

```css
transform:rotate(deg);
```

•**scale**

```css
transform:scale(width, height);
```

•**skew**

```css
transform:skew(x-angle, y-angle);
```

•**matrix**

matrix()  - combines all of the 2D transform methods into one


```css
matrix()
```

rotate 3D

```css
transform:rotateY(deg)
transform:rotateX(deg)
transform:rotateZ(deg)
transform:rotate3d(x, y, z)
```



## 03-05 Positioning

### four position properties

The four position properties are:

- static (default)

    - Place in the next available position


    - Not affected by the `top`, `bottom`, `left`, and `right` properties.


- **relative**
    - Positioned “relative to itself”
    - Take the static position, but add offsets.  
    - The new positioning does NOT affect any other element.  It is possible to move an element and leave a big hole where it would have been.
    
    - Relatively positioned elements are often used as container blocks for absolutely positioned elements. 外层容器相对定位，内部的元素绝对定位


- **absolute**
    - Element is removed from the document flow and positioned relative to it’s **nearest ancestor** (or the root)
    - Other elements behave as if element does not exist


- fixed

    It will never move, such as popups



```css
div{
	/*  */
	position:relative;
    
}
```





### Z-index

Multiple elements may be placed in the same position.

Z-index is a numeric value, positive or negative that dictates stacking order
