---
title: Îâ¶÷´ïML:Week3
date: 2023-10-10
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# Classification with logistic regression

## Motivations

When predicting a small handful of possible values instead of any number in a infinite range of numbers, **classification is better** than regression.


**Binary classification** has only two types of categories/classes:  

* Positive/True/Yes/1

* Negative/False/NO/0


Example:  
Is a tumor malignant? Decide malignant or not from a tumor's size.

Solution:  
**logistic regression**(it is a classification algorithm, not regression)



### Quiz  
Which of the following is an example of a classification task?

* Estimate the weight of a cat based on its height.

* Decide if an animal is a cat or not a cat.


> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>"Decide if an animal is a cat or not a cat" is correct:
> 
> This is an example of binary classification where there are two possible classes (True/False or Yes/No or 1/0).</font> 


## Logistic regression

**Logistic function** or sigmoid funciton: $\frac{1}{1+e^{-z}}, x \in (-\infty, \infty), y \in [0, 1]$

* when $x = 0$, $y = 0.5$   
* when $x = \infty$, $y$ is about 1  
* when $x = -\infty$, $y$ is close to 0    

Finally, take $z = \vec{w} \cdot \vec{x} + b$ as the variable of $g(z)$, which maps all input values to values between 0 and 1..

So we get $g(z) = g(\vec{w} \cdot \vec{x} + b) = \frac{1}{1+e^{-(\vec{w} \cdot \vec{x} + b)}}$

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310111613862.png)


### Quiz

Recall the sigmoid function is $g(z)=\frac{1}{1+e^{?z}}$

If z is a large negative number then:

$g(z)$ is near zero

$g(z)$ is near negative  one (-1) 


> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>Say z = ?100. $e^{?z}$ is then $e^{100}$, a really big positive number. So, $g(z)=\frac{1}{1+a big positive number}$? or about 0</font> 


## Decision boundary

when $g(f_{w,b}(x)) = 0.5$, we call it "**Decision boundary**".

When $z=0$, we have $g(z) =0.5$, so:
$$f_{w,b}(x) = 0$$

$$\equiv wx + b = 0$$


For linear function $w_1x_1 + w_2x_2 + b$, when w = [1, 1], b = -3, we get decision boundary $x_1 + x_2 -3 = 0$, $x_1 + x_2 = 3$

In this case:  
$x_1 + x_2 > 3$ means $y = 1$;  
$x_1 + x_2 < 3$ means $y = 0$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310111830546.png)

For non-linear function $w_1x_1^2 + w_2x_2^2 + b$, when w = [1, 1], b = -1, decision boundary is $x_1^2 + x_2^2 = 1$. 

$x_1^2 + x_2^2 > 1$ means $y = 1$;  
$x_1^2 + x_2^2 < 1$ means $y = 0$.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310111831036.png)


### Quiz

Let¡¯s say you are creating a tumor detection algorithm. Your algorithm will be used to flag potential tumors for future inspection by a specialist. What value should you use for a threshold?

High, say a threshold of 0.9?

Low, say a threshold of 0.2?

> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>Low: You would not want to miss a potential tumor, so you will want a low threshold. A specialist will review the output of the algorithm which reduces the possibility of a ¡®false positive¡¯. The key point of this question is to note that the threshold value does not need to be 0.5.</font> 


