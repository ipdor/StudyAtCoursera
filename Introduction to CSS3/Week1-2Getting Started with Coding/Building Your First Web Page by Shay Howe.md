# Building Your First Web Page by Shay Howe



[https://learn.shayhowe.com/html-css/building-your-first-web-page/#common-css-terms](https://learn.shayhowe.com/html-css/building-your-first-web-page/#common-css-terms)

## Terms

- selectors - indicate which HTML elements are being styled. 

	- type selectors
	- class selectors
	- id selectors

- properties

	

- values

In CSS our rule set begins with the selector, which is  immediately followed by curly brackets. Within these curly brackets are  declarations consisting of property and value pairs. Each declaration  begins with a property, which is followed by a colon, the property  value, and finally a semicolon.

```css
p {
  color: orange;
  font-size: 16px;
}
```

![](https://learn.shayhowe.com/assets/images/courses/html-css/building-your-first-web-page/css-syntax-outline.png)





basic selectors, sorted by precision

* type
* class
* id



type selectors

```css
div { ... }
```

```html
<div>...</div>          
<div>...</div>
```



class selectors

classes are denoted by a leading period, `.`

```css
.awesome { ... }
```

```html
<div class="awesome">...</div>
<p class="awesome">...</p>
```

ID selectors

ID selectors are denoted by a leading hash sign, `#`.  

`id` attribute values can only be used once per page

```css
#shayhowe { ... }
```

```html
<div id="shayhowe">...</div>
```



## Referencing CSS

The`rel` attribute with a value of `stylesheet` to specify their relationship. 

The `href` (or hyperlink reference) attribute is used to identify the location, or path, of the CSS file.

```html
<head>
  <link rel="stylesheet" href="main.css">
</head>
```

In this example, the `main.css` file is stored within the same location as the HTML file



## Using CSS Resets

CSS resets take every common HTML element with a predefined style and provide one unified style for all browsers.



Resets can be used as the start point of a CSS file.
