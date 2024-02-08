
---
title: Îâ¶÷´ïUnsupervised  learning:Week1  
date: 2024-01-15  
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]  
---

# Clustering

## What is clustering?

Unsupervised learning:  
Useing algorithms to find some interesting structure about this data.

Clustering algorithm:  
look at the dataset and try to see if it can be grouped into clusters, meaning groups of points that are similar to each other. 

Application: Grouping similar news, market segmentation

## K-means intuition

Do 2 things:  
1. assign points to one of cluster centroids(choose the most closed cluster centroids for each point);  
2. move cluster centroids (to the means of all points that was assigned to it).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202401151134811.png)


## K-means algorithm

Let's say we have $m$ examples, each one is a $n$ D vector, and $K$ cluster centroids.

**Initialize**:  
Randomly choose $k$ cluster centroids, $\mu_1$, $\mu_2$, ... $\mu_k$

**Repeat**:   
1. Assign points to cluster centroids  
    for $i$ = 1 to $m$:  
        calculate $c^{(i)}$  := index (from 1 to K) of cluster centroid closet to $x^{(i)}$  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081447297.png)

2. Move cluster centroids
   for $k$ = 1 to $K$:  
        $\mu_k$ := average (mean) of points assigned to cluster $k$

    If the number of points assigned to the $i$-th is zero, then $K$ should be $K-1$ or give this cluster a random centroids.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081450591.png)

**Application**:  
T-shirt sizing (data does not lie in well-separated groups or clusters)


## Optimization objective

K-Means also has a cost function called **distortion function**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081515509.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081522793.png)

The first step minimize the $x^{(i)}  - \mu_{c^{(i)}}$ part of cost function $J$ by choose the most closed centroid.

The second step moves the centroid so minimize the cost function $J$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081520257.png)


## Initializing K-means

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081542248.png)

**Random Initialization**

Choose $K$ < $m$

Randomly pick $K$ training examples as $\mu_1$, $\mu_2$, ... $\mu_k$

**Local optima**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081559776.png)

run multiple times, pick set of clusters with the smallest $J$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081605275.png)

## Choosing the number of clusters 

**Elbow method**

Not very good

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081643206.png)

Evaluate K-means based on how well it performs on that later purpose

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081646393.png)

Another example: image compression

# Quiz: Clustering

1. Which of these best describes unsupervised learning? 

A form of machine learning that finds patterns without using a cost function.

**A form of machine learning that finds patterns using unlabeled data (x). 
**
A form of machine learning that finds patterns using labeled data (x, y) 

A form of machine learning that finds patterns in data using only labels (y) but without any inputs (x). 


2. Which of these statements are true about K-means? Check all that apply.

The number of cluster centroids $¦Ì_k$ is equal to the number of examples.

**The number of cluster assignment variables $c^{(i)}$ is equal to the number of training examples.**

**If each example x is a vector of 5 numbers, then each cluster centroid $¦Ì_k$? is also going to be a vector of 5 numbers.**

**If you are running K-means with $K=3$ clusters, then each $c^{(i)}$ should be 1, 2, or 3.**


3. You run K-means 100 times with different initializations. How should you pick from the 100 resulting solutions?

Pick the last one (i.e., the 100th random initialization) because K-means always improves over time

Pick randomly -- that was the point of random initialization.

**Pick the one with the lowest cost $J$**

Average all 100 solutions together. 


4. You run K-means and compute the value of the cost function $J(c^{(1)},¡­,c^{(m)}, ¦Ì_1, ¡­, ¦Ì_K)$ after each iteration. Which of these statements should be true? 

Because K-means tries to maximize cost, the cost is always greater than or equal to the cost in the previous iteration.

There is no cost function for the K-means algorithm.

**The cost will either decrease or stay the same after each iteration.**

The cost can be greater or smaller than the cost in the previous iteration, but it decreases in the long run.



5. In K-means, the elbow method is a method to 

Choose the best random initialization

Choose the best number of samples in the dataset

Choose the maximum number of examples for each cluster

**Choose the number of clusters K**




# Anomaly detection

How do you look at the data set and find unusual or anomalous things in it. This turns out to be another, one of the most commercially important applications of unsupervised learning.


