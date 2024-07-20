---
title: "Advanced Styling with Responsive Design: Week4"  
date: 2024-07-17  
tags: [¿Î³Ì±Ê¼Ç, Front-End]  
---

# Week 4 Resources

## Code

You can find the code at [Responsive Design Course Code](https://intro-webdesign.com/v3/responsive.htm).  It is organized by week, so you can check to see if any code is provided for this week's lessons.

## Lecture Slides

To support learners, accessible lecture slides are provided as downloadable PDF files below, and individually within each lecture video. Please note, sometimes the slides will look slightly different from the videos since I like to update the slides when things change.

https://d3c33hcgiwev3.cloudfront.net/PG3GYhxdSnedaDZlr00pbg_4e72b6091d7b4eb588274c577b7185f1_Week-4-Lecture-Slides.pdf?Expires=1721347200&Signature=jnu8x0P5dXBdt0Ypg~unWRNzPt56~KB5eNkmWe0qlK6SKv6Sza7Ta-s940QV6BgGsbTbR0DrwQHLxtjohmT8Auvd~rDCqUQ02WZAKRP49TeG~Qkdy9hi4G2K4c9NAjJMgaS6AmCneIoZ2hgTAoe0NkDWKTp6tVhzDDHdhYkvUUg_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A


# Using Frameworks

We can use frameworks, like **jQuery** and **Bootstrap** to build pages quickly and easily.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240717214549.png)

# Introduction to Bootstrap

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240717220450.png)

Many popular sites are (were) built using Bootstrap:  
* nba.com  
* walmart.com  
* codeacademy.com  
* bloomberg.com  
* airbnb  
* ......

Pros:  
+ Fast development  
+ platform Independent  
+ Responsive by default  
+ customizable

Cons:  
- Don't follow best practices  
  - Content and layout are interwined  
  - CSS frameworks and semantics  
- Can be resource-heavy  
- The look is somewhat generic  
  - This can be good or bad


**Two ways to use Bootstrap**:  
* As a supplement to your style  
* As a theme that you expand upon

## Question

1. Bootstrap can provide help with...

* **HTML, CSS, and JavaScript**

* HTML and JavaScript

* HTML and CSS

2. How many columns are used in the Bootstrap grid system?

* 6

* **12**

* 10

* Unlimited

3. Which of the following best describes a reason for using Bootstrap?

* Bootstrap can speed up development, but it is not customizable.

* Bootstrap is customizable, but it leads to slower development

* **Bootstrap can speed up development and still allows for customization.**


# Reading: Getting Started With Bootstrap

You are not required to use Bootstrap in the coding of your site, but you do want to learn a little about the general framework.  For that you can follow along with the videos.  If you want to really use Bootstrap you can use their online tutorial to get started -   [Get started with Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/).  Bootstrap uses JavaScript!!  So if you do not know JavaScript just know that you need to include links to the Bootstrap js files at the bottom of your HTML files, not the top!!  


# Bootstrap Grid System

* Bootstrap is mobile first, larger screens inherit values from smaller screens.  
* Make sure elements' width adds up to no more then 12.

https://getbootstrap.com/docs/5.2/layout/grid/

The structure of a grid layout is as follows:  
```html
<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
```

To custimize the grid system, we can use `col-xx-yy` classes in column divs.   
* xx is one of the 6 responsive breakpoints: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`  
* yy is a number between 1 and 12, means how much columns it takes.  


# Code With Me: Bootstrap Grid Example

> **Hint**   
> 1. The `hidden-*` and `visible-*` classes [no longer exist in Bootstrap 4.0](https://stackoverflow.com/questions/35351353/missing-visible-and-hidden-in-bootstrap).  
> In the latest version of Bootstrap (Bootstrap 5.0), `d-*` or `d-*-*` is used to set [Display Property](https://getbootstrap.com/docs/5.0/utilities/display/).
> 
> 2. In this lecture, we used `[attr*=value]`, `[attr^=value]`. There are also `[attr]`, `[attr$=value]`, `[attr^=value]`, `[attr|=value]`, `[attr~=value]` and `[attr=value]`. This selectors called [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

Original code: [CodePen:Bootstrap Grid Example](https://codepen.io/ColleenEMc/pen/gPRoNN) (The `visible-*` class expired, so it doesn't work).

See "Bootstrap_Grid_Example.html" and "Bootstrap_Grid_Example.css"


# Code With Me: Bootstrap Navigation Example

Original code: [CodePen:Bootstrap Navigation](https://codepen.io/ColleenEMc/pen/jWwjod)


> The contents in this lecture are also not working, checking the links below to learn navigation bar in Bootstrap 5.0.   
> [Navbar](https://getbootstrap.com/docs/5.2/components/navbar/)  
> [Navs and tabs](https://getbootstrap.com/docs/5.2/components/navs-tabs/)  


See Bootstrap_Navigation_Example.html


# Responsive Design Final Quiz

### 1. Which fluid measurement type returns a percentage of the viewport width?

**vw**

### 2.  The mobile version of your web page should have the same capabilities of every other version of your site. 

**True**

False

### 3. The fluid measurement % can only be used on non-textual elements

True

**False**

### 4.  When defining a measurement whitespace cannot appear between the number and the unit unless the value is 0. 

**True**

False

### 5.  Which of the following measurements is relative to the size of its parent element? 

px

**em**

rem

### 6. If you have an element with the font size of 18px, and a child element inside with a font-size set to .5em, what is the font size of the child in px? (Provide a number only, not the measurement too.)

**9**

### 7. HTML5 introduced a method to let web designers take control over the viewport.  The new tag is the ______ tag. 

**meta**

### 8. Which of the following should you **NOT** do when creating a responsive page?

Design for multiple viewport orientations. 

Use fluid measurements.

Use CSS media queries to apply different styling for small and large screens

**None of the above**

### 9. You can use media queries to change the layout of your page when the orientation of a mobile device changes from portrait to landscape. 

**True**

False

### 10.  Consider the following CSS rules:  What is the width of any div elements on a 350px screen?  

```css
div{ 
    width: 80%; 
}
 
@media all and (min-width: 500px){ 
    div{ 
        width: 25%; 
 	} 
}
```

**80%**

25%

100%

### 11. Consider the following CSS rules:Which of the following is a true statement?  

```css
div{ 
    width: 80%; 
} 
@media print {
    div{ 
        width: 25%; 
    } 
}
```


**The div elements will have a width of 25% only when the page is printed**

The div elements will only be visible only when the page is printed.

The div elements will have a width of 80% only when the page is printed 

### 12. Consider the following CSS rules:What is the width of any div elements on a 750px screen?  

```css
div{ 
    width: 80%; 
        
} 
@media all and (min-width: 500px){ 
    div{ 
		width: 25%; 
    }
}
```

**80%**

25%

100%

The div won't display since media queries must go at the bottom of the screen. 

### 13. Consider the following CSS rules:What is the width of any div elements on a 750px screen?

```css
div{ 
    width: 80%; 
} 
 
@media all and (min-width: 500px){ 
    div{ 
        width: 25%; 
    } 
}
```

80%

**25%**

100%

### 14.  Consider the following code using Bootstrap:In a lg viewport the div will be _____ columns wide.

```html
<div class = "col-sm-2 col-lg-4">
```

**4**

### 15. The Bootstrap grid system is based on how many columns? 

**12**

### 16. Every major web browser supports reduce-motion, including Chrome, Edge, Firefox, Safari, and Opera. 

**True**

False

### 17.  The best way to improve accessibility on your page is to eliminate all animation.  

True

**False**

### 18. The possible values for the  **prefers-contrast** CSS media feature include **more, less, and custom**.  (Not sure?  Here is a link to help you find the answer ¨C [prefers-contrast - CSS: Cascading tyle Sheets | MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)) 

**True**

False

### 19. The possible values for the **prefers-color-scheme** CSS media feature include **light** and **dark**.

**True**

False
