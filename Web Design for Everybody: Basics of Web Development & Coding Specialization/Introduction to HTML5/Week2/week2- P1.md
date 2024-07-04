[Lesson 2 - Getting to Know HTML](https://learn.shayhowe.com/html-css/getting-to-know-html/)
# Semantics Overview 
Semantics is only about contents of tags instead of style.

> Semantics within HTML is the practice of giving content on the page meaning and structure by using the proper element. Semantic code describes the value of content on a page, regardless of the style or appearance of that content.

# Block and in-line level elements
\<div\>is block level element, \<span\> is in-line level element.
They are all no sematic meaning, only about style.

# class and id

We should choose a value that refers to the content of an element, not necessarily the appearance of an element.


# text-based elements

* headings  
\<h1\>, \<h2\>, ...... \<h6\>

* paragraph  
\<p\>

* Bold Text with Strong  
\<strong\>: semantically used to give strong importance to text, the **most popular option** for bold text.  
\<b\> : semantically means to differentiate one passage of text from another.
    ```html
    <!-- Strong importance -->
    <p><strong>Caution:</strong> Falling rocks.</p>  
    
    <!-- Stylistically offset -->
    <p>This recipe calls for <b>bacon</b> and <b>baconnaise</b>.</p>
    ```

* Italicize Text with Emphasis  
  \<em\> :Element is used semantically to place a stressed emphasis on text, , the **most popular option** for italicize text.  
  \<i\> :Used semantically to convey text in an alternative voice or tone, almost as if it were placed in quotation marks.

    ```html
    <!-- Stressed emphasis -->
    <p>I <em>love</em> Chicago!</p>
  
    <!-- Alternative voice or tone -->
    <p>The name <i>Shay</i> means a gift.</p>
    ```
# Building Structure

They are all block-level elements ,do not have any implied position or style and can be used multiple times.

![](https://learn.shayhowe.com/assets/images/courses/html-css/getting-to-know-html/building-structure.png)

* Header  
In general, the \<header\> element may include a heading, introductory text, and even navigation.  

```html
<header>...</header>
```

> \<header\> vs. \<head\> vs. \<h1\> through \<h6\> Elements
different semantic meanings

* Navigation

Most commonly, links included within the \<nav\> element will link to other pages within the same website or to parts of the same web page. Miscellaneous one-off links should not be wrapped within the \<nav\> element, use the anchor element, \<a\>, instead. 

```html
<nav>...</nav>
```

* Article

It is commonly used for blog posts, newspaper articles, and user-submitted content. To determine whether to use the <article> element, we need to consider if the content can be understood on its own, even if it is removed from its original context and placed elsewhere, such as in an email or printed work.

```html
<article>...</article>
```

* Section
The \<section\> element generally, but not always, includes a heading. 

```html
<section>...</section>
```

>**Deciding Between \<article\>, \<section\>, or \<div\> Elements**  
The trick is to look at the content.  
The \<article\> and \<section\> elements contribute to a document's structure and outline. Use the \<div\> element for purely styling purposes, while the \<article\> element is suitable for independently distributable or syndicated content, and the \<section\> element represents a thematic group of content.


* Aside

The \<aside\> element is used to contain tangentially related content, like sidebars or brief explanations, and can be used within an \<article\> element to indicate content related to the article's author.

Not necessarily appears off to the left or right side of the page.

```html
<aside>...</aside>
```

* Footer

The \<footer\> element identifies the closing or end of a page, article, section, or other segment of a page. Generally the \<footer\> element is found at the bottom of its parent. 

```html
<footer>...</footer>
```

# Hyperlinks

anchor, \<a\>, in-line element. The href attribute value identifies the destination of the link.

>**Wrapping Block-Level Elements with Anchors**  
In HTML5, anchor elements specifically have permission to wrap either block-, inline-, or any other level elements.

## Linking to an Email Address

To create an email link, the href attribute value needs to start with mailto: followed by the email address to which the email should be sent.

parameters:
* subject=: add a subject for the email
* body=: add a body for the email
* ......

symbols:
* ?: [link]?[first paramater]=[value]
* &: use & to separate the parameters
* %0A: line breaks must be encoded using %0A
* %20: spaces be encoded using %20

```html
<a href="mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you.%0AI'm%20 glad%20to%20be%20with%20you.">Email Me</a>

```

## Opening Links in a New Window

use the ```target``` attribute with a value of ```_blank```. 

```html
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
```

## Linking to Parts of the Same Page

We can create an on-page link by first setting an ```id``` attribute on the element we wish to link to, then using the value of that ```id``` attribute within an anchor elements ```href``` attribute.

```html
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
```


# Summary

* What semantics are and why they are important
* ```<div>```s and ```<spans>```s, and the difference between block- and inline-level elements
* Which text-based elements best represent the content of a page
* The HTML5 structural elements and how to define the structure and organization of our content and page
* How to use hyperlinks to navigate between web pages or websites

