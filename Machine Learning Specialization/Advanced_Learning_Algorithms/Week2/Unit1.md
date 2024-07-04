---
title: "Advanced Learning Algorithms:Week2-Unit1-Neural Network Training"
date: 2023-10-23
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# TensorFlow implementation

```python
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

# The 1st part, create layers
model = Sequential(
    [
        Dense(units=25, activation='sigmoid'),
        Dense(units=15, activation='sigmoid'),
        Dense(units=1, activation='sigmoid')
    ]
)

# The 2nd part, assign loss function
from tensorflow.keras.losses import BinaryCrossentropy
model.compile(loss=BinaryCrossentropy())

# The 3rd part, fit data
# epochs: number of steps in gradient descent
model.fit(X,Y,epochs=100)
```



![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310231747180.png)



# Training Details


## 1.create layers

The following code defines the $f_{\vec{w},b}(\vec{x})$ function:

$$f_{\vec{w},b}(\vec{x}) = g(\vec{w} \cdot \vec{x} + b) = \frac{1}{1+(e^{- (\vec{w} \cdot \vec{x} + b)})}$$

```python
model = Sequential(
    [
        Dense(units=25, activation='sigmoid'),
        Dense(units=15, activation='sigmoid'),
        Dense(units=1, activation='sigmoid')
    ]
)
```

## 2.assign loss function

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241535145.png)

In binary classification, we use the loss function:

$$L(f(\vec{x}), y) = -ylog(f(\vec{x})) - (1-y)log(1-f(\vec{x}))$$

The function is also known as **binary cross entropy**(binary is just for emphasizing), that's the source of name "**BinaryCrossentropy**" in tensorflow.

```python
from tensorflow.keras.losses import BinaryCrossentropy
model.compile(loss=BinaryCrossentropy())
```

When we are solving regression problems, we can use different loss function:

```python
from tensorflow.keras.losses import MeanSquaredError
model.compile(loss=MeanSquaredError())
```


## 3.fit data/backpropagation

Call `fit` function to run gradient descent algorithm. In neural network, it is called **backpropagation**.

`epochs`: number of steps in gradient descent

```python
model.fit(X, y, epochs=100)
```

# Practice quiz: Neural Network Training


1. Here is some code that you saw in the lecture:

```python
model.compile(loss=BinaryCrossentropy())
```

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241520694.png)

For which type of task would you use the binary cross entropy loss function?


A classification task that has 3 or more classes (categories)

**binary classification (classification with exactly 2 classes)**

BinaryCrossentropy() should not be used for any task. 

regression tasks (tasks that predict a number)



2. Here is code that you saw in the lecture:

```python
model = Sequential([

Dense(units=25, activation='sigmoid¡¯),

Dense(units=15, activation='sigmoid¡¯),

Dense(units=1, activation='sigmoid¡¯)

])

model.compile(loss=BinaryCrossentropy())

model.fit(X,y,epochs=100)

```

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310241520694.png)

Which line of code updates the network parameters in order to reduce the cost?


**`model.fit(X,y,epochs=100)`**

`model = Sequential([...]) `

`model.compile(loss=BinaryCrossentropy())`

None of the above -- this code does not update the network parameters. 

