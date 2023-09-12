---
title: 吴恩达ML:Week1
date: 2023-09-10
tags: [课程笔记, Machine Learning]
---
# Introduction
这节课是Coursera上吴恩达的机器学习入门课[Supervised Machine Learning: Regression and Classification](https://www.coursera.org/learn/machine-learning)，也是[Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction)这个专项的第一节课。

文章按照课程结构来组织，每周的课程作为一篇文章，其中每个单元作为一级标题，每个视频/材料/测验课作为二级标题，视频课中再根据内容分我三级、四级标题等。

# Supervised vs. Unsupervised Machine Learning
## What is machine learning?

### Denefition

Field of study that gives computers the ability to learn without being explicitly programmed.


### Quiz

If Arthur Samuel's checkers-playing program had been allowed to play only 10 games (instead of tens of thousands games) against itself, how would this have affected its performance?

* Would have made it better

* Would have made it worse

> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>That "would have made it worse", because in general, the more opportunities you give a learning algorithm to learn, the better it will perform.</font> 

## Supervised learning part 1

Supervised Learning **learns from map (X, y)**, here y is the correct label of input X. And when you provide a X_test, it gives a y_predict based on what it learnt.

### Regression

Predict **one label** from **infinitely** many possible outputs.

Example: House price prediction   


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202309121729773.png)

## Supervised learning part 2

