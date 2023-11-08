---
title: "Advanced Learning Algorithms:Week3-Unit2-Decision tree learning"
date: 2023-11-08
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Measuring purity

How to quantify how pure is the set of examples?   
Use **entropy** as a measure of impurity.

Example: cats  
$p_1$ = fraction of examples that are cats, $H(p_1)$ denote impurity of cats.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081633202.png)

$$p_0 = 1 - p_1$$

Entropy function is defined as:

$$H(p_1) = -p_1log_2(p_1) - p_0log_2(p_0)$$
$$H(p_1) = -p_1log_2(p_1) - (1 - p_1)log_2(1 - p_1)$$

**Note**: Here we define $0log(0) =0$

# Choosing a split: Information Gain

When building a decision tree, the way we'll decide what feature to split on at a node will be based on what choice of feature reduces entropy the most. 

In decision tree learning, the reduction of entropy is called **information gain**. 

Example: cats

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081717113.png)

$w^{node1}$ stands for the number of specific nodes on node1. For example, 5/10. We use it because we don't want overfit.

**Information gain**:  
$=H(p^{root}_1) - \left(w^{left}H(p^{left}_1) + w^{right}H(p^{right}_1) \right)$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081723495.png)


# Putting it together

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081731835.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081743988.png)


# Using one-hot encoding of categorical features

Encoding features that have more than 2 values into binary features(If a categorical feature can take on $k$ values, create $k$ binary features, 0 or 1 valued. Because one of these features will always take on the value 1 that's the hot feature and hence the name **one-hot encoding**).

If we encode all features, it can also be used to train classification or neural network model.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081749936.png)











