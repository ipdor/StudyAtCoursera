---
title: "Advanced Learning Algorithms:Week1-Unit3-TensorFlow implementation"
date: 2023-10-19
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Inference in Code

A new example of Coffee Roasting

The task is given a feature vector x with both temperature and duration, say 200 degrees Celsius for 17 minutes. How can we do inference in a neural network to get it to tell us whether or not this temperature and duration setting will result in good coffee or not? 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231019225635.png)

# Data in TensorFlow

TensorFlow use **matrixes**, instead of vectors.

A tensor here is a data type that the TensorFlow team had created in order to store and carry out computations on matrices efficiently. **Just think of tensor as a matrix.**


use `a1.numpy()` converts a tensor back to numpy array.

# Building a neural network

- The `model.compile` statement defines a loss function and specifies a compile optimization.
- The `model.fit` statement runs gradient descent and fits the weights to the data.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201054216.png)


# Quiz 

1. For the the following code:  

model = Sequential([

 Dense(units=25, activation="sigmoid"),

 Dense(units=15, activation="sigmoid"),

 Dense(units=10, activation="sigmoid"),

 Dense(units=1, activation="sigmoid")])

 This code will define a neural network with how many layers?

25

3

**4**

5

<br>

2. How do you define the second layer of a neural network that has 4 neurons and a sigmoid activation?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201426392.png)


**Dense(units=4, activation=‘sigmoid?)**

Dense(layer=2, units=4, activation = ‘sigmoid?)

Dense(units=[4], activation=[‘sigmoid’]) 

Dense(units=4)

<br>

3. If the input features are temperature (in Celsius) and duration (in minutes), how do you write the code for the first feature vector x shown above?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201428083.png)

x = np.array([[200.0],[17.0]])

x = np.array([[?200.0?, ?17.0’]])

x = np.array([[200.0 + 17.0]])

**x = np.array([[200.0, 17.0]])**
