---
title: "Advanced Learning Algorithms:Week3-Unit1-Advice for applying machine learning"
date: 2023-11-04
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Deciding what to try next

To efficiently diagnose problems, we need machine learning **diagnostic**:  

> A test that you run to gain insight into what is/isn't working with a learning algorithm, to gain guidance into improving its performance.

Example:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104133044.png)

# Evaluating a model

Spliting data set into **training set** and **test set**.  
Then, training and testing different data set, so we can compute $J_{test}(\vec{w},b)$, $J_{train}(\vec{w},b)$, which can measure how was doing on these two data set.

## regression

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104143912.png)

## classification
Method1:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104144226.png)

Method2:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104144541.png)


## Diagnose:

For example, ploting a picture to see whether an algorithm is overfit is hard. 

But, If $J_{train}(\vec{w},b)$ is **low** and $J_{test}(\vec{w},b)$ is **high**, we can diagnose the problem without such plot.

Further, how to design an algorithm help you to automatically fit the data well(straight line? a second order polynomial? a third order fourth order?)?

# Model selection and training/cross validation/test sets

$J_{test}(\vec{w},b)$ is a better indicator, because it show the generalization capacity of the model.

## Method1

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104151311.png)

But it's not good, because the smallest $J_{test}(\vec{w},b)$ may be an optimistic value and smaller than real generalization error.

## Method2

Spliting data set into 3 sets as follows:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104151851.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104152016.png)

1. Fit $w^{<1>}, b^{<1>}$ using **training set**, then evaluate on **cross-validation set** through $d=1$ to $d=10$;  
2. Picking the model with the lowest $J_{cv}$;   
3. Calculate the test set error $J_{test}$ using **test set** as estimate generalization error.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104152216.png)

It also can be used in neural network:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231104152445.png)


# Practice quiz: Advice for applying machine learning

1. In the context of machine learning, what is a diagnostic?

A process by which we quickly try as many different ways to improve an algorithm as possible, so as to see what works.

This refers to the process of measuring how well a learning algorithm does on a test set (data that the algorithm was not trained on).

**A test that you run to gain insight into what is/isn¡¯t working with a learning algorithm.**

An application of machine learning to medical applications, with the goal of diagnosing patients¡¯ conditions. 

<br>
2. True/False? It is always true that the better an algorithm does on the training set, the better it will do on generalizing to new data. 

True

**False**

<br>
3. For a classification task; suppose you train three different models using three different neural network architectures. Which data do you use to evaluate the three models in order to choose the best one?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/392a50a6-14d1-40c4-9a21-b1f12202c20fimage3.png)

The training set

**The cross validation set** 

All the data -- training, cross validation and test sets put together. 

The test set



