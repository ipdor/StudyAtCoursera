---
title: 吴恩达ML:Week1
date: 2023-09-10
tags: [课程笔记, Machine Learning]
---
# Introduction
这节课是Coursera上吴恩达的机器学习入门课[Supervised Machine Learning: Regression and Classification](https://www.coursera.org/learn/machine-learning)，也是[Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction)这个专项的第一节课。

文章按照课程结构来组织，每周的课程作为一篇文章，其中每个单元作为一级标题，每个视频/材料/测验课作为二级标题，视频课中再根据内容分我三级、四级标题等。

# Supervised vs. Unsupervised Machine Learning
## What is machine learning?

### Denefition

Field of study that gives computers the ability to learn without being explicitly programmed.


### Quiz

If Arthur Samuel's checkers-playing program had been allowed to play only 10 games (instead of tens of thousands games) against itself, how would this have affected its performance?

* Would have made it better

* Would have made it worse

> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>That "would have made it worse", because in general, the more opportunities you give a learning algorithm to learn, the better it will perform.</font> 

## Supervised learning part 1

Supervised Learning **learns from map (X, y)**, here y is the correct label of input X. And when you provide a X_test, it gives a y_predict based on what it learnt.

### Regression

Predict **one label** from **infinitely** many possible outputs.

Example: House price prediction   


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309121729773.png)

## Supervised learning part 2

The other type of supervised learning is classification.  

Classification also takes **(X, y)** as input, and learns from being given "**right answers**", but predict categories from **finite** possible outputs.

|Regression|Classification|
|:--|:--|
|Predict a **number**|Predict **categories**|
|**Infinitely** many posible outputs|**small number** of possible outputs|

<br/>

Example: Cancer detection   

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309131559201.png)


## Unsupervised learning part 1

Definition: the data comes **only with inputs x** but not output labels y,
and the algorithm has to find some structure or some pattern or something interesting in the data. 

**clustering**
* example: Google news, DNA microarray, Grouping customers


## Unsupervised learning part 2
3 types:  

* Clustering  
  * Group similar data points together.  
* Anormaly detection  
  * Find unusual data points.  
* Dimensionality reduction  
  * Compress data using fewer numbers.  

# Practice Quiz: Supervised vs unsupervised learning

1. Which are the two common types of supervised learning? (Choose two)

* Clustering

* **Regression**

* **Classification** 

2. Which of these is a type of unsupervised learning?

* **Clustering**

* Classification

* Regression


# Regression Model

## Linear Regression Model Part 1

That just means **fitting a straight line** to your data.
It's probably the most widely used learning algorithm in the world today. 

**Linear regression** is one example of a regression model.

Example: predicting house prices

### Terminology

* training set  
* $x$/input/feature
* $y$/output/target
* $m$
* ($x$,$y$)
* ($x^{(i),},y^{(i)}$), $i$ means index


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309191432793.png)


## Linear regression model part 2

Input: training set: ($x$, $y$) pairs  
Output: $f$  
Input of $f$ : $x$  
Output of $f$: $\hat{y}$

Model: $f(x) = f_{w,b}(x) = wx + b$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309191513207.png)


## Cost function formula

The first thing is to define **cost function**.
The cost function will tell us how well
the model is doing so that we can try to get it to do better. 

Model: $f(x) = f_{w,b}(x) = wx + b$

**w,b**: parameters/**coefficients**/weights

### How to find $w$, $b$

Find good $w$ and $b$, so that $\hat{y}^{i}$ as close to $y^{i}$ as possible.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309191710463.png)

the 2 is just for looking neat.

Different people use different cost funciton for different applications, but the **squared error cost function** is by far the most commonly used one for **linear regression**.

## Cost function intuition

Simplifing the cost function $f_w(x) = wx + b$ to $f_w(x) = wx$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309201729181.png)

Then we can easily calculate values of $f_w(x)$ and draw a plot about $j(w)$. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309201728421.png)

Finally, we can achieve **the goal of linear regression: find $minimize_{w,b}J(w,b)$**


## Visualizing the cost function

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309201746817.png)



## Visualization examples

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309211655803.png)

In linear regression, instead of manually trying to find the best $w$ and $b$, we use **gradient descent** to find $w$ and $b$ that **minimizes the cost function $j$**.

Gradient descent and variations on gradient descent are used to train, not just linear regression, but some of the biggest and most complex models in all of AI.

<br>

# Practice Quiz: Regression Model

# Train the model with gradient descent

## Gradient descent




# Practice quiz: Train the model with gradient descent