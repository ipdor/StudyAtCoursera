
---
title: Îâ¶÷´ïUnsupervised  learning:Week1  
date: 2024-06-23  
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]  
---
# Welcome to the course!

## Syllabus:
1. Unsupervised Learning: Both the following techniques are being widely used now.   
    * Clustering  
    * Anomaly detection  
2. Recommender Systems:  Received little attention attention academia, but it is important.  
3. Reinforcement Learning: Performs well in many video games; A new frontier.  


# Clustering

## What is clustering?

Unsupervised learning:  
Useing algorithms to find some interesting structure about this data which has no label $y$.

Clustering algorithm:  
look at the dataset and try to see if it can be grouped into clusters, meaning groups of points that are similar to each other. 

Application: Grouping similar news, market segmentation, 
DNA analysis.

One of the clustering algorithms is the K-means algorithm.

## K-means intuition

Do 2 things:  
1. assign points to one of cluster centroids(choose the most closed cluster centroids for each point; the cluster centroids at first round are randomly selected);  
2. move cluster centroids (to the means of all points that was assigned to it).

Repeat the two steps until there is no further
changes to either the assignment to point to the centroids or the location of the cluster centroids. 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202401151134811.png)


## K-means algorithm

Let's say we have $m$ examples, each one is a $n$D vector, and $K$ cluster centroids.

**Initialize**:  
Randomly choose $k$ cluster centroids, $\mu_1$, $\mu_2$, ... $\mu_k$

**Repeat**:   
1. Assign points to cluster centroids  
    for $i$ = 1 to $m$:  
        calculate $c^{(i)}$  := index (from 1 to K) of the cluster centroid closed to $x^{(i)}$  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081447297.png)

2. Move cluster centroids
   for $k$ = 1 to $K$:  
        $\mu_k$ := average (mean) of points assigned to cluster $k$

    If the number of points assigned to the $i$-th is zero, then just eliminate the $i$-th cluster centroid. We will only have $K-1$ clusters; an alternative is to randomly choose a new point as the cluster centroid.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081450591.png)

**Application**:  
T-shirt sizing (data does not lie in well-separated groups or clusters)


## Optimization objective

K-Means also has a cost function called **distortion function**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081515509.png)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081522793.png)

And it turns out that what the K means algorithm is doing is trying to find assignments of points of clusters centroid as well as find locations of clusters centroid that minimizes the squared distance. 

$J(c^{(1)}, c^{(2)}, ... c^{(m)}, \mu_1, \mu_2, ...... \mu_K)$

The first step minimizes the $c^{(1)}, c^{(2)}, ... c^{(m)}$ part of cost function $J$ by choose the most closed centroid, while keeps $\mu_1, \mu_2, ...... \mu_K$ fix.

The second step moves the centroid so minimize the cost function $J$, which means reducing $\mu_1, \mu_2, ...... \mu_K$ and keeping $c^{(1)}, c^{(2)}, ... c^{(m)}$ the same.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081520257.png)


So the fact that the K-means algorithm is optimizing a cost function $J$ means that **it is guaranteed to converge, that is on every single iteration**.
The distortion cost function should go down or stay the same, but if it ever fails to go down or stay the same, in the worst case, if it ever goes up. That means there's a bug in the code.


## Initializing K-means

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081542248.png)

**Random Initialization**

Choose $K$ < $m$

> Why don't choose $K$ > m?

Randomly pick $K$ training examples as $\mu_1$, $\mu_2$, ... $\mu_k$

**Local optima**

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081559776.png)

Sometimes, we can get results like the bottom two, not as good as the top one. It is due to local optima.

Solution: run multiple times, pick set of clusters with the smallest $J$. (in the picture abrove, the blue one and the red one are farther from its points, which contributes to a larger $J$)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081605275.png)

## Choosing the number of clusters 

**Elbow method**

Not very good, sometimes can not find a $K$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202402081643206.png)

Evaluate K-means based on how well it performs on that later purpose.

After tried three and five clusters, we should trade off between more accurate results and higher cost.

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

Anomaly detection is about How to look at the data set and find unusual or anomalous things in it. It's another one of the most commercially important applications of unsupervised learning.


Application:
* Given aircraft engines' performance dataset $\left\{x^{(1)}, x^{(2)}, ... x^{(m)}\right\}$, decide whether a new engine is suspicious or not.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623165237.png)

# Gaussian (normal) distribution

Use normal distribution to calculate the probability.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623170121.png)

# Anomaly detection algorithm

$X = \left\{x^{(1)}, x^{(2)}, ... x^{(m)}\right\}$

To compute $p(x)$, we need to calculate $p(x^{(i)})$

$$p(x)= p(x^{(1)}) * p(x^{(2)}) * ... * p(x^{(m)})$$

For $x^{(i)}$, it is in normal distribution $(\mu_i,\sigma_i)$

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623172322.png)

# Developing and evaluating an anomaly detection system

Having a way to evaluate the performance of your algorighm can be very helpful. In practice, we can use a small set of **anomaly data** in the **cross-validation and/or test sets** to achieve that.

> What if the number of anomaly data is quite limited?

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623183107.png)

For example:   
* Dividing data into **training set, cross validation set and test set**.  
* Predict on CV/test set, evaluate performance, change $\epsilon$ and get the best $\epsilon$ value.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623183817.png)


# Anomaly detection vs. supervised learning

* Anomaly detection focus on normal features: if a data does not seem like normal, it will be detected. So it is often used in seneriaos where the number of kind of anomalies is infinite.   
* Supervised learning compares new data and the data it has ever seen, tell whether they look like.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240623184906.png)

# Choosing what features to use

Two techniques to build a better system:  
* Make the distribution more 'Gaussian'
  * for example, if $x_1$ does not look good, try $x_1^2$, $log(x_1+2)$, $x_1^{\frac{1}{3}}$ and so on.  
* Error analysis, look at the example which has $p(x)$ comparable to normal examples. Maybe that will inspire the creation of new features that would allow the algorithm to spot.
  * for instance, a mulfunctioned computer with high cpu usage and low network traffic is falsely recongnized as normal. High cpu usage and low network traffic is a feature of error, so add $\frac{cpu\space usage}{network\space traffic}$, $\frac{(cpu\space usage)^2}{network\space traffic}$ to feature set in addition to existing cpu usage and network traffic feature.
  * analyze why an example is considered as normal -> user do have small number of transanctions(an existing feature) but also have anormaly typing speed -> add typing speed as new feature.


# Quiz

### 1. You are building a system to detect if computers in a data center are malfunctioning. You have 10,000 data points of computers functioning well, and no data from computers malfunctioning. What type of algorithm should you use?

**Anomaly detection**

Supervised learning 


Creating an anomaly detection model does not require labeled data.

#### 2. You are building a system to detect if computers in a data center are malfunctioning. You have 10,000 data points of computers functioning well, and 10,000 data points of computers malfunctioning. What type of algorithm should you use?

Anomaly detection

**Supervised learning** 


You have a sufficient number of anomalous examples to build a supervised learning model.

#### 3. Say you have 5,000 examples of normal airplane engines, and 15 examples of anomalous engines. How would you use the 15 examples of anomalous engines to evaluate your anomaly detection algorithm? 

Because you have data of both normal and anomalous engines, don¡¯t use anomaly detection. Use supervised learning instead.

Use it during training by fitting one Gaussian model to the normal engines, and a different Gaussian model to the anomalous engines. 

**Put the data of anomalous engines (together with some normal engines) in the cross-validation and/or test sets to measure if the learned model can correctly detect anomalous engines.**

You cannot evaluate an anomaly detection algorithm because it is an unsupervised learning algorithm. 


Anomalous examples are used to evaluate rather than train the model.

#### 4. Anomaly detection flags a new input xx as an anomaly if p(x)<?. If we reduce the value of ?, what happens?

The algorithm is more likely to classify new examples as an anomaly.

**The algorithm is less likely to classify new examples as an anomaly.**

The algorithm is more likely to classify some examples as an anomaly, and less likely to classify some examples as an anomaly. It depends on the example x.

The algorithm will automatically choose parameters ¦Ì¦Ì and ¦Ò¦Ò to decrease p(x) and compensate. 


When ?? is reduced, the probability of an event being classified as an anomaly is reduced.

#### 5. You are monitoring the temperature and vibration intensity on newly manufactured aircraft engines. You have measured 100 engines and fit the Gaussian model described in the video lectures to the data. The 100 examples and the resulting distributions are shown in the figure below. 

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/0b4675ef-89e7-487f-a8a8-3e089a81a817image2.png)


The measurements on the latest engine you are testing have a temperature of 17.5 and a vibration intensity of 48. These are shown in magenta on the figure below. What is the probability of an engine having these two measurements?


17.5 + 48 = 65.5 

17.5 * 48 = 840

**0.0738 * 0.02288 = 0.00169**

0.0738 + 0.02288 = 0.0966


According to the model described in lecture, p(A, B) = p(A) * p(B). .


