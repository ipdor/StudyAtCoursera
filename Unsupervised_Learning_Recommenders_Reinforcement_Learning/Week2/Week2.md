---
title: Îâ¶÷´ïUnsupervised  learning:Week2
date: 2024-06-24  
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]  
---

# Making recommendations

## Example: Predicting movie ratings

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241124954.png)

Input:  
    * User-rating matrix:  $M(n_m, n_u)$

Transformation:  
    * Matrix $r(n_m, n_u)$ stands for whether a user has rated a movie or not  
    * Rating matrix $y(n_m, n_u)$ (defined only if $r(i,j)$==1)

What the algorithm do is learning from the rates given by users to movies they watched, and predict the rates of unrated movies.

# Using per-item features

We can come up with several features for movies.  
For any user $i$, we can calculate a feature vector $x^{(i)} = (x^{(i)}_1, x^{(i)}_1, ... x^{(i)}_{n_m})$ that represents how likely the movies have these features.  

Then we can get $w^{(i)}, b^{(i)}$, $w^{(i)}$ is the weight of the user's affection for each feature. User $i$'s rate = $w^{(i)} * x^{(i)} + b^{(i)}$

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241341946.png)


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241353871.png)

This approach is very like linear regression.

# Collaborative filtering algorithm

What if we don not have the features? Where do they come from?

Supposing we have parameters $w^(1)$ and $b^(1)$ for the first user before we begin, so we can calculate the features $x^(i)$.

Combining the approach abrove and the method of calculating $w^{(i)}, b^{(i)}$ from $x^(i)$, we have **Collaborative filtering algorithm**, which computes $w^{(i)}, b^{(i)}, x^(i)$ at the same time.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241418770.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241419597.png)



> The algorithm we derived iscalled collaborative filtering,and the name collaborative filteringrefers to the sense thatbecause multiple users haverated the same movie collaboratively,given you a sense of what this movie maybe like,that allows you to guess whatare appropriate features for that movie,and this in turn allows you topredict how other users thathaven't yet rated that same moviemay decide to rate it in the future. 

# Binary labels: favs, likes and clicks

In practice, data is often binary, 1, 0 or '?'. So we need to generalize the algorithm to predict binary labels.

Similar to linear regression, we can have these functions.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241459679.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/202406241458360.png)


# Quiz: Collaborative Filtering


### 1. You have the following table of movie ratings:

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240629114818.png)

Refer to the table above for question 1 and 2. Assume numbering starts at 1 for this quiz, so the rating for Football Forever by Elissa is at (1,1)

What is the value of nu?

**4**


> Correct.This is the number of users. nmnm? is the number of movies/items and is 3 in this table.

### 2. What is the value of r(2,2)

0

> Correct. r(i,j) is a 1 if the movie has a rating and 0 if it does not. In the table above, a question mark indicates there is no rating.

### 3. In which of the following situations will a collaborative filtering system be the most appropriate learning algorithm (compared to linear or logistic regression)?

You subscribe to an online video streaming service, and are not satisfied with their movie suggestions. You download all your viewing for the last 10 years and rate each item. You assign each item a genre. Using your ratings and genre assignment, you learn to predict how you will rate new movies based on the genre.

**You run an online bookstore and collect the ratings of many users. You want to use this to identify what books are "similar" to each other (i.e., if a user likes a certain book, what are other books that they might also like?)**

You manage an online bookstore and you have the book ratings from many users. You want to learn to predict the expected sales volume (number of books sold) as a function of the average rating of a book.

You're an artist and hand-paint portraits for your clients. Each client gets a different portrait (of themselves) and gives you 1-5 star rating feedback, and each client purchases at most 1 portrait. You'd like to predict what rating your next customer will give you.
Correct

> Correct. You can find "similar" books by learning feature values using collaborative filtering.

### 4. For recommender systems with binary labels y, which of these are reasonable ways for defining when y should be 1 for a given user j and item i? (Check all that apply.) 

y is 1 if user j fav/likes/clicks on item i (after being shown the item)

> Correct. fav/likes/clicks on an item shows a user's interest in that item. It also shows that an item is interesting to a user.

y is 1 if user j has not yet been shown item i by the recommendation engine 

y is 1 if user j purchases item i (after being shown the item) 

> Correct. Purchasing an item shows a user's preference for that item. It also shows that an item is preferred by a user.

y is 1 if user j has been shown item i by the recommendation engine 

# Mean normalization


If a user hasn't rated any of a movie, we will get $w=0, b=0$ for him/her. Which means his or her rate $w * x + b$ is unreasonable zero.

So we need to normalize the data.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240624210256.png)

## Mean normalization by row

One way is to normalize the data by subtracting the mean of each row from all values, and add it to the result. So that in this way, we can get a mean value of $w * x + b +\mu=\mu$ for a user who has rated only a few movies or no movie. That is helpful to deal with such cases.

## Mean normalization by column

In this example, only when we have a new movie that no user has rated, this approach would work fine. Here, normalization by row is better.


# TensorFlow implementation of collaborative filtering

The collaborative filtering algorithm and cost function don't neatly fit into old TensorFlow framework(dense layers, model compilers). So we run collaborative filtering algorithm by using TensorFlow's **Auto Diff**, which calculate derivates automatically. 

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240624214214.png)


# Finding related items

Find item $k$ with $x^k$ similar to $x^i$

$$\sum_{l=1}^{n} \left( x_{l}^{k} - x_{l}^{i} \right)^2$$

That is calculating the squared distance between $x^k$ and $x^i$, we denote it as:

$$||x^k - x^i ||^2$$

## Limitations of collaborative filtering algorithm

* Cold start problem: How to
  * rank new items that fews users have rated?
  * show something reasonable to new users who have rated few items?

* Fully exploit side information about items or users:
  * Item: Genre, movie stars, studio, ...
  * User: Demographics(Age, gender, occupation), expressed preferences...



# Quiz: Recommender systems implementation

### 1. Lecture described using ¡®mean normalization¡¯ to do feature scaling of the ratings. What equation below best describes this algorithm?

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240629113335.png)

> This is the mean normalization algorithm described in lecture. This will result in a zero average value on a per-row basis.

### 2. The implementation of collaborative filtering utilized a custom training loop in TensorFlow. Is it true that TensorFlow always requires a custom training loop?

**No: TensorFlow provides simplified training operations for some applications.**

Yes. TensorFlow gains flexibility by providing the user primitive operations they can combine in many ways.
Correct

> Recall in Course 2, you were able to build a neural network using a ¡®model¡¯, ¡®compile¡¯, ¡®fit¡¯, sequence which managed the training for you. A custom training loop was utilized in this situation because training ww, bb, and xx does not fit the standard layer paradigm of TensorFlow's neural network flow. There are alternate solutions such as custom layers, however, it is useful in this course to introduce you to this powerful feature of TensorFlow.

### 3. Once a model is trained, the 'distance' between features vectors gives an indication of how similar items are. 

The squared distance between the two vectors $x^{(k)}$ and $x^{(i)}$ is:

$$distance = ||x^{(k)} - x^{(i)}||^2 = \sum_{l=1}^{n}(x^{(k)} - x^{(i)})^2$$


Using the table below, find the closest item to the movie "Pies, Pies, Pies".


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240629114056.png)


**Pies and You**

Pastries for Supper

> Correct.The distance from ¡®Pies, Pies, Pies¡¯ is 9 + 0 + 0 = 9.

### 4. Which of these is an example of the cold start problem? (Check all that apply.) 

A recommendation system takes so long to train that users get bored and leave. 

A recommendation system is so computationally expensive that it causes your computer CPU to heat up, causing your computer to need to be cooled down and restarted. 

**A recommendation system is unable to give accurate rating predictions for a new user that has rated few products.**

> Correct.A recommendation system uses user feedback to fit the prediction model.

**A recommendation system is unable to give accurate rating predictions for a new product that no users have rated.**

> Correct. A recommendation system uses product feedback to fit the prediction model.


# Collaborative filtering vs Content-based filtering

Collaborative filtering:  
Recommend items to you based on ratigs of users who gave similar ratings as you;  

Content-based filtering:
Recommend items to you based on features of user and item to find good match.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701195356.png)

For user $j$, we compute $V_u^{(j)}$ from user' preference $X_u^{(j)}$ and $V_m^{(i)}$ from movies' features $X_m^{(i)}$.

$X_u^{(j)}$ and $X_m^{(i)}$ may be different, but $V_u^{(j)}$ and $V_m^{(i)}$ have the same size.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/6e527ddc6dc549fea37de7ab2784e9f2.png)

# Deep learning for content-based filtering

The output layers of two neural network must have the same number of units.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701200536.png)

## Find similar items

For movie $i$, we can find a similar movie by finding the $k$ so that $||V_m^{(k)} - V_m^{(i)}||^2$ is the smallest.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701200809.png)

# Recommending from a large catalogue

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701201319.png)

1. Retrieval  
  According to all filter algorithms, generate a large list of possible item.  
1. Ranking  
  Use the list as the input of neural network.

The more items are in the list, the more time costs, and hopefully the better quality is. 

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701201412.png)


# TensorFlow implementation of content-based filtering

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701202213.png)

# Quiz: Content-based filtering


### 1. Vector xuxu? and vector xmxm? must be of the same dimension, where xuxu? is the input features vector for a user (age, gender, etc.) xmxm? is the input features vector for a movie (year, genre, etc.) True or false?

True

**False**

> Correct. These vectors can be different dimensions.

### 2. If we find that two movies, i and k, have vectors vm(i)? and vm(k)? that are similar to each other (i.e., ¨O¨Ovm(i)?vm(k)¨O¨O is small), then which of the following is likely to be true? Pick the best answer. 

A user that has watched one of these two movies has probably watched the other as well. 

We should recommend to users one of these two movies, but not both. 

**The two movies are similar to each other and will be liked by similar users.**

The two movies are very dissimilar.

> Correct. Similar movies generate similar vm?¡¯s.

### 3. Which of the following neural network configurations are valid for a content based filtering application? Please note carefully the dimensions of the neural network indicated in the diagram. Check all the options that apply:

![alt text](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/62d86c86-30aa-41a3-a88b-bad03438f032image3.png?expiry=1719792000000&hmac=kXo8jC4QvfM7W43r8sG6bj8ohVHn-chjly70A15rD5M)

The user and the item networks have different architectures

> Correct. User and item networks can be the same or different sizes.

![alt text](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/62d86c86-30aa-41a3-a88b-bad03438f032image2.png?expiry=1719792000000&hmac=9CSbViZ84Y6BqvSftzygeldBdU_wmefHORBNgq493YA)

The user and item networks have 64 dimensional v_u and v_m vector respectively 

> Correct. Feature vectors can be any size so long as vuvu? and vmvm? are the same size.

![alt text](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/62d86c86-30aa-41a3-a88b-bad03438f032image5.png?expiry=1719792000000&hmac=HL3WuRLnrHawRPs_KGA1bQ0riBABOr6IjExHsMPnbQs)

The user vector v_u is 32 dimensional, and the item vector v_m is 64 dimensional

![alt text](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/62d86c86-30aa-41a3-a88b-bad03438f032image4.png?expiry=1719792000000&hmac=my57LmMOV874-pPJQlRhUy7tt2CH5sX9dki0qR-_jdc)

Both the user and the item networks have the same architecture

> Correct. User and item networks can be the same or different sizes.

### 4. You have built a recommendation system to retrieve musical pieces from a large database of music, and have an algorithm that uses separate retrieval and ranking steps. If you modify the algorithm to add more musical pieces to the retrieved list (i.e., the retrieval step returns more items), which of these are likely to happen? Check all that apply.

**The system¡¯s response time might increase (i.e., users have to wait longer to get recommendations)**

> Correct. A larger retrieval list may take longer to process which mayincrease response time.

The quality of recommendations made to users should stay the same or worsen.

The system¡¯s response time might decrease (i.e., users get recommendations more quickly) 

**The quality of recommendations made to users should stay the same or improve.**

> Correct. A larger retrieval list gives the ranking system more options to choose from which should maintain or improve recommendations. 

### 5. To speed up the response time of your recommendation system, you can pre-compute the vectors v_m for all the items you might recommend. This can be done even before a user logs in to your website and even before you know the xuxu? or vuvu? vector. True/False?

**True**

False 

> Correct. The output of the item/movie neural network, vmvm? is not dependent on the user network when making predictions. Precomputing the results speeds up the prediction process.


# Principal Component Analysis

I didn't take these optional courses.
