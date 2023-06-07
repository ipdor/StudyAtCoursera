# week1-Styling Syntax and Theory



### 1.Which of the following is not an option for specifying a color in CSS3?

binary



### 2.If your body tag uses the style attribute ***style="text-align:center"***, you can overwrite that property by using the CSS3 rule.

```css
body{
   text-align: left;
}
```



False



### 3.What is wrong with the following code?



```css
body{
   color: #000000;
   background-color:#FFFFFF
   font-family: Times, Arial, Cursive;
}
```



There is a missing semicolon



### 4.Assume the following rule is the only one that styles the body element: What happens if the browser doesn't support Cursive or Helvetica?


```css
body{
   font-family: Cursive, Helvetica, Verdana;
}
```

The text will be displayed in Verdana


### 5.The browser defaults override rules specified in an external style sheets.



False

external style sheets have a higher level priority.





### 6.Using the code below, will the body of the page have the background-color defined in the file style.css or the background color define in the <style> tag?

```css
<head>
    <meta charset = "UTF-8">
    <title>Test code</title>
    <link rel "stylesheet" href = "style.css">
    <style>
        body{
            background-color: #44CCDD;
        }
    </style>
</head>
```

`<style>`


### 7.Internal styling (rules specified in the <head> section) override rules specified with the style attribute in a tag.



False



### 8.The default display value for paragraphs is:

**block**

inline-block

inline

none



### 9.The default display value for <span> is:

inline


###¡¡10.A block element takes up the full width of it's parent, even if the content is smaller than the parent.  So two block elements at the same will not be side-by-side.


False

### 11.Inline elements take up the full width of the browser, even if the content is smaller than the browser size.


False


### 12.Which CSS3 property is used to center text? (Only provide the property name; do not give it a value.)


text-center

**text-align**

align

center


### 13.Which of the following is the best way to convey that your text has special meaning?


**Using semantic tags in addition to color and/or font.**

Using a combination of font size and color to signify the important text

Using colors to signify the important text

Using a larger font size to signify the important text

