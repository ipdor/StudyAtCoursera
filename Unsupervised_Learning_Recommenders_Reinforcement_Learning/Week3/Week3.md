---
title: Îâ¶÷´ïUnsupervised  learning:Week3
date: 2024-06-26  
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]  
---

# What is Reinforcement Learning?

Just telling reinforcement learning algorithms what is good and what is bad, instead of how, they can decide how to achieve a goal.

Application:  
* Controlling robots  
* Factory optimization  
* Financial (stock) trading  
* Playing games (including video games)


# Mars rover example

Taking the ars rover as example, there are **four key elements** in reinforcement learning.

* State $S$  
  * The position of the Mars rover is  
called the **state** in reinforcement learning  
* Action $a$  
  * In every step, it has to take an action.  
* Reward $R(s)$  
  * Reward functions tell the rover what to do.  
* Next State $S'$  
  * After taking action, the rover swiches to another state.

>  To summarize, at every time step, the robot is in some **state**, which I'll call S, and it gets to choose an **action**, and it also enjoys some **rewards**, R of S that it gets from that state. As a result of this action, it to some **new state** S prime. 

# The Return in reinforcement learning

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211132.png)

The **return** is defined as the sum of these rewards but weighted by one additional factor, which is called the **discount factor** ($\gamma$,$0<\gamma<1$) . 

What the discount factor Gamma does is it has the effect of making the reinforcement learning algorithm a little bit impatient. Because of the value of time.


# Making decisions: Policies in reinforcement learning

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211742.png)

The goal of reinforcement learning is to find a policy $\pi$ or $\pi$ of S that tells you what action to take in every state so as to maximize the return. 

# Review of key concepts

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701212301.png)

## Markov decision process (MDP)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701212433.png)

The term Markov in the MDP or Markov decision process refers to that the future only depends on the current state and not on anything that might have occurred prior to getting to the current state. 


# Quiz: Reinforcement learning introduction


### 1. You are using reinforcement learning to control a four legged robot. The position of the robot would be its _____.

action 

**state** 

reward

return 

>Correct. Great! 

### 2. You are controlling a Mars rover. You will be very very happy if it gets to state 1 (significant scientific discovery), slightly happy if it gets to state 2 (small scientific discovery), and unhappy if it gets to state 3 (rover is permanently damaged). To reflect this, choose a reward function so that:

R(1) > R(2) > R(3), where R(1), R(2) and R(3) are positive. 

R(1) < R(2) < R(3), where R(1) and R(2) are negative and R(3) is positive. 

**R(1) > R(2) > R(3), where R(1) and R(2) are positive and R(3) is negative.** 

R(1) > R(2) > R(3), where R(1), R(2) and R(3) are negative. 

>Correct. Good job!

### 3. You are using reinforcement learning to fly a helicopter. Using a discount factor of 0.75, your helicopter starts in some state and receives rewards -100 on the first step, -100 on the second step, and 1000 on the third and final step (where it has reached a terminal state). What is the return?

**-100 - 0.75*100 + 0.75^2*1000** 

-0.75*100 - 0.75^2*100 + 0.75^3*1000 

-0.25*100 - 0.25^2*100 + 0.25^3*1000 

-100 - 0.25*100 + 0.25^2*1000 

>Correct. Awesome!

### 4. Given the rewards and actions below, compute the return from state 3 with a discount factor of ¦Ã=0.25¦Ã=0.25.

<!--![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ab8c69e8-08f0-4ad4-a4f6-cb67e091a5fbimage2.png?expiry=1719792000000&hmac=Mvml61DChRW7ELnxItEtlzLsUf7cu36kUGPOCfvdQuw)-->

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211820.png)


0.39

0 

**6.25**

25 

>Correct. If starting from state 3, the rewards are in states 3, 2, and 1. The return is 0+(0.25)¡Á0+(0.25)2¡Á100=6.250+(0.25)¡Á0+(0.25)2¡Á100=6.25.




# 


#

#


# Quiz: State-action value function


### 1. Which of the following accurately describes the state-action value function Q(s,a)? 

**It is the return if you start from state s, take action a (once), then behave optimally after that.**

It is the return if you start from state s and repeatedly take action a.

It is the return if you start from state s and behave optimally.

It is the immediate reward if you start from state s and take action a (once).


> Correct. Great!

### 2. You are controlling a robot that has 3 actions: ¡û (left), ¡ú (right) and STOP. From a given state s, you have computed Q(s, ¡û) = -10, Q(s, ¡ú) = -20, Q(s, STOP) = 0.

What is the optimal action to take in state s?

**STOP**

¡û (left)

¡ú (right)

Impossible to tell

> Correct. Yes, because this has the greatest value.

### 3. For this problem, ¦Ã=0.25¦Ã=0.25. The diagram below shows the return and the optimal action from each state. Please compute Q(5, ¡û). 

<!--![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3cbf737d-d132-4a1f-8e14-8865ff330e28image3.png?expiry=1719792000000&hmac=06ejceKnpFKU_1ohSmelcvQb6UB7hQL7RAw2bELmlec)-->

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211910.png)

**0.625**

0.391 

1.25

2.5

> Correct. Yes, we get 0 reward in state 5. Then 0?0.25 discounted reward in state 4, since we moved left for our action. Now we behave optimally starting from state 4 onwards. So, we move right to state 5 from state 4 and receive 0?0.252 discounted reward. Finally, we move right in state 5 to state 6 to receive a discounted reward of 40?0.25^3. Adding these together we get 0.625.



# Quiz: Continuous state spaces


### 1. The Lunar Lander is a continuous state Markov Decision Process (MDP) because:

The reward contains numbers that are continuous valued

The state-action value Q(s,a)Q(s,a) function outputs continuous valued numbers 

The state has multiple numbers rather than only a single number (such as position in the xx-direction) 

**The state contains numbers such as position and velocity that are continuous valued.**

> Correct. That¡¯s right!

### 2. In the learning algorithm described in the videos, we repeatedly create an artificial training set to which we apply supervised learning where the input x=(s,a)x=(s,a) and the target, constructed using Bellman¡¯s equations, is y = _____? 

y=R(s)y=R(s)

y=R(s¡ä)y=R(s¡ä) where s¡äs¡ä is the state you get to after taking action aa in state ss 

y=max?a¡äQ(s¡ä,a¡ä)y=a¡ämax?Q(s¡ä,a¡ä) where s¡äs¡ä is the state you get to after taking action aa in state ss

**y=R(s)+¦Ãmax?a¡äQ(s¡ä,a¡ä) where s¡ä is the state you get to after taking action a in state s**


### 3. You have reached the final practice quiz of this class! What does that mean? (Please check all the answers, because all of them are correct!)

**The DeepLearning.AI and Stanford Online teams would like to give you a round of applause!**


**Andrew sends his heartfelt congratulations to you!**


**What an accomplishment -- you made it!** 


**You deserve to celebrate!**

