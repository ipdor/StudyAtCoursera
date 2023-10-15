---
title: "Advanced Learning Algorithms:Week1-Unit1-Neural networks intuition"
date: 2023-10-15
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Welcome!

Syllabus of Neural Networks:

* Week1: inference(prediction)  
  * **How to use parameters**
* Week2: training  
  *  **How to train and get parameters**
* Week3: advice
  * **Practical advice** for building machine learning systems
* Week4: **decision trees**

# Neurons and the brain

Like biological neurons, mathematical model of neuron takes a input and outputs it to another neuron.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231015174158.png)

Mass data have encouraged the development of AI, and neural networks' performance outweight traditional AI(like classification and regression).


# Demand Prediction

Input layer -> Hidden layer(may be multiple) -> Out layer

$\vec{X} \rightarrow \vec{a} \rightarrow a$

In this case, output layer predicting the probility, which is **classification**. But the input 3 numbers is not $X$, they are learnt from $X$ by hidden layer by itself instead of manually selected features.


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231015225040.png)


## Example: Recognizing Images

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231015231332.png)


# Quiz

1.Which of these are terms used to refer to components of an artificial neural network? (hint: three of these are correct)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231015231856.png)

**layers**  
> Yes, a layer is a grouping of neurons in a neural network

**activation function**  
> Yes, an activation is the number calculated by a neuron (and ¡°activations¡± in the figure above is a vector that is output by a layer that contains multiple neurons).
> 
**neurons**  
> Yes, a neuron is a part of a neural network

axon

<br>

2. True/False? Neural networks take inspiration from, but do not very accurately mimic, how neurons in a biological brain learn.

**True** 

False

> Artificial neural networks use a very simplified mathematical model of what a biological neuron does.

