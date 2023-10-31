---
title: "Advanced Learning Algorithms:Week2-Unit4-Additional Neural Network Concepts"
date: 2023-10-31
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Advanced Optimization

**Adam(Adaptive Moment estimation)** algorithm can automatically change $\alpha_i$ for different parameters $w_1, w_2, ... , w_n, and b$.

By doing so, we can find the best peremeters more efficiently.

```python
# model
model = Sequential(
    [
        tf.keras.layers.Dense(units=25, activation='sigmoid'),
        tf.keras.layers.Dense(units=15, activation='sigmoid'),
        tf.keras.layers.Dense(units=10, activation='linear')
    ]
)
# compile
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3), loss= tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)) # Just set optimizer here
# fit
model.fit(X,Y,epochs=100)
```

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310311720772.png)


# Additional Layer Types

**Convolutional layer**: Each neuron in convolutional layer only looks at part of the previous layer's outputs.

It provides some benefits:   
1. Faster computation;  
2. Need less training data(less prone to overfitting)

Example: EKG

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310311734254.png)


# Practice quiz: Additional Neural Network Concepts

1. The Adam optimizer is the recommended optimizer for finding the optimal parameters of the model. How do you use the Adam optimizer in TensorFlow?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310311743023.png)

**When calling model.compile, set optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3).**

The call to model.compile() uses the Adam optimizer by default

The Adam optimizer works only with Softmax outputs. So if a neural network has a Softmax output layer, TensorFlow will automatically pick the Adam optimizer. 

The call to model.compile() will automatically pick the best optimizer, whether it is gradient descent, Adam or something else. So there¡¯s no need to pick an optimizer manually. 


<br>

2. The lecture covered a different layer type where each single neuron of the layer does not look at all the values of the input vector that is fed into that layer. What is this name of the layer type discussed in lecture?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310311734254.png)

1D layer or 2D layer (depending on the input dimension) 

A fully connected layer

Image layer

**convolutional layer**