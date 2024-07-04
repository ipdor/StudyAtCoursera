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

# Cost function for logistic regression

## Cost function for logistic regression

MSE(Mean Square Error) funciton is not suitable for logistic regression.

> This becomes it's a non-convex cost function which is not convex.
> 
> What this means is that if you were to try to use gradient descent. There are lots of local minima that you can get sucking. 

<br>

In linear regression, $J(\vec{w},b) = \frac{1}{m} \sum_{i=1}^m [\frac{1}{2} (f_{\vec{w},b}(\vec{x}^{(i)}) - y^{(i)})^2]$.  We say **Loss Fuction** $L()$ as follow:   
$$L(f_{\vec{w},b}(\vec{x}^{(i)}) , y^{(i)}) = [\frac{1}{2} (f_{\vec{w},b}(\vec{x}^{(i)}) - y^{(i)})^2]$$

In classification, we denote cost function:  
$$J(\vec{w},b) = \frac{1}{m} \sum_{i=1}^m \: \textbf{L()} = \frac{1}{m} \sum_{i=1}^m \: \boldsymbol{L(f_{\vec{w},b}(\vec{x}^{(i)}), y^{(i)})}$$

Use this logistic Loss Fuction:  

$$
\begin{equation}
  loss(f_{\mathbf{w},b}(\mathbf{x}^{(i)}), y^{(i)}) = \begin{cases}
    - \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) & \text{if $y^{(i)}=1$}\\
    - \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) & \text{if $y^{(i)}=0$}
  \end{cases}
\end{equation}
$$

Here is the logistic **Cost Function**:  
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310120953885.png)


>**Definition Note:**   In this course, these definitions are used:  
**Loss** is a measure of the difference of a single example to its target value while the  
**Cost** is a measure of the losses over the training set


Why it works when y=1?  
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310120902761.png)

when y=0?  
![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310120844714.png)




## Simplified Cost Function for Logistic Regression

The loss function can be rewritten to be easier to implement.

$$
\begin{align}
loss(f_{\mathbf{w},b}(\mathbf{x}^{(i)}), y^{(i)}) = -y^{(i)} \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - y^{(i)}\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right )
\end{align}
$$

when $y^{(i)} = 0$, the left-hand term is eliminated:

$$
\begin{align}
loss(f_{\mathbf{w},b}(\mathbf{x}^{(i)}), 0) &= (-(0) \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - 0\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) \\
&= -\log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right)
\end{align}
$$

and when $y^{(i)} = 1$, the right-hand term is eliminated:

$$
\begin{align}
  loss(f_{\mathbf{w},b}(\mathbf{x}^{(i)}), 1) &=  (-(1) \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - 1\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right)\\
  &=  -\log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right)
\end{align}
$$

Recall the cost function for classification:

$$J(\vec{w},b) = \frac{1}{m} \sum_{i=1}^m \: \textbf{L()} = \frac{1}{m} \sum_{i=1}^m \: \boldsymbol{L(f_{\vec{w},b}(\vec{x}^{(i)}), y^{(i)})}$$

So we have:  
$$J(\vec{w},b) = -\frac{1}{m} \sum_{i=1}^m \: \boldsymbol{\left[y^{(i)} \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) + \left( 1 - y^{(i)}\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right )\right]} $$

This idea is from maximum likelihood estimation, which is an idea from statistics on how to efficiently find parameters for different models. 


# Practice quiz: Cost function for logistic regression

1. In this lecture series, "cost" and "loss" have distinct meanings. Which one applies to a single training example?


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310121603550.png)

**Loss**

Cost 

Both Loss and Cost

Neither Loss nor Cost 

2. For the simplified loss function, if the label $y^{(i)}=0$, then what does this expression simplify to?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310121604844.png)


$-log(1-f_{w,b}?(x^{(i)})) - log(1-f_{w,b}?(x^{(i)}))$

$log(1-f_{w,b}?(x^{(i)})) + log(1-f_{w,b}?(x^{(i)}))$

$\boldsymbol{-log(1-f_{w,b}?(x^{(i)}))}$

$log(f_{w,b}?(x^{(i)}))$

# Gradient descent for logistic regression

## Gradient Descent Implementation

How to find the good $\vec{w}, b$

The gradient descent algorithm is similar:

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310121624393.png)

But it is not the same as the gradient descent algorithm for linear regression, because $f_{\vec{w},b}?(\vec{x}^{(i)})$ is different:

Linear regression:   
$$ f_{\vec{w},b}?(\vec{x}) = \vec{w} \cdot \vec{x} + b$$

Logistic regression:   
$$ f_{\vec{w},b}?(\vec{x}) = \frac{1}{1 + e^{-(\vec{w} \cdot \vec{x} + b)}}$$

Same concepts:  
* Monitor gradient descent (learning curve)
* Vectorized implementation
* Feature scaling

# Practice quiz: Gradient descent for logistic regression

Which of the following two statements is a more accurate statement about gradient descent for logistic regression?

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310121740324.png)

The update steps are identical to the update steps for linear regression.

The update steps look like the update steps for linear regression, but the definition of $f_{\vec{w},b}?(\vec{x})$ is different.


> Select this text to see the answer:  
> <font style=color:rgba(0,0,0,0)>For logistic regression, $f_{\vec{w},b}?(\vec{x})$ is the sigmoid function instead of a straight line.</font> 

# The problem of overfitting

## The problem of overfitting

* The left example is **underfit** which has **high bias** (it's just not even able to fit the training set that well).
* The example on the center is pretty well, **generalize well**, which means to make good predictions even on brand new examples that it has never seen before. 
* The right one is **overfit** and has **high variance**. It has fit the data almost too well so that it does not look like this model will generalize to new examples.




![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310131226608.png)



In the right, having all these higher-order polynomial features allows the algorithm to choose this really over the complex decision boundary.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310131232484.png)

### Quiz
Our goal when creating a model is to be able to use the model to predict outcomes correctly for **new examples**. A model which does this is said to **generalize** well. 

When a model fits the training data well but does not work well with new examples that are not in the training set, this is an example of:

None of the above

**Overfitting (high variance)**

Underfitting (high bias) 

A model that generalizes well (neither high variance nor high bias) 
Correct

> This is when the model does not generalize well to new examples.


## Addressing overfitting

1. Collecting more data

If you're able to get more data, that is more training examples on features, then with the larger training set, the learning algorithm will learn to fit a function that is less wiggly. 

2. Select features 

A great number of features needs more data.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310131934977.png)

3. Regularization

Reduce the weight of parameters (usually $\vec{w}$)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202310131940944.png)



## Cost function with regularization

When computing the cost function, taking $w_j$ into accounts prevents it from getting large, and causing overfit(Usually, we don't regularize the parameter $b$.).

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/20231015133623.png)


Solution:  
Add a new item, **regularization term** $\boldsymbol{\frac{\lambda}{2m} \sum\limits_{j=1}^{n}w^2_j}$, to cost function.

Here $\lambda > 0$ and $\lambda$ called lambda or **regularization parameter**

$$J(\vec{w}, b) = \frac{1}{2m} \sum\limits_{i = 1}^{m} (f_{\vec{w},b}(\vec{x}^{(i)}) - y^{(i)})^2 \boldsymbol{+ \frac{\lambda}{2m} \sum\limits_{j=1}^{n}w^2_j}$$

This new cost function trades off **two goals**:  
1. Trying to minimize this first term encourages the algorithm to fit the training data well by minimizing the squared differences of the predictions and
the actual values. 
2. And try to minimize the second term. The algorithm also tries to keep the parameters $w_j$ small, which will tend to reduce overfitting. 

The **value of lambda** specifies the relative importance or the relative trade off or how you balance between these two goals. 
* When $w_j \approx 0$, cost function $J(\vec{w}, b)$ is almost the original version: it only fit data but may overfit.
* When $w_j \approx \infty$, cost function $J(\vec{w}, b)$ almost only have the second term, which means $w_j$ is very small and don't fit data. $f_{\vec{w},b}(\vec{x}) \approx b$


## Regularized linear regression


The **equation for the cost function regularized linear regression** is:
$$J(\mathbf{w},b) = \frac{1}{2m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})^2  + \frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2 \tag{1}$$ 
where:
$$ f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = \mathbf{w} \cdot \mathbf{x}^{(i)} + b  \tag{2} $$ 

Including <span style="color:blue">
    $\frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2$ </span> this term encourages gradient descent to minimize the size of the parameters. Note, in this example, the parameter $b$ is not regularized. This is standard practice.

### Computing the Gradient with regularization (both linear/logistic)
The gradient calculation for both linear and logistic regression are nearly identical, differing only in computation of $f_{\mathbf{w}b}$.
$$\begin{align*}
\frac{\partial J(\mathbf{w},b)}{\partial w_j}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})x_{j}^{(i)}  +  \frac{\lambda}{m} w_j \tag{2} \\
\frac{\partial J(\mathbf{w},b)}{\partial b}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)}) \tag{3} 
\end{align*}$$

* m is the number of training examples in the data set      
* $f_{\mathbf{w},b}(x^{(i)})$ is the model's prediction, while $y^{(i)}$ is the target

      
* For a  <span style="color:blue"> **linear** </span> regression model  
    $f_{\mathbf{w},b}(x) = \mathbf{w} \cdot \mathbf{x} + b$  
* For a <span style="color:blue"> **logistic** </span> regression model  
    $z = \mathbf{w} \cdot \mathbf{x} + b$  
    $f_{\mathbf{w},b}(x) = g(z)$  
    where $g(z)$ is the sigmoid function:  
    $g(z) = \frac{1}{1+e^{-z}}$   
    
The term which adds regularization is  the <span style="color:blue"> $\frac{\lambda}{m}w_j$ </span>.

## Regularized logistic regression

For regularized **logistic** regression, the cost function is of the form
$$J(\mathbf{w},b) = \frac{1}{m}  \sum_{i=0}^{m-1} \left[ -y^{(i)} \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - y^{(i)}\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) \right] + \frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2 \tag{3}$$
where:
$$ f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = sigmoid(\mathbf{w} \cdot \mathbf{x}^{(i)} + b)  \tag{4} $$ 

Including <span style="color:blue">
    $\frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2$ </span> this term encourages gradient descent to minimize the size of the parameters. Note, in this example, the parameter $b$ is not regularized. This is standard practice. 



### Computing the Gradient with regularization (both linear/logistic)
The gradient calculation for both linear and logistic regression are nearly identical, differing only in computation of $f_{\mathbf{w}b}$.
$$\begin{align*}
\frac{\partial J(\mathbf{w},b)}{\partial w_j}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})x_{j}^{(i)}  +  \frac{\lambda}{m} w_j \tag{2} \\
\frac{\partial J(\mathbf{w},b)}{\partial b}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)}) \tag{3} 
\end{align*}$$

* m is the number of training examples in the data set      
* $f_{\mathbf{w},b}(x^{(i)})$ is the model's prediction, while $y^{(i)}$ is the target

      
* For a  <span style="color:blue"> **linear** </span> regression model  
    $f_{\mathbf{w},b}(x) = \mathbf{w} \cdot \mathbf{x} + b$  
* For a <span style="color:blue"> **logistic** </span> regression model  
    $z = \mathbf{w} \cdot \mathbf{x} + b$  
    $f_{\mathbf{w},b}(x) = g(z)$  
    where $g(z)$ is the sigmoid function:  
    $g(z) = \frac{1}{1+e^{-z}}$   
    
The term which adds regularization is  the <span style="color:blue"> $\frac{\lambda}{m}w_j$ </span>.