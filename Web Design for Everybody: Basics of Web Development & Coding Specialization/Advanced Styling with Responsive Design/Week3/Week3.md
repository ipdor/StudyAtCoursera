---
title: "Advanced Styling with Responsive Design: Week3"  
date: 2024-07-14  
tags: [课程笔记, Front-End]  
---

# Week 2 Resources

## Review Lecture Videos

If you aren’t familiar with Grid and Flex, review these videos from my other course, Introduction to CSS3.

* Review of Grid(YouTube)https://youtu.be/tC4IF7-RN6Y

* Review of Flex(YouTube)https://youtu.be/2h11fOELFYc

## Grid

> Reference  
> https://www.w3schools.com/css/css_grid.asp

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240715212452.png)


Example:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container{
    /*Step 1*/
	display:grid; /*Use display: inline-grid; to make an inline grid container:*/
    /*Step 2*/
    grid-template-columns: 30% 30% 30% ;
    background-color: #0f0;
    color: #fff;
    /*Step 3*/
    justify-content:end;
}
.grid-item{
	
	border:#f00 solid;
    background-color: #00f;
    width:80%;
    text-align:center;
}
</style>
</head>
<body>

<h1>Grid Elements</h1>

<p>A Grid Layout must have a parent element with the <em>display</em> property set to <em>grid</em> or <em>inline-grid</em>.</p>

<p>Direct child element(s) of the grid container automatically becomes grid items.</p>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>

</body>
</html>

```

## Flex

> Reference  
> https://www.w3schools.com/css/css3_flexbox.asp

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240715213104.png)

Example:  

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
    /*Step 1*/
    display: flex;
    /*Step 2*/
    /*If nowarp, all grids will be on one line(row/column)*/
    flex-wrap: wrap;
    /*Step 3*/
    flex-direction: column;
    /*Step 4*/
    justify-content: start;
    background-color: DodgerBlue;
    height:600px;
}

.flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}
</style>
</head>
<body>
<h1>Flexible Boxes</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>

<p>Try to resize the browser window.</p>
<p>A container with "flex-wrap: nowrap;" will never wrap its items.</p>
<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p>

</body>
</html>
```


## Code

You can find the code at Responsive Design Course Code
.  It is organized by week, so you can check to see if any code is provided for this week's lessons.

## Lecture Slides

To support learners, accessible lecture slides are provided as downloadable PDF files below, and individually within each lecture video. Please note, sometimes the slides will look slightly different from the videos since I like to update the slides when things change.

https://d3c33hcgiwev3.cloudfront.net/3za9XfhJTpCkEvhePhguDQ_2dac9e3c3ff24118b786a0ec4b142af1_Week-3-Lecture-Slides.pdf?Expires=1721088000&Signature=h0-J8QQSYmi3ELvM6pQP6ERsOslsDGLUDxTdFcHZ-AlYM9EpIIRFV1CsR5RsIdYYQ4ZA8OThqU6AweNOgZVtVocQG87PnwlDGz04fBYhHMWit21SohZVHPwXHQlpY~etgVnOT70zKf8lOTfaIxQ5Z0JJrbj~9iy-A8p1wjcLL9s_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A


# Preview of Week 3

What this week will cover:  
* Using media queries with grid  
* Using media queries with flex
* Media queries for acccessibility



# Code With Me: Using Media Queries with Grid 


See Responsive_Grid.html and Responsive_Grid.css

> CSS Grid 网格布局教程  
> https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html


# Code With Me: Using Media Queries with Flex

See Responsive_Flex.html and Responsive_Flex.css

> CSS Flex
> https://www.w3schools.com/css/css3_flexbox.asp

# Media Queries for Accessibility

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240717205425.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240717205610.png)

Example:  
1. animation(https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)  
   ```css
   @media (prefers-reduced-motion) {
    /* styles to apply if a user's device settings are set to reduced motion */
        .animation {
            animation: dissolve 4s linear infinite both;
            background-color: green;
            text-decoration: overline;
        }
    }

   ```  
2. contrast(https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)  
    ```css
    @media (prefers-contrast: more) {
        .contrast {
            outline: 2px solid black;
        }
    }
    ```  
3. color(https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)  
    ```css
    @media (prefers-color-scheme: dark) {
        .theme-a.adaptive {
            background: #753;
            color: #dcb;
            outline: 5px dashed #000;
        }
    }
    ```  

Accessibility checks can improve the experience for all users, not just some really small subgroup.


# Prefers Reduced Motion

**How operating systems support users **

Every major web browser supports reduced-motion, including Chrome, Edge, Firefox, Safari, and Opera.  Designers and developers should expect that they will need to learn (and relearn) how to toggle these settings. 

**Windows 10**: 

Start > Settings > Ease of Access > Display > Toggle “Show Animations in Windows.”

**macOS**:

 System Preferences > Accessibility > Display> Check “Reduce Motion.”

**IOS**: 

Settings > Accessibility > Motion> Toggle “Reduce Motion.”

**Android**: 

Settings > Accessibility > Toggle “Remove Animations.”

> [prefers-reduced-motion - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)  
> [Revisiting prefers-reduced-motion, the reduced motion media query](https://css-tricks.com/revisiting-prefers-reduced-motion/)  
> [An Introduction to the Reduced Motion Media Query ](https://css-tricks.com/introduction-reduced-motion-media-query/)  


# Color Schemes and Color Contrast

**Additional media queries for user settings**

It isn't uncommon for people to change their color schemes. Less well known is that sometimes people can set their preferred contrast as well. In a video I demonstrate how you can use media queries to react to these preferences. If you would like to read more about it, here are two sources of documentation. They are a little more technical than I normally assign, but I think you can all handle it. At the very least it will be nice for you to have a reference if you want to copy and paste 



> [prefers-contrast - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)  
> [prefers-color-scheme - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)  



# Accessibility Testing

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240717212130.png)

> Tools list:  
> [Web Accessibility Evaluation Tools List ](https://www.w3.org/WAI/test-evaluate/tools/list/)   
>
> Some useful tools:  
> [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)   
> [LERA - Website Accessibility Testing & Reporting Tool](https://advancedbytez.com/lera/)  
> [axe: Accessibility Testing Tools and Software](https://www.deque.com/axe/)


