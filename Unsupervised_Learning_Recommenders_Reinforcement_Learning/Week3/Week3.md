---
title: Œ‚∂˜¥ÔUnsupervised  learning:Week3
date: 2024-06-26  
tags: [øŒ≥Ã± º«, Machine Learning]  
---



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

### 4. Given the rewards and actions below, compute the return from state 3 with a discount factor of ¶√=0.25¶√=0.25.

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ab8c69e8-08f0-4ad4-a4f6-cb67e091a5fbimage2.png?expiry=1719792000000&hmac=Mvml61DChRW7ELnxItEtlzLsUf7cu36kUGPOCfvdQuw)


0.39

0 

**6.25**

25 

>Correct. If starting from state 3, the rewards are in states 3, 2, and 1. The return is 0+(0.25)°¡0+(0.25)2°¡100=6.250+(0.25)°¡0+(0.25)2°¡100=6.25.




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

### 2. You are controlling a robot that has 3 actions: °˚ (left), °˙ (right) and STOP. From a given state s, you have computed Q(s, °˚) = -10, Q(s, °˙) = -20, Q(s, STOP) = 0.

What is the optimal action to take in state s?

**STOP**

°˚ (left)

°˙ (right)

Impossible to tell

> Correct. Yes, because this has the greatest value.

### 3. For this problem, ¶√=0.25¶√=0.25. The diagram below shows the return and the optimal action from each state. Please compute Q(5, °˚). 

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3cbf737d-d132-4a1f-8e14-8865ff330e28image3.png?expiry=1719792000000&hmac=06ejceKnpFKU_1ohSmelcvQb6UB7hQL7RAw2bELmlec)

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

> Correct. That°Øs right!

### 2. In the learning algorithm described in the videos, we repeatedly create an artificial training set to which we apply supervised learning where the input x=(s,a)x=(s,a) and the target, constructed using Bellman°Øs equations, is y = _____? 

y=R(s)y=R(s)

y=R(s°‰)y=R(s°‰) where s°‰s°‰ is the state you get to after taking action aa in state ss 

y=max?a°‰Q(s°‰,a°‰)y=a°‰max?Q(s°‰,a°‰) where s°‰s°‰ is the state you get to after taking action aa in state ss

**y=R(s)+¶√max?a°‰Q(s°‰,a°‰) where s°‰ is the state you get to after taking action a in state s**


### 3. You have reached the final practice quiz of this class! What does that mean? (Please check all the answers, because all of them are correct!)

**The DeepLearning.AI and Stanford Online teams would like to give you a round of applause!**


**Andrew sends his heartfelt congratulations to you!**


**What an accomplishment -- you made it!** 


**You deserve to celebrate!**

