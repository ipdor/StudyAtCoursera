---
title: "Advanced Learning Algorithms:Week3-Unit1-Decision trees"
date: 2023-11-08
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Decision tree model

The job of the decision tree learning algorithm is, out of all possible decision trees, to try to **pick one that hopefully does well on the training set**, and then also ideally generalizes well to new data such as your cross-validation and test sets as well.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081555115.png)

# Learning Process

**Desicion 1**: How to choose what feature to split on at each node?   

* Maximize purity (or minimize impurity)


**Desicion 2**: When do you stop splitting?   

* When a node is 100% one class  
* When splitting a node will result in the tree exceeding a maximum depth  
* When improvements in purity score are below a threshold  
* When number of examples in a node is below a threshold
  

# Practice quiz: Decision trees

1. Based on the decision tree shown in the lecture, if an animal has floppy ears, a round face shape and has whiskers, does the model predict that it's a cat or not a cat?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081115467.png)

Not a cat

**cat**

2. Take a decision tree learning to classify between spam and non-spam email. There are 20 training examples at the root note, comprising 10 spam and 10 non-spam emails. If the algorithm can choose from among four features, resulting in four corresponding splits, which would it choose (i.e., which has highest purity)? 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311081116037.png)

Left split: 5 of 10 emails are spam. Right split: 5 of 10 emails are spam. 

Left split: 7 of 8 emails are spam. Right split: 3 of 12 emails are spam. 

Left split: 2 of 2 emails are spam. Right split: 8 of 18 emails are spam. 

**Left split: 10 of 10 emails are spam. Right split: 0 of 10 emails are spam.** 