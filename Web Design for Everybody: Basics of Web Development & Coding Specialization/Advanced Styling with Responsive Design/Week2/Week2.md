---
title: "Advanced Styling with Responsive Design: Week1"  
date: 2024-07-10  
tags: [¿Î³Ì±Ê¼Ç, Front-End]  
---

# Week 2 Resources


https://intro-webdesign.com/v3/responsive.html#code


# Media Queries



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

We use breakpoints to "trigger" a new look based on:  
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

1. Grab information  
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


# Code With Me: Responsive Navigation


> https://codepen.io/ColleenEMc/pen/MaOrXr

> https://codepen.io/ColleenEMc/pen/VexBYp

