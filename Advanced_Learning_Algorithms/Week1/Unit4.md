---
title: "Advanced Learning Algorithms:Week1-Unit4-Neural network implementation in Python"
date: 2023-10-20
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Forward prop in a single layer

Howt to implment forward prop in Python by hard coding.

`w2_1` denotes $w^{[2]}_1$


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201451255.png)



# General implementation of forward propagation

Similar to the previous video, here is a general implementation of forward propagation

Each column of parameter $W$ is a parameter $w_i$, which is a vector;    
Similarly, $a_i$ is a vector/list of numbers, $\boldsymbol{a_i = [a^{[i]}_1, a^{[i]}_2, ¡­¡­, a^{[i]}_n]}$ (n is the number of units in this layer).


A **capital** alphabet refers to a **matrix**, but **lowercase** alphabet represents a **vector**.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201521345.png)


# Practice quiz: Neural network implementation in Python



1. According to the lecture, how do you calculate the activation of the third neuron in the first layer using NumPy?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201752181.png)

**z1_3 = np.dot(w1_3, x) + b1_3**  
**a1_3 = sigmoid(z1_3)**

<br>

layer_1 = Dense(units=3, activation='sigmoid')  
a_1 = layer_1(x)

<br>

z1_3 =w1_3 * x + b  
a1_3 = sigmoid(z1_3)

<br>

<br>

2. According to the lecture, when coding up the numpy array W, where would you place the w parameters for each neuron?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201754809.png)

**In the columns of W.**

<br>

In the rows of W.

<br>
<br>


3. For the code above in the "dense" function that defines a single layer of neurons, how many times does the code go through the "for loop"? Note that W has 2 rows and 3 columns.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310201755394.png)

6 times 

5 times 

**3 times**

2 times


