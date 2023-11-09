---
title: "Advanced Learning Algorithms:Week3-Unit3-Tree ensembles"
date: 2023-11-09
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Using multiple decision trees

To make our decision trees more robust, we need a bunch of trees instead of one, that is **ensemble**.

Every time we have a new example, just get the vote of all the predictions from trees. Finally, use the vode as result.

Example: cat prediction

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091332534.png)

# Sampling with replacement

Creating new training sets by sampling with replacement:  

1. Sampling one example from "bag" each time   
2. Use it as a training example and put it back   
3. Repeat step 1 untill get enough samples. 

# Random forest algorithm

## Bagged decision tree

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091413191.png)

Typical choice of capital B the number of such trees you built might be around a 100 people recommend any value from Say 64, 128. 

## Random forest algorithm

At each node, when choosing a feature to use to split, if $n$ features are available, pic a random subset of $k<n$ features and allow the algorithm to only choose from that subset of features.

$$k = \sqrt{n}$$


> One way to think about why this is more robust to than a single decision tree is the something with replacement procedure causes the algorithm to explore a lot of small changes to the data already and it's training different decision trees and is averaging over all of those changes to the data that the something with replacement procedure causes. 
> 
> And so this means that any little change further to the training set makes it less likely to have a huge impact on the overall output of the overall random forest algorithm. Because it's already explored and it's averaging over a lot of small changes to the training set. 

# XGBoost

## Boosted trees intuition

**Delibrate practice** idea

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091422191.png)

## XGBoost(eXtreme Gradient Boosting)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091424240.png)

Clasification
```python
from xgboost import XGBClassifier
model = XGBClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
```

Regression
```python
from xgboost import XGBRegressor
model = XGBRegressor()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
```

# When to use decision trees

If decide to use decision trees, tree ensembles are the first choice.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091435182.png)

# Practice quiz: Tree ensembles

1. For the random forest, how do you build each individual tree so that they are not all identical to each other?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311091332534.png)

Train the algorithm multiple times on the same training set. This will naturally result in different trees. 

If you are training B trees, train each one on 1/B of the training set, so each tree is trained on a distinct set of examples. 

**A: Sample the training data with replacement and select a random subset of features to build each tree**

Sample the training data without replacement


2. You are choosing between a decision tree and a neural network for a classification task where the input xx is a 100x100 resolution image. Which would you choose?


A decision tree, because the input is unstructured and decision trees typically work better with unstructured data. 

A decision tree, because the input is structured data and decision trees typically work better with structured data. 

**A neural network, because the input is unstructured data and neural networks typically work better with unstructured data.** 

A neural network, because the input is structured data and neural networks typically work better with structured data. 


3. What does sampling with replacement refer to?

It refers to a process of making an identical copy of the training set. 

Drawing a sequence of examples where, when picking the next example, first remove all previously drawn examples from the set we are picking from. 

It refers to using a new sample of data that we use to permanently overwrite (that is, to replace) the original data. 

**Drawing a sequence of examples where, when picking the next example, first replacing all previously drawn examples into the set we are picking from.** 
