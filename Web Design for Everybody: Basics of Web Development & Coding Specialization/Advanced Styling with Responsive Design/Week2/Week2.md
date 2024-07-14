---
title: "Advanced Styling with Responsive Design: Week2"  
date: 2024-07-10  
tags: [¿Î³Ì±Ê¼Ç, Front-End]  
---

# Week 2 Resources


https://intro-webdesign.com/v3/responsive.html#code


# Media Queries

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240714164528.png)

Media queries allow the style to depend upon the media properties.  
* CSS 2.1 used media types, like `<link rel="stylesheet" href="style.css" media="screen" />` or `<link rel="stylesheet" href="style.css" media="print" />`   
* CSS3 increased the capabilities, there are more features like `width`, `height`, `orientation`, `resolution`, boolean operators, etc.... 

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240714165211.png)


There are three ways to implement media queries:   
* Use `@impart` rule to import another one CSS file.  
  * The `@impart` CSS at-rule is used to import style rules from other valid stylesheets.  
* Use `@media` to put media query in this CSS file.
* Use `<link media="...." rel="stylesheet" href="style.css" />` to include query in the link.  

# Code With Me: Fluid Measurements and Media Queries

I encourage you to take a moment to test out this code and see if you can recreate it.  (The starter code is in the resources.)  If you can't play with the screen size on your machine, don't forget that you can use http://ami.responsivedesign.is/ to view sites on different platforms.


# Practice Quiz -- Challenge Problem

Write a media query that changes the background color of the screen from red, to blue, to green as the screen gets larger.

If you have problems, you can post your answer to replit or codepen and link your code to the forums.  However, please do not post your code directly in the forums.  People like to have the opportunity to work on it on their own before seeing other's answer.

If you really want a challenge, set a different background image of your page depending upon the screen size!!  

*I have provided a correct answer as feedback.*

```css
/*the order of the following code is important!!!*/
/*Why the first selector is not media query? Mobile first! Why we don't use max-width in media queries? Again, mobile first!*/
body{
   background-color: red;
}

@media screen and (min-width:600px){   
   body{      
      background-color: blue;   
   }
}

@media screen and (min-width:900px){
   body{
      background-color: green;
   }
}
```

# Wire Frames

* Come up with layout according to your content needed before code;  
* Think about mobile views first;  
* Also pay attention to functionality, like navigation, forms inputs, etc.


Sketches VS. Wireframes  
* maybe sketches better, you can get feedback easier.

Some tips about how to draw/design a sketch.

> Using color is a great way to improve your wireframes.  
> * True
> 
> * False  
> <font style="color:rgba(0,0,0,0)">False. Since wireframes are about content, color can actually be a detriment.  Focus on layout and interactivity.</font>
> 
> "Mobile-first" means...
> 
> * Everyone should view your site on their mobile device first.
> 
> * You should design your mobile view first.  
> <font style="color:rgba(0,0,0,0)">Answer: You should design your mobile view first.</font>

# Breakpoints

We use **breakpoints** to "trigger" a new look based on:  
* devices and/or  
* content

Tips:  
* Because device sizes change, you shouldn't design a specific device, but testing on existing sizes is helpful.   
* You can use Inspect Element to do this.  
* Mobile first! The default view should be for mobile.   
* Respnsive is more than screen size.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202407111100458.png)


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202407111101388.png)

# Media Queries Part Two

1. Grab information(set initial scale to one)  
   `<meta name='viewpoint' content='width=device-width, initial-scale=1'>`
![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202407111107270.png)
2. Fluid layout
   * percentages VS. ems and rems  
   * paddings and margins are affected by width, not height.
3. Media queries  
   ![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202407111112302.png)


Pay attention to order of rules  

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202407111117056.png)

> Should your media queries be at the top or bottom of the page?  
> <font style="color:rgba(0,0,0,0)">It depends. Assuming min-width, put the rules on the bottom. For max-width, it should be on the top.</font>

> [W3Schools Reading on Responsive Web Design](https://www.w3schools.com/css/css_rwd_viewport.asp)  
> Why we need viewport? It's important. Click the link abrove.

# Code With Me: Responsive Navigation

> https://codepen.io/ColleenEMc/pen/MaOrXr

> https://codepen.io/ColleenEMc/pen/VexBYp

# Week Two Review: Media Queries and Breakpoints

## 1. Which line of code gives the browser instructions on how to control the page's dimensions and scaling?

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

correct

`<meta name="stylesheet" content="width=device-width, initial-scale=1.0">`

`<link name="viewport" content="width=device-width, initial-scale=1.0">`


## 2. Which of the following code segments will keep people from being able to zoom in or out on your content?

`<meta name = ¡®viewport¡¯ content=¡®width=device-width, initial-scale=1, maximum-scale = 1¡¯>`

correct

`<meta name = ¡®viewport¡¯ content=¡®width=device-width, initial-scale=1¡¯>`

It is impossible to lock the zoom ability


## 3. Which of the following should you NOT do when creating a responsive page?

Design for multiple viewport orientations

Use CSS media queries to apply different styling for small and large screens 

**Use large fixed width elements.**

None of the above


## 3. Which of the following should you NOT do when creating a responsive page?

Use fluid measurements. 

**Let the content rely on a particular viewport width to render well**

Use CSS media queries to apply different styling for small and large screens 

None of the above


## 4. When designing mobile first you should use max-width in your media query.

True

**False**

## 5. Which term is used to define the different viewport sizes that trigger media queries?

meta

media-query size

**breakpoint**

wireframe

## 6. Breakpoints often correspond with common screen sizes for phones, tablets, and laptops, but it is not necessary.

**True**

False

> Review the section on breakpoints in the [W3Schools Reading on Responsive Web Design](https://www.w3schools.com/css/css_rwd_viewport.asphttps://www.w3schools.com/css/css_rwd_viewport.asp)

## 7.  You can use media queries to change the layout of your page when the orientation of a mobile device changes from portrait to landscape. 

**True**

False


## 8. Consider the following CSS rules:

```
div{
   width: 80%;
}

@media all and (min-width: 500px){
    div{
       width: 25%;
    }
}
```

What is the width of any div elements on a 350px screen?

25%

**80%**

100%


## 9. Consider the following CSS rules:

```
div{
   width: 80%;
}

@media all and (min-width: 500px){
    div{
       width: 25%;
    }
}
```

What is the width of any div elements on a 750px screen?

80%

100%

**25%**

## 10. Consider the following CSS rules:

```
@media all and (min-width: 500px){
    div{
       width: 25%;
    }
}

div{   
   width: 80%;
}
```
What is the width of any div elements on a 750px screen?

**80%**

25%

100%

The div won't display since media queries must go at the bottom of the screen.

## 11. Consider the following CSS rule:

```
div{
    width: 80%;
}

@media print {
    div{
       width: 25%;
    }
}
```

Which of the following is a true statement?

The div elements will only visible only when the page is printed

The div elements will have a width of 80% only when the page is printed

**The div elements will have a width of 25% only when the page is printed**



## 12. Wireframes should...

specify the layout of your pages

specify the layout, color, and content of your pages

**specify the layout and content of your pages**

> No color is needed for wireframes.

## 13. When modifying your layout from small screen to larger screen it is common to go from a vertical to horizontal layout for your navigation. 

**True**

False


# Homework Description

## Overview

The goal of the final project is to create a responsive website that has three distinct views - mobile, tablet, and large screens.   By changing the display and width of elements you will change the layout from one horizontal div, to two horizontal divs, to three horizontal divs.  By adding media queries you can have these changes trigger automatically at different viewport sizes. 

The mobile view is provided for you as [a zip file](https://intro-webdesign.com/v3/responsive_repo/week2/responsiveHomework.zip)
.

You will need to edit the style.css file to add two media queries.

   1. Query #1 will trigger at 772px and act as your "Tablet View"

         a. Change the page layout so that divs are 45% of viewport width and images are no more 30% of viewport height. 

         b. (You will need to change more than just the width to achieve the change to the divs¡­)

   2. Query #2 will trigger at 998px  and act as your "Large Screen  View"

        a. Change the page layout so that divs are 30% of viewport width .  

        b. No other changes are needed.

Your peer review is normally a great chance to see if others wrote their code differently, but in this case most of the code will be very similar.  Don't worry, the next assignment will have more creativity!

## Instructions

   1. Review the video that describes the Homework

   2. Download the starter code as a zip file from https://intro-webdesign.com/v3/responsive_repo/week2/responsiveHomework.zip

   3. Open the code in the editor of your choice and ensure that you can access all of the files

   4. Open the index.html file in the browser of your choice and review the mobile view

   5. Write your first media query and  add the rules to adjust the style for the divs and images.

   6. Check your site on the browser. 

   7. Write your second media query and add the rules to adjust the style for the divs.

   8. Check your site on the browser. 

   9. Host and share your site

   10. Peer review a site

## Grading

Your project will be graded by the careful examination of your code by a peer.  Your peers will check that you changed the necessary properties to recreate the two looks.  

   * The first media query uses min-width and triggers at 772 px.  

   * In the first media query  the div selector is set to a width of 45vw and uses display inline-block.  

   * In the first media query the  img  selector is set to a max-height of 30vh  

   * The second media query uses min-width and triggers at 998 px.  

   * In the second media query  the div selector is set to a width of 30vw.   



# Additional Resources

Here are some optional resources for you to explore if you are interested in learning more about the topics from this week.
Wireframing Tools

If you have been following along and thinking "I really like the artistic side of web design" you may want to learn about some of the more popular Wireframe tools available. The ones I have listed here have free trials available as of 2023.

* [Figma](https://www.figma.com/)

* [Balsamiq](http://www.balsamiq.com/products/mockups)

* [Sketch](https://www.sketch.com/)(Mac only)

* [Adobe Photoshop](https://www.photoshop.com/)

* [Wireframe.cc](http://wireframe.cc/)
