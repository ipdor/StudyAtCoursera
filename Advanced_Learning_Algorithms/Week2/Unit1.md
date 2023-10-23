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


