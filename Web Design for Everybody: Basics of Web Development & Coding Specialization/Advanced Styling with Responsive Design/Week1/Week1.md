---
title: "Advanced Styling with Responsive Design: Week1"  
date: 2024-07-04  
tags: [课程笔记, Front-End]  
---

# Lesson 0: Welcome-Introduction to Responsive Design

## Course structure

* Week 1: What is responsive design and how to achieve that  
* Week 2: Media queries
* Week 3: Practice and examples
* Week 4: Frameworks, like Bootstrap

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240707235322.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240707235416.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240707235428.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240707235440.png)


# Course Resources

All of the reading material you will need to pass this course is contained within Coursera. Additional resources may be added as optional material, but everything will be online and free.

## Software

The preferred way to code in this class is to use Replit. You can also use an editor such as Notepad++, TextWrangler, Sublime, Visual Studio code, etc. If you do not have the ability to access or install this type of software, [W3Schools](https://www.w3schools.com/css/css_intro.asp) has an online code editor - look for the "Try It Out" options. 

## Code

Whenever possible, the code is linked through CodePen, Replit, and a downloadable zip file.  You can choose the format that best suits your learning style.

You can find the code at Responsive Web Design Course Code
.  It is organized by week, so you can check to see if any code is provided for this week's lessons.  Oftentimes you will see two files, a "starter" file and a "complete" file. This way you can start at the same place as me, but still have access to the final product.   If a lesson has a number of files to download, they are combined into a zip file.  Zip files are downloaded automatically to your computer and then you can use free software to open them.

## Lecture Slides

To support learners, accessible lecture slides are provided as downloadable PDF files below, and individually within each lecture video. Please note, sometimes the slides will look slightly different from the videos since I like to update the slides when things change.

> https://www.coursera.org/learn/responsivedesign/supplement/ssiNo/course-resources



# What is Responsive Design?

* It is designing your sites with multiple screen sizes/ resolutions in mind.  
* Sites should "work" under any platform, any browser size, any orientation. The user should have the power.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240709002750.png)


# Testing Sites

Two ways:  
* Online tools like http://ami.responsivedesign.is  
* Firefox responsive design mode  

# What To Do When Your Tool is Deprecated

* Responsive Design – you want to make sure that your site looks good in multiple viewports

* Automated testing - you want to site that can do that testing with as little work on your part as possible

* Browser extension – you may want a tool that you install on your browser so that you do not need to go to a different tab to test a site.

With this knowledge you can create a search term to match your needs.

* "best automated testers for responsive design"

* "best responsive website testing tools and sites in \<fill-in-the-current-year\>"

* "responsive testing browser extension"

# Benefits of Responsive Design

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240709220201.png)

There are three types of responsive options:
* Responsive web design use the same source code and the same URL.   
* Adaptive design returns different files to different clients.(If server detected wrong client, it returns a wrong code)  
* Separate mobile site (with prefix `.m`) using separate page URL to indicate mobile or desktop. (独立的移动版网站)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240709220624.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240709220640.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240709220656.png)

Why RWD?  
* Easier to share your data with a single URL.  
* Easier to search engines to index the page.  
* Fewer files = less maintenance.  
* Less redirection = lower load time.


# Reading: Fluid Measurements Background Readings

> I like to include additional resources that align with my lectures and I will be putting these ideas into practice in the next two videos. In this case, I have found three really good articles that relate to my next lecture on Fluid Measurements.
> 
> [A W3schools reading on CSS Units](https://www.w3schools.com/css/css_units.asp)
> 
> [What's the Deal with Em and Rem?](https://codemyviews.com/blog/whats-the-deal-with-em-and-rem)
> (**Material here is used in Week Two Assessment**)
> 
> [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/) by Chris Coyier.(Please note, some people on Firefox get a warning when using this link. It is not the case for other students.)

# Fluid Measurements

See the previous material: [A W3schools reading on CSS Units](https://www.w3schools.com/css/css_units.asp).

> What tags are absolute measurements, relative measurements, and what is the difference between them? Why we use `rem` instead of `em`?

```
1em = 12pt = 16px = 100%
1in = 2.54cm = 25.4mm = 72pt = 12pc
```

> In responsive web design, fluid measurement refers to a technique where the dimensions of elements (such as width, height, padding, margins, etc.) are defined in **relative units rather than fixed units**. This approach allows elements to adjust and scale fluidly based on the size of the viewport or parent container, creating a more flexible and adaptable design.

# Code With Me: Fluid Measurements

https://codepen.io/ColleenEMc/pen/pgrYpK


# Can a file use fluid and absolute measurements together?

> Check out the code from the Code With Me example: http://codepen.io/ColleenEMc/pen/QyzJGy
> 
> * Were there any absolute measurements in this code? If so, where?  
> 
> * Will this break our "responsive design?"  Why or why not?

My answer:

* The font size of body is absolute measurement.   

* Yes, it will break responsive design because the font size of all elements inside the body inherits its font size. Therefore, all text on this page will have the same size across all different devices.  


# Additional Tools and Resources

Here are some optional resources for you to explore if you are interested in learning more about the topics from this week.

There are so many tools and tips when it comes to CSS we can't possibly cover them all.  But here are three that students have mentioned as being some of the most useful to them.

1. [PXtoEM.com](http://pxtoem.com/) is a pixel to em conversion tool. In the third column you can enter numbers and have the conversion calculated for you.

2. [This CodePen](http://codepen.io/chriscoyier/pen/tvheK) by Chris Coyier will let you use sliders to dynamically change the font size on a page. This demo goes with one of the readings on Fluid Measurements, but I am including it here again just in case you missed the code. You can read it here if you want to know how to use the tool. [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/).

3. Someone sent me [CSS Values and Units Module Level 3](https://www.w3.org/TR/css3-values/#length-value) since it helped them better understand the meaning of "relative" and "absolute" as they relate to CSS. This is a fairly technical document and is not required reading for the course.

# Basic Concepts in Responsive Design Approaches


### 1. Which fluid measurement type returns a percentage of the viewport width?

**vw**

### 2. Responsive Web Design is...

Designing pages for the mobile view.

Designing multiple pages, one for each type of major device (phone, tablet, laptop, and desktop)

**Designing pages for multiple platforms by incorporating fluid measurements and varying CSS rules.**


### 3. Adaptive design with dynamic serving is....

Designing pages for the mobile view.

Designing pages for multiple platforms by incorporating fluid measurements and varying CSS rules.

**Designing multiple pages, one for each type of major device (phone, tablet, laptop, and desktop) and returning the appropriate version based on the device making the page request.**


### 4. Which of the following is a true statement about using a separate "m." site for your content?

**It is difficult to keep multiple versions of your site consistent. Any updates must be made in multiple places.**

Some search engines require a .m version of your site.

> This is not the case, and having a separate .m version may actually hurt your search engine results. You can refer to the video on the Benefits of Responsive Design to learn more. 

Users have control over which version of the page they can see, regardless of the device they are using.

> The users are locked into seeing whichever version is returned by the server. (Although some designers include a "link to desktop view", not all do.) You can refer to the video on the Benefits of Responsive Design to learn more.

### 5. The mobile version of your web page should have the same layout of every other version of your site. 

True

**False**


### 6. Responsive sites can have a mixture of fluid and absolute measurements. 

**True**

False


### 7. When defining a measurement whitespace you must include the unit - even when the measurement is 0.

True

**False**


### 8.  For some CSS properties, negative lengths are allowed. 

**True**

False


### 9. 1 _____ = 1% of viewport height

**vh**

### 10. An em is the size of an uppercase M in any typeface, making the size relative to the font. 

**True**

False


### 11. Which term matches the browser window size?

width

orientation

**viewport**


### 12.  Which suggestion does Chris Coyier make in his article on Font Size? 

rem at the Root, em for Components, px for Text Elements

em at the Root, px for Components, rem for Text Elements 

**px at the Root, rem for Components, em for Text Elements**

### 13.  If you have an element with the font size of 32px, and a child element inside with a a font-size set to 2em, what is the font size of the child in px? (Provide a number only, not the measurement too.) 

**64**


### 14. Which of the following measurements is relative to the size of its parent element? 

px

**em**

rem


### 15. Which measurement is easier and comfortable for the designer/ developer to use when coding their CSS but does not provide the best experience for the user?  

**px**


### 16. A tool you install on your browser so that you do not need to go to a different tab to test a site is called 

a cookie

a prefix

**an extension**
