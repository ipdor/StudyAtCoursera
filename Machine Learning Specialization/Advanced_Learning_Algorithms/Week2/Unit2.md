---
title: "Advanced Learning Algorithms:Week2-Unit2-Activation Functions"
date: 2023-10-24
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Alternatives to the sigmoid activation

Which activation functions do we mainly use?

* Sigmoid activation function
* Linear activation function("No activation function")
* ReLU((rectified linear unit)) activation function

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241649574.png)

# Choosing activation functions

How we can choose activation function?

**For output layer:**

* $y = 0/1$ (binary classification), use **Sigmoid** function  
* $y > 0$, use **ReLU** function  
* $y = +/-$, use **Linear** function

**For hidden layer:** use **ReLU** function

> Why do we use sigmoid function in hidden layer hardly ever?  
> 1.calculating $g(z)$ is less efficient;  
> 2.running gradient descent is less efficient. (Why? Relu function has only 1 flat part, whereas Sigmoid function has 2. More flat part in activation function $f_{w,b}(x)$, more flat part in cost function $J(W,b)$))
>
> Why do we use linear function in hidden layer?
> 
> See next video.


Other activation functions may work better at some occasions, like LeakyReLU activation function. But for the most part, these 3 functions would be good enough.


# Why do we need activation functions?

Why do we even need activation functions at all?  
Why don't we just use the linear activation function or use no activation function anywhere?

> It turns out that this big neural network will become no different than just linear regression. So this would defeat the entire purpose of using a neural network because it would then just not be able to fit anything more complex than the linear regression model that we learned about in the first course.

Example:

When $g(z) = z$, $\vec{a}^{[2] = w \cdot x + b}$, equivalent to logistic regression.


# Practice quiz: Activation Functions

1. Which of the following activation functions is the most common choice for the hidden layers of a neural network?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241742916.png)


Sigmoid

Most hidden layers do not use any activation function 

Linear

**ReLU (rectified linear unit)**

> A ReLU is most often used because it is faster to train compared to the sigmoid. This is because the ReLU is only flat on one side (the left side) whereas the sigmoid goes flat (horizontal, slope approaching zero) on both sides of the curve.

2. For the task of predicting housing prices, which activation functions could you choose for the output layer? Choose the 2 options that apply.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241743972.png)

**ReLU** 

Sigmoid

**linear** 

> ReLU outputs values 0 or greater, and housing prices are positive values.
>
> A linear activation function can be used for a regression task where the output can be both negative and positive, but it's also possible to use it for a task where the output is 0 or greater (like with house prices).

3. True/False? A neural network with many layers but no activation function (in the hidden layers) is not effective; that¡¯s why we should instead use the linear activation function in every hidden layer. 


**False**

True

> A neural network with many layers but no activation function is not effective. A linear activation is the same as "no activation function". 
