---
title: "Advanced Learning Algorithms:Week3-Unit4-Skewed datasets (optional)"
date: 2023-11-07
tags: [课程笔记, Machine Learning]
---

# Error metrics for skewed datasets

When have datasets with rare classes, model may not be able to correctly predict rare samples.

To discern a useful algorithm, we can use **pricision/recall** and **confusion matrix**.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231107205458.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231107205253.png)


# Trading off precision and recall

In the ideal case, we like for learning algorithms that have high precision and high recall. However, we often need to trade-off.


> High **precision** would mean that if a diagnosis of patients have that rare disease, probably the patient does have it and it's an accurate diagnosis.   
> High **recall** means that if there's a patient with that rare disease, probably the algorithm will correctly identify that they do have that disease.   
> Precision反应假阳性的概率，recall是诊断准确率。


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231107210544.png)


How to decide: 
* Change threshold manually
* **F1 score(Harmonic mean)**