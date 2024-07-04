---
title: 吴恩达ML:Week1
date: 2023-09-10
tags: [课程笔记, Machine Learning]
---
# Introduction
这节课是Coursera上吴恩达的机器学习入门课[Supervised Machine Learning: Regression and Classification](https://w.coursera.org/learn/machine-learning)，也是[Machine Learning Specialization](https://w.coursera.org/specializations/machine-learning-introduction)这个专项的第一节课。

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

</br>

## Linear regression model part 2

Input: training set: ($x$, $y$) pairs  
Output: $f$  
Input of $f$ : $x$  
Output of $f$: $\hat{y}$

Model: $f(x) = f_{w,b}(x) = wx + b$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309191513207.png)

</br>

## Cost function formula

The first thing is to define cost function.  
The **cost function** will tell us **how well
the model is doing** so that we can try to get it to do better.

Model: $f(x) = f_{w,b}(x) = wx + b$

**w,b**: parameters/**coefficients**/weights

### Problem: How to find the best $w$, $b$

Find good $w$ and $b$, so that $\hat{y}^{i}$ as close to $y^{i}$ as possible.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309191710463.png)

the 2 is just for looking neater.

Different people use different cost funciton for different applications, but the **squared error cost function**(also known as **mean squared error**, **MSE**, 均方误差, here)) is by far the most commonly used one for linear regression.

</br>

## Cost function intuition

1. To find a line that fits all data, we have model:  
$f_{w,b}(x) = wx + b$  

2. Here $w, b$ are parameters/coefficients/weights  
   We have different $f_{w,b}(x)$ according to different $w$ and $b$. To fit the data well, we need to find the best $w$ and $b$.
3. we find the cost function to evaluate coefficients.  
$J(w,b) = \frac{1}{2m} \sum_{i=1}^m{( \hat{y}^{(i)} - y^{(i)}) ^2} = \frac{1}{2m} \sum_{i=1}^m{( f_{w,b}(x^{(i)}) - y^{(i)}) ^2}$  
the better these tow parameters are,  the smaller the cost value $J(w,b)$ we have. Vice versa.

1. So, Our goal is find:  
   $minimize_{w,b} J(w,b)$


Simplifing the cost function $f_w(x) = wx + b$ to $f_w(x) = wx$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309201729181.png)

Then we can easily calculate values of $f_w(x)$ for different $w$ and draw a plot of $J(w)$. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309201728421.png)

Finally, we can achieve **the goal of linear regression: find $minimize_{w,b}J(w,b)$**

</br>

## Visualizing the cost function

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309281629752.png)

Any single point on this surface represents some particular choice of w and b.

</br>

## Visualization examples

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309281637945.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309211655803.png)

In linear regression, instead of manually trying to find the best $w$ and $b$, we use **gradient descent** to find **$w$ and $b$ that give the minimum cost function $j$**.

Gradient descent and variations on gradient descent algorithm are used to train, not just linear regression, but some of the biggest and most complex models in all of AI.

<br>

# Practice Quiz: Regression Model

1. For linear regression, the model is
  
   $fw,b(x)=wx+bfw,b?(x)=wx+b$.

Which of the following are the inputs, or features, that are fed into the model and with which the model is expected to make a prediction?

* w and b.

* m

* **x**

* (x,y)


2. For linear regression, if you find parameters w and b so that J(w,b) is very close to zero, what can you conclude?


* This is never possible -- there must be a bug in the code. 

* **The selected values of the parameters w and b cause the algorithm to fit the training set really well.**

* The selected values of the parameters w and b cause the algorithm to fit the training set really poorly.


# Train the model with gradient descent

## Gradient descent

Gradient descent: find the minimum value of a cost function(for linear regression or any function)

Outline:   
1. Start with some $w$, $b$
2. Keep changing $w$, $b$ to reduce $J(w,b)$
3. Until we settle at or near a local minimum(not necessirially the only 1 and the global minimum)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929193609.png)

Started from different point, we may get different local minimum.

## Implementing gradient descent

Gradient descent algorithm:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929193850.png)

Here, $\alpha$ is learning rate, a small value between $(0, 1)$, $\frac{?}{?w} J(w,b)$ is derivative.

Just simultaneously update $w$ and $b$, like that:

> $tmp\_w = w - \alpha \frac{?}{?w} J(w,b)$  
>
> (update variable $w$ here is incorrect!)
> 
> $tmp\_b = b - \alpha \frac{?}{?b} J(w,b)$    
> 
> $w = tmp\_w$
> 
> $b = tmp\_b$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/n7JrkYmhTLyya5GJoay8ww_d56fe65b44c84abe8f84e42eaf9223a1_w1l3ivq_4.png)



## Gradient descent intuition

When the derivative $\frac{?}{?w} J(w,b) > 0$, is a **positive** number, $w$ decreases and get closer to a local minimum.

When the derivative $\frac{?}{?w} J(w,b) < 0$, is a **negative** number, $w$ increases and get closer to a local minimum.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929200713.png)

## Learning rate


If the learning rate is **too small**, then gradient descents will work, but it will be slow. 

If the learning rate is **too large**,
then creating the sense may overshoot and may never reach the minimum. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929201501.png)

**What if we've already reached a minimum?**

> The derivative $\frac{?}{?w} J(w,b) = 0$ now, so cost function is 0.  
> 
> **Gradient descent don't change $w$ any more.**

Finally, when we get closer to a local minimum, gradient descent will automatically take smaller steps, because derivative becomes smaller.



## Gradient descent for linear regression

Put knowledge together, we get the final gradient descent algorithm:

> $w = w - \alpha \frac{1}{m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})x^{(i)}$  
> 
> $b = b - \alpha \frac{1}{m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})$    



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929202404.png)

## Running gradient descent


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929203027.png)

"Batch" gradient descent
> "Batch": Each step of gradient descent uses all the training examples.


# Practice quiz: Train the model with gradient descent

### 1. Gradient descent is an algorithm for finding values of parameters w and b that minimize the cost function J.


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20230929193850.png)

When $\frac{?J(w,b)}{?w}$? is a negative number (less than zero), what happens to w after one update step?

</br>

It is not possible to tell if  will increase or decrease. 

$w$ stays the same 

$w$ decreases

**$w$ increases.**


### 2. For linear regression, what is the update step for parameter b?

</br>

$b = b - \alpha \frac{1}{m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})x^{(i)}$

$b = b - \alpha \frac{1}{m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})$     

(The 2nd one is correct)
