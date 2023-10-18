---
title: "Advanced Learning Algorithms:Week1-Unit2-Neural network model"
date: 2023-10-17
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Neural network layer

In the Demand Prediction model, here is how each layer works.

Pay attention to the **name** and **mechanism** of layers, **superscript**, **subscript**, **inputs** and **outputs**.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231017221734.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231017221828.png)


# More complex neural networks


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231017223817.png)

$g$ is called **activition function**, which computes **activition values**, it is sigmoid function here.

Superscript $^{[l]}$ denote layer $l$, and subscript $_{j}$ denote unit $j$ in a layer.



## Quiz

Can you fill in the superscripts and subscripts for the second neuron?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/mrRWkOajSr-0VpDmo2q_CA_748d8f1e177b4af3a252415f8a08b3f1_mls-c2-w1-l2-s02-ivq.png)


$\boldsymbol{a_2^{[3]}=g(\vec{w}_2^{[3]}  \vec{a}^{[2]} + b_2^{[3]})}$

$a_2^{[3]}=g(\vec{w}_2^{[3]}  \vec{a}^{[3]} + b_2^{[3]})$

$a_2^{[3]}=g(\vec{w}_2^{[3]}  \vec{a}_2^{[2]} + b_2^{[3]})$

<br>  

$\vec{a}^{[2]}$ is input, and \vec{a}^{[3]} is output of this layer


# Inference: making predictions (forward propagation)

Use **forward propagation** algorithm to predict digits from handwritten digit images(8*8 pixels).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231017224733.png)

$a^{[2]}$ is similar to $a^{[1]}$, but with 15 units(neurons), not 25.

$a^{[3]} = \left[g(\vec{w}_1^{[3]} \cdot \vec{a}^{[2]} + b_1^{[3]})\right]$


