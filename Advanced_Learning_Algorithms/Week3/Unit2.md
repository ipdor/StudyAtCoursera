---
title: "Advanced Learning Algorithms:Week3-Unit2-Bias and variance"
date: 2023-11-06
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Diagnosing bias and variance

Looking at the performance of your algorithm on the **training set** and on the **cross validation set**, to diagnose high bias or
high variance.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061554321.png)

High bias(underfit):  
* $J_{train}$  is high, $J_{cv}$  is high

Just right:  
* $J_{train}$  is low, $J_{cv}$  is low

High variance(overfit):  
* $J_{train}$  is low, $J_{cv}$  is high

## Diagnose

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061605482.png)


# Regularization and bias/variance

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061622305.png)

1. Use dev data set.  
2. For different $\lambda=0, 0.01, 0.02..., 10$, calculate $w^{<i>}, b^{<i>}$ and $J(\vec{w}, b)$.  
3. Find the $\lambda$ with the minimum $J(\vec{w}, b)$.  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061626029.png)

## Bias and variance as a function of regularization parameter $\lambda$

When $\lambda$ is greater, $\frac{\lambda}{2m}\sum^{n}_{j=1}w^2_j$ has more weight, so $J(\vec{w}, b)$ reduce cost(the first term) lesser.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061634088.png)


# Establishing a baseline level of performance

Example: Speech recognition  
$J_{train} = 10.8\%$   
$J_{cv} = 14.8\%$   
Human level performance: $10.6\%$

So, it's more of a variance problem than a bias problem. Because compared with huam performance, $J_{train}$ is low and $J_{cv}$ is high.

**Key idea: Establishing a baseline level of performace, and compare with it.**

* Human level performance
* Competing algorithms performance
* Guess based on experience


# Learning curves

As the size of sample goes larger, fitting data with a line is more difficult, so the train error will become greater.

## High bias

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061716942.png)

## High variance

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061722356.png)


# Deciding what to try next revisited

Example

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061737155.png)


# Bias/variance and neural networks

Usually, **low order polynomial** models prone to have **high bias** problem; **higher order polynomial** models are likely to have **high variance**. So, we need tradeoff.

But large neural networks are low bias.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061802795.png)

Limitation:   
* High computation cost   
* More data  

Large neural networks DON'T affect performance as long as it is regularized properly. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061757281.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061759493.png)


# Quiz

1. If the model's cross validation error $J_{cv}$? is much higher than the training error $J_{train}$?, this is an indication that the model has¡­

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061811421.png)


**high variance**

high bias

Low bias

Low variance


2. Which of these is the best way to determine whether your model has high bias (has underfit the training data)?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061812009.png)

See if the cross validation error is high compared to the baseline level of performance 

See if the training error is high (above 15% or so) 

**Compare the training error to the baseline level of performance**

Compare the training error to the cross validation error.

3. You find that your algorithm has high bias. Which of these seem like good options for improving the algorithm¡¯s performance? Hint: two of these are correct. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311061813389.png)

**Decrease the regularization parameter $\lambda$ (lambda)**

Remove examples from the training set

Collect more training examples 

**Collect additional features or add polynomial features**

4. You find that your algorithm has a training error of 2%, and a cross validation error of 20% (much higher than the training error). Based on the conclusion you would draw about whether the algorithm has a high bias or high variance problem, which of these seem like good options for improving the algorithm¡¯s performance? Hint: two of these are correct. 

Decrease the regularization parameter $\lambda$

**Increase the regularization parameter $\lambda$**

**Collect more training data**

Reduce the training set size 




