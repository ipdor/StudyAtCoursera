---
title: "Advanced Learning Algorithms:Week2-Unit3-Multiclass Classification"
date: 2023-10-24
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Multiclass

Multiclass classification is a classification task with more than two classes. 

The algorithm can draw a decision boundary that divides the space into several categories rather than just two categories. 


# Softmax

Softmax is similar to sigmoid, for example in binary classification, we have:


$$softmax(x_1) = \frac{e^{x_1}}{e^{x_1}+e^{x_2}} = \frac{1}{1+e^{x_2-x_1}} = sigmoid(x_1-x_2)$$

(We don¡¯t use softmax for binary classification. It¡¯s typically only used for with multiple classes, so all of the probabilities sum to 1.)


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310261440066.png)

# Neural Network with Softmax output

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310261509954.png)

In this case, we must use a output layer that has 10 units using softmax activation function.

For other activation functions we've learnt so far:
$$a^{[3]}_1 = g(z^{[3]}_1),\;\; a^{[3]}_2 = g(z^{[3]}_2), ¡­¡­$$

For softmax activation function:
$$a^{[3]}_1 = g(z^{[3]}_1, z^{[3]}_2, ...... , z^{[3]}_{10}) $$
$$a^{[3]}_2 = g(z^{[3]}_1, z^{[3]}_2, ...... , z^{[3]}_{10}) $$
$$......$$


A simple version of code is as follows(DO NOT use it in project, it's not very efficient and accurate): 


```python
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
model = Sequential(
    [
        Dense(units=25, activation='relu'),
        Dense(units=15, activation='relu'),
        Dense(units=10, activation='softmax'), # changed here
    ]
)
from tensorflow.keras.losses import SparseCategoricalCrossentropy
model.compile(loss=SparseCategoricalCrossentropy())
model.fit(X, Y, epochs=100)
```

# Improved implementation of softmax

```python
x = 2/10000
print(x)
```
output:
> 0.0002


```python
x = (1+1/10000) - (1-1/10000)
print(x)
```
output:
> 0.00019999999999997797

The second one has numerical roundoff error.  To reduce such error, we slightly change the Tensorflow code:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231028101633.png)

after that, don't forget to call sigmoid function to get the real probability.

```python
'''
 fit data first
'''
logit = model(X)
f_x = tf.nn.sigmoid(logit) # call sigmoid(logit)
```

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231028101410.png)

> Without `from_logit`, the function¡¯s form takes the look of the second equation, which accepts an `a`. With `from_logit`, the function¡¯s form takes the look of the third equation, which accepts only a `z`. Depending on whether `from_logit` is True or False, Tensorflow uses different functions.

## Reference

> [What exactly does the improved implementation of softmax video mean?](https://community.deeplearning.ai/t/what-exactly-does-the-improved-implementation-of-softmax-video-mean/171001)
>
> [Why ¡°logit¡± stands for the output of linear activation function](https://community.deeplearning.ai/t/why-logit-stands-for-the-output-of-linear-activation-function/198805/3)


# Classification with multiple outputs (Optional)

Multi-label classification example:   
Given an image X, is there a car? a bus? a pedestrian?

> In **multi-class classification**, each input will have **only one** output class, but in **multi-label classification**, each input can have **multi-output** classes. 

# Practice quiz: Multiclass Classification

1.For a multiclass classification task that has 4 possible outputs, the sum of all the activations adds up to 1. For a multiclass classification task that has 3 possible outputs, the sum of all the activations should add up to ?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/f38d2d9d-5e70-4900-bd84-baf812439294image2.png)

It will vary, depending on the input x. 

More than 1

Less than 1

**1**

> Yes! The sum of all the softmax activations should add up to 1. One way to see this is that if e^{z1}=10,e^{z2}=20,e^{z3}=30, then the sum of a1+a2+a3? is equal to e^{z1}+e^{z2}+e^{z3} which is 1.


1. For multiclass classification, the cross entropy loss is used for training the model. If there are 4 possible classes for the output, and for a particular training example, the true class of the example is class 3 (y=3), then what does the cross entropy loss simplify to? [Hint: This loss should get smaller when a3a3? gets larger.]

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/f38d2d9d-5e70-4900-bd84-baf812439294image4.png)


z_3/(z_1+z_2+z_3+z_4) 

(?log(a1)+?log(a2)+?log(a3)+?log(a4))/4

z_3 

**?log(a3)**

> Correct. When the true label is 3, then the cross entropy loss for that training example is just the negative of the log of the activation for the third neuron of the softmax. All other terms of the cross entropy loss equation (?log(a1),?log(a2),and?log(a4)) are ignored

1. For multiclass classification, the recommended way to implement softmax regression is to set from_logits=True in the loss function, and also to define the model's output layer with?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/f38d2d9d-5e70-4900-bd84-baf812439294image5.png)

**a 'linear' activation**

a 'softmax' activation

> Yes! Set the output as linear, because the loss function handles the calculation of the softmax with a more numerically stable method.
>
> 