---
title: "Advanced Learning Algorithms:Week3-Unit2-Decision tree learning"
date: 2023-11-08
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Measuring purity

How to quantify how pure is the set of examples?   
Use **entropy** as a measure of impurity(the entropy shows the degree of predictability of an event.). 

Example: cats  
$p_1$ = fraction of examples that are cats, $H(p_1)$ denote impurity of cats.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081633202.png)

$$p_0 = 1 - p_1$$

Entropy function is defined as:

$$H(p_1) = -p_1log_2(p_1) - p_0log_2(p_0)$$
$$H(p_1) = -p_1log_2(p_1) - (1 - p_1)log_2(1 - p_1)$$

**Note**: Here we define $0log(0) =0$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/f1fed11a-1ade-4b8c-b5cf-e6f9b11a2b23image4.png)

# Choosing a split: Information Gain

When building a decision tree, the way we'll decide what feature to split on at a node will be based on what choice of feature reduces entropy the most. 

In decision tree learning, the reduction of entropy is called **information gain**. 

Example: cats

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081717113.png)

$w^{node1}$ stands for the number of specific nodes on node1. For example, 5/10. We use it because we don't want overfit.

**Information gain**:  
$$=H(p^{root}_1) - \left(w^{left}H(p^{left}_1) + w^{right}H(p^{right}_1) \right)$$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081723495.png)


# Putting it together

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081731835.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081743988.png)


# Using one-hot encoding of categorical features

Encoding features that have more than 2 values into binary features(If a categorical feature can take on $k$ values, create $k$ binary features, 0 or 1 valued. Because one of these features will always take on the value 1 that's the hot feature and hence the name **one-hot encoding**).

If we encode all features, it can also be used to train classification or neural network model.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081749936.png)


# Continuous valued features

When consuming splits, you would just consider different values(we can choose $m-1$ values that are the means of any two samples out of $m$ sample) to split on, carry out the usual information gain calculation and decide to split on that continuous value feature if it gives the highest possible information gain. 


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231108202733.png)


# Regression Trees (optional)

Regression with decision trees: predicting a number

Example: animal weights

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231108205524.png)

Still, we split features according to features, but evaluate their **variance**.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231108205201.png)


# Practice quiz: Decision tree learning

1. Recall that entropy was defined in lecture as H(p_1) = - p_1 log_2(p_1) - p_0 log_2(p_0), where p_1 is the fraction of positive examples and p_0 the fraction of negative examples. 

At a given node of a decision tree, , 6 of 10 examples are cats and 4 of 10 are not cats. Which expression calculates the entropy H(p1)H(p1?) of this group of 10 animals?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/f1fed11a-1ade-4b8c-b5cf-e6f9b11a2b23image4.png)

(0.6)log2(0.6)+(1?0.4)log2(1?0.4)

**?(0.6)log2(0.6)?(0.4)log2(0.4)**

?(0.6)log2(0.6)?(1?0.4)log2(1?0.4)

(0.6)log2(0.6)+(0.4)log2(0.4)

1. Recall that information gain was defined as follows: 

$$H(p^{root}_1) - \left(w^{left}H(p^{left}_1) + w^{right}H(p^{right}_1) \right)$$

Before a split, the entropy of a group of 5 cats and 5 non-cats is $H(5/10)$. After splitting on a particular feature, a group of 7 animals (4 of which are cats) has an entropy of $H(4/7)$. The other group of 3 animals (1 is a cat) and has an entropy of $H(1/3)$. What is the expression for information gain?

$H(0.5)?(7?H(4/7)+3?H(1/3))$

$H(0.5)?(H(4/7)+H(1/3))$

$H(0.5)?(\frac{4}{7}?H(4/7)+\frac{4}{7}?H(1/3))$

$\boldsymbol{H(0.5)?(\frac{7}{10}H(4/7)+\frac{3}{10}H(1/3))}$


1. To represent 3 possible values for the ear shape, you can define 3 features for ear shape: pointy ears, floppy ears, oval ears. For an animal whose ears are not pointy, not floppy, but are oval, how can you represent this information as a feature vector?

[0, 1, 0]

[1, 1, 0]

**[0, 0, 1]**

[1,0,0] 


4. For a continuous valued feature (such as weight of the animal), there are 10 animals in the dataset. According to the lecture, what is the recommended way to find the best split for that feature?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231108202733.png)


Use gradient descent to find the value of the split threshold that gives the highest information gain.

**Choose the 9 mid-points between the 10 examples as possible splits, and find the split that gives the highest information gain.**

Try every value spaced at regular intervals (e.g., 8, 8.5, 9, 9.5, 10, etc.) and find the split that gives the highest information gain.

Use a one-hot encoding to turn the feature into a discrete feature vector of 0¡¯s and 1¡¯s, then apply the algorithm we had discussed for discrete features. 


5. Which of these are commonly used criteria to decide to stop splitting? (Choose two.)

When a node is 50% one class and 50% another class (highest possible value of entropy) 

**When the tree has reached a maximum depth**

When the information gain from additional splits is too large

**When the number of examples in a node is below a threshold**