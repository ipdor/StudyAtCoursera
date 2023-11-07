---
title: "Advanced Learning Algorithms:Week3-Unit3-Machine learning development process"
date: 2023-11-07
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Iterative loop of ML development

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071323303.png)

## Example: Building a spam clasifier

Model:  
Supervised learning:   
$\vec{x}$ = features of email   
$y$ = spam(1) or not spam(0)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071333039.png)

We should choose the best practice for different situation.   
* High variance(not bias), use "collect more data"

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071328063.png)


# Error analysis

Analysis (in order of importance):
1. Bias and variance 
2. Error analysis

## Categorizing misclassified examples

Categorize misclassified examples (or be a subset randomly selected), and count the numbers.   
Finally, we should **priorize the categories with high net impact**(for example, pharma and steal passwords), instead of the small one(like deliberate misspellings).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071344270.png)

> Note:   
> One email can be counted in multiple categories, because categories can be overlapping.

Improving method:   
* more data
* features

Limitation:
* Error analysis can be a bit harder for tasks that even humans aren't good at.

## Summary

The point of this error analysis is by manually examining
a set of examples that your algorithm is misclassifying or mislabeling.    

Often this will create inspiration for what might be useful to trying it and sometimes it can also tell you that certain types of errors are sufficiently rare that they aren't worth as much of your time to try to fix.

# Adding data

How to add data efficiently.

* get **more specific data** in poor performance categories;
* **data augmentation** by intrducing representative distortions;   
* **data synthesis**(for example, combine different fonts and synthesise OCR data);   
* AI= code(algorithm/model) + data, shift from model centric approach to data-centric approach. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071410444.png)


But what if I can't get more data? use transfer learning.


# Transfer learning: using data from a different task

Transfer learning lets you use data from a different task to help on your application. 

1. Download neural network with parameters
that have been pre-trained on a large dataset with
the same input type(eg., images, audio, texts) as your application(or train your own. But in practice downloading others' image models is more common).  
2. Then further train or fine tune the network on your own data. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071707777.png)

# Full cycle of a machine learning project

1. Scope project   
    Define project   
2. Collect data    
    Define and collect data   
3. Train model(may need to go back step2)   
    Training, error analysis & iterative improvement     
4. Deploy in production(may need to go back step2/step3)     
   Deploy, monitor and maintain system   

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071723264.png)


# Practice quiz: Machine learning development process

1. Which of these is a way to do error analysis? 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071747993.png)

Calculating the test error $J_{test}$

Calculating the training error $J_{train?}$

**Manually examine a sample of the training examples that the model misclassified in order to identify common traits and trends.**

Collecting additional training data in order to help the algorithm do better. 

2. We sometimes take an existing training example and modify it (for example, by rotating an image slightly) to create a new example with the same label. What is this process called?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071748327.png)

Error analysis

Bias/variance analysis 

**Data augmentation**

Machine learning diagnostic

3. What are two possible ways to perform transfer learning? Hint: two of the four choices are correct.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311071749728.png)

**You can choose to train just the output layers' parameters and leave the other parameters of the model fixed.**

**You can choose to train all parameters of the model, including the output layers, as well as the earlier layers.**

Given a dataset, pre-train and then further fine tune a neural network on the same dataset. 

Download a pre-trained model and use it for prediction without modifying or re-training it. 


