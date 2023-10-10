---
title: 伶寓器ML:Week2
date: 2023-10-03
tags: [仁殻永芝, Machine Learning]
---


# Multiple linear regression

## Multiple features




## Vectorization part 1

## Vectorization part 2

## Gradient descent for multiple linear regression

# Practice quiz: Multiple linear regression

1. In the training set below, what is x4(3)? Please type in the number below (this is an integer such as 123, no decimal points).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/aa52579a-b91d-4e22-834d-0cea942d1351image2.png)

> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>30</font> 


2. Which of the following are potential benefits of vectorization? Please choose the best option.

It makes your code run faster

It can make your code shorter 

It allows your code to run more easily on parallel compute hardware

**All of the above**

3. True/False? To make gradient descent converge about twice as fast, a technique that almost always works is to double the learning rate alpha. 

True

**False**

# Gradient descent in practice

## Feature scaling part 1

### **Why rescale feature(s)?**

Take $f_{w,b}(x_1, x_2) = w_1 * x_1 + w_2 * x_2 + b$ as an example.

When one parameter has a large range, whereas the another one has a much smaller range, there may be some problem. 

Say $x_1 \in [300-2000]$, $x_2 \in [0-5]$, So:   
1. $w_1$ will be a small value, and $w_2$ is large.    
2. Even a small $w_1$ changes $J_{w,b}(x)$ a lot, but we need to alter $w_2$ much more to get the same amount of change of $J_{w,b}(x)$.  
3. The contour plot is tall and skinny, which means more difficulty for gradient descent algorithm to find the local minimum point.

If we rescale them to $x_1, x_2 \in [0-1]$, so they all take on comparable range of values. which causes speed up gradient descent significantly.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310071107606.png)

> Reference:  
> [Importance of Feature Scaling](https://scikit-learn.org/stable/auto_examples/preprocessing/plot_scaling_importance.html)

## Feature scaling part 2

### **How to rescale feature(s)?**

Before scaling, $x_1 \in [300-2000]$, $x_2 \in [0-5]$

1. Feature scaling

scaled x = x divide by the maximum value.

$x_{1,scaled} = \frac{x_1}{2000}, x_{2,scaled} = \frac{x_2}{5}$

So we get $x_1 \in [0.15-1]$, $x_2 \in [0-1]$

2. Mean normalization

calculate mean value $\mu$

scaled x = (x - $\mu$) / (x_max - x_min).

$x_{1,scaled} = \frac{x_1 - \mu_1 }{2000 - 300}, x_{2,scaled} = \frac{x_2 - \mu_2}{5 - 1}$

So we get $x_1 \in [-0.18, 0.82]$, $x_2 \in [-0.46, 0.54]$

3. Z-score normalization 

calculate mean value $\mu$, standard deviation $\sigma$

scaled x = (x - $\mu$) / (x_max - x_min).

$x_{1,scaled} = \frac{x_1 - \mu_1 }{\sigma_1}, x_{2,scaled} = \frac{x_2 - \mu_2}{\sigma_2}$

So we get $x_1 \in [-0.67, 3.1]$, $x_2 \in [-1.6, 1.9]$

</br>

**Rescaling data or not** depends on its range:  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310071340206.png)


### Quiz

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310071356701.png)
Which of the following is a valid step used during feature scaling? 

* Multiply each value by the maximum value for that feature

* **Divide each value by the maximum value for that feature**

> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>
By dividing all values by the maximum, the new maximum range of the rescaled features is now 1 (and all other rescaled values are less than 1).</font> 


## Checking gradient descent for convergence

### How to check if gradient descent is converging?

1. Draw the iteration-$J_{w,b}(x)$ plot, and see if it will gradually close to a certain value.   
2. Calculate $diff=cost - cost_lasttime$, set $\epsilon$ to a small value. If $diff < \epsilon$, then it is converging.


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310071428282.png)



## Choosing the learning rate


When gradient descent is diverging, it is due to **bug** in code or an **inappropriate learning rate**.

How to differentiate?  
Take a very small learning rate $\alpha$ (It is not a good practice), if $J_{w,b}(x)$ not decreases on every iteration, there must be a bug in code.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310071501503.png)

### **How to choose learning rate?**

1. Find a small learning rate $\alpha_1$, so $J_{w,b}(x)$ decreases on every iteration
2. Increase the learning rate $\alpha_1$ gradually.


try $\alpha$:  
$0.001　　　0.01　　　0.1　　　1$

More specifically, if $\alpha$ = `0.001` works, then increase the learning rate threefold to `0.003`, and so on:  
$\textbf{0.001} 　　　0.003　　　\textbf{0.01}　　　0.03　　　\textbf{0.1}　　　0.3　　　\textbf{1}$

　
## Feature engineering

In order to make it easier for the learning algorithm to make accurate predictions, we need feature engineering. so we can fit not just straight lines, but curves, non-linear functions to data. 

Feature engineering:  
> Using **intuition** to design **new features**, by *transforming* or *combining* original features.

Example:  
combine $x_1$ frontage with $x_2$ depth, use $x_3 = x_1 * x_2$ as the third feature.


## Polynomial regression

When combining features, we get polynomial regression. Variables in it may have higher power, like 2 or 3, even 1/2. Data preprocessing will be more important here.

Finally, just choose the best express to fit our data.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231009223111.png)


# Practice quiz: Gradient descent in practice

1. Which of the following is a valid step used during feature scaling? 
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310101536451.png)

Add the mean (average) from each value and and then divide by the (max - min).

**Subtract the mean (average) from each value and then divide by the (max - min).**

2. Suppose a friend ran gradient descent three separate times with three choices of the learning rate α and plotted the learning curves for each (cost J for each iteration).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310101537641.png)

For which case, A or B, was the learning rate α likely too large?


**case B only**

case A only 

Both Cases A and B

Neither Case A nor B 


3. Of the circumstances below, for which one is feature scaling particularly helpful?

**Feature scaling is helpful when one feature is much larger (or smaller) than another feature.
**
Feature scaling is helpful when all the features in the original data (before scaling is applied) range from 0 to 1.


4. You are helping a grocery store predict its revenue, and have data on its items sold per week, and price per item. What could be a useful engineered feature?

For each product, calculate the number of items sold divided by the price per item.

**For each product, calculate the number of items sold times price per item.**


5. True/False? With polynomial regression, the predicted values f_w,b(x) does not necessarily have to be a straight line (or linear) function of the input feature x.


**True**

False 

