# Week4

## 04-01 Styling Tables



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306251724867.png)






###  对不同行设置属性

下面```nth-child()```通过传入```even```/```odd```，可以对奇数行或偶数行设置不同属性

```css
tr:nth-child(even){
	background:#f58994;
}
tr:nth-child(odd){
	background:#b0beaf;
}
```





### 子元素复合选择器

```css
tr:last-child>td:first-child{
	border-radius: 0 0 0  25px ;	
}

tr:last-child>td:last-child{
	border-radius: 0 0 25px 0;	
}
```



在表格中```tr:last-child```选择出最后一个tr，也就是最后一行; ```td:last-child1```选择出其中最后一个td。

即：```tr:last-child>td:last-child```选择出最后一行的最后一个单元格，对其设置属性（右下角圆角半径设为25px）





### border-spacing

The `border-spacing` property sets the distance between the borders of adjacent cells.

border-spacing属性设置相邻单元格之间的间距。



类似于margin，但是设置单独tr/td的```margin```无效，必须设置table的```border-spacing```以消除默认的间距。

```css
table.cal{
	border:1px solid #000000;
	padding:0;
	border-spacing: 0px; /*border-spacing*/
	border-radius: 0 0 25px 25px;
}
```



> https://www.w3schools.com/cssref/pr_border-spacing.php
>
> CSS border-spacing Property



## 04-02 Creating Navigation Menus

```css
nav{
    display: inline-block;
    width: 20%;
    height:100vh;
    /*background: #00aaaa;*/
    background-color:#486B02;
    overflow: auto;
}

section{
    display: inline-block;
    width: 70%;
    height: 100vh;
    background-color:aqua;
    overflow: auto;
}
```



### Height

一般display方式是static，不能设置元素的百分比高度实现自适应填充屏幕，如

```css
nav{
    display: inline-block;
    width: 20%;
    height:100%; /* 不可以 */
}
```

但可以以vh为单位设置元素，实现类似效果



> vh，是指**CSS中相对长度单位**，表示相对视口高度（Viewport Height），1vh = 1% * 视口高度。 CSS中相对长度单位，表示相对视口高度（Viewport Height），1vh = 1% * 视口高度。 视口比例长度定义了相对于视口的长度大小，这是文档的可见部分。



### Overflow

2个```inline-block```元素在同一行时，2个元素可能不会水平对齐。可以通过对2个元素设置```overflow: auto; ```解决。



**设置前**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306251757848.png)

**设置后**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202306251758059.png)





### 超链接设置图片

可以为超链接设置背景图片，如箭头等。

为了解决字体和图片重叠的问题，可以设置```padding-left```



```css
nav > a{
    display: block;
    margin: 15% 17%;
    color: #F2F2F2;
    background: url("../images/lightning.png") no-repeat left;
    padding-left: 20%;  /*This*/
}
```





### 最小宽度

为容器设置最小宽度，以保持其中的元素始终居中。

```css
nav{
	box-sizing:border-box;

	display: inline-block;
	width: 20%;
	min-width: 125px; /*this*/
	margin-right:15px;
	height:100vh;
	overflow: auto;
}
```





### border-box

**不需要自己计算宽度、高度应该是多少**

> box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。
>
> 例如，假如您需要并排放置两个带边框的框，可通过将 box-sizing 设置为 "border-box"。这可令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。
>
> https://www.w3school.com.cn/cssref/pr_box-sizing.asp





## 04-03 Accessible Navigation

- Proper <h1> heading

- Proper heading hierarchy

- Off-page headings

    Useful when you want to give SR users a navigational aid without cluttering presentation
    Use CSS to position headings off-page

- Meaningful link text