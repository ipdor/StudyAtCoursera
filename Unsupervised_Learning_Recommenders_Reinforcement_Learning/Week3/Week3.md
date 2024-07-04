---
title: 吴恩达Unsupervised  learning:Week3
date: 2024-06-26  
tags: [课程笔记, Machine Learning]  
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

### 4. Given the rewards and actions below, compute the return from state 3 with a discount factor of γ=0.25γ=0.25.

<!--![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ab8c69e8-08f0-4ad4-a4f6-cb67e091a5fbimage2.png?expiry=1719792000000&hmac=Mvml61DChRW7ELnxItEtlzLsUf7cu36kUGPOCfvdQuw)-->

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211820.png)


0.39

0 

**6.25**

25 

>Correct. If starting from state 3, the rewards are in states 3, 2, and 1. The return is 0+(0.25)×0+(0.25)2×100=6.250+(0.25)×0+(0.25)2×100=6.25.

# State-action value function definition

The **state action value function** Q is a function of a state you might be in as well as the action you might choose to take in that state and Q of s,a.   
It's also called Q function, $Q^*$, optimal Q function.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701214924.png)

Just take action A and state S can then behave optimally after that.


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701215612.png)

In every state $s$, the action $a$ that gives $max_a Q(s,a)$ is the best action. For this $a$, the $Q(s,a)$ is the best return.

Therefore:  
* **Policy** $\pi$ finds such $a$ with $max_a Q(s,a)$  
* -> Find the best **action** $a$ for every state
* -> get the best **return** in every step.  

# State-action value function example

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701220613.png)

# Lab: State-action value function (optional lab)

see State-action value function example.ipynb

# Bellman Equation

$s$: current state  
$a$: current action  
$s'$: state you get to after taking action $a$  
$a'$: action that you take in state $s'$

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701221312.png)

Bellman Equation composes **two parts**:  
* the reward $R(s)$ you get right away.  
* the discount $\gamma$ multiplies the best return in the next state.

begin state $s_1$ -> state $s_2$ -> state $s_2$ -> .... -> terminal state $s_n$

For best **return**:  
the best action $a_1$ for state $s_{n-1}$  
-> the best action $a_2$ for state $s_{n-2}$  
-> ....   
-> the best action $a_{n-1}$ for state $s_1$


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701221430.png)


# Random (stochastic) environment (Optional)

In a stochastic environment, sometimes programs may fail. So what we're interested in is maximizing the **average value** of the sum of discounted rewards.

$$Q(s,a) = R(s) + \gamma E[max_{a'}Q(s', a')]$$


# Quiz: State-action value function


### 1. Which of the following accurately describes the state-action value function Q(s,a)? 

**It is the return if you start from state s, take action a (once), then behave optimally after that.**

It is the return if you start from state s and repeatedly take action a.

It is the return if you start from state s and behave optimally.

It is the immediate reward if you start from state s and take action a (once).


> Correct. Great!

### 2. You are controlling a robot that has 3 actions: ← (left), → (right) and STOP. From a given state s, you have computed Q(s, ←) = -10, Q(s, →) = -20, Q(s, STOP) = 0.

What is the optimal action to take in state s?

**STOP**

← (left)

→ (right)

Impossible to tell

> Correct. Yes, because this has the greatest value.

### 3. For this problem, γ=0.25γ=0.25. The diagram below shows the return and the optimal action from each state. Please compute Q(5, ←). 

<!--![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3cbf737d-d132-4a1f-8e14-8865ff330e28image3.png?expiry=1719792000000&hmac=06ejceKnpFKU_1ohSmelcvQb6UB7hQL7RAw2bELmlec)-->

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240701211910.png)

**0.625**

0.391 

1.25

2.5

> Correct. Yes, we get 0 reward in state 5. Then 0?0.25 discounted reward in state 4, since we moved left for our action. Now we behave optimally starting from state 4 onwards. So, we move right to state 5 from state 4 and receive 0?0.252 discounted reward. Finally, we move right in state 5 to state 6 to receive a discounted reward of 40?0.25^3. Adding these together we get 0.625.

# Example of continuous state space applications

So any continuous state reinforcement learning problem or a continuous state Markov decision process, continuously MTP. The state of the problem isn't just one of a small number of possible discrete values,
like a number from 1-6. Instead, **it's a vector of numbers, any of which could take any of a large number of values**.

## Example
* Truck: 
  * the state is a vector like $[x, y, \theta, \dot{x}, \dot{y}, \dot{\theta}]$, which denotes position in x, position in y, orientation, velocity in x, velocity in y, how quickly is the angle of the car changing.  
* Helicopter:  
  * the state is a vector like $[x, y, z, \phi, \theta, \omega, \dot{x}, \dot{y}, \dot{z}, \dot{\phi}, \dot{\theta}, \dot{\omega}]$. Here $\phi, \theta, \omega$ represent the angele of the helicopter in each dimension, and $\dot{\phi}, \dot{\theta}, \dot{\omega}$ respectively is the speed in each dimension.


# Lunar lander

## State and Action

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703212219.png)

There are four actions in every step.

State $s$ consists of 8 numbers $[x, y, \dot{x}, \dot{y}, \theta, \dot{\theta}, l, r]$. $l, r$ means where the left leg or the right leg is grounded.

## Rewards

After every step, a reward is granted. The total reward of an episode is the sum of the rewards for all the steps within that episode.

For each step, the reward:
- is increased/decreased the closer/further the lander is to the landing pad.
- is increased/decreased the slower/faster the lander is moving.
- is decreased the more the lander is tilted (angle not horizontal).
- is increased by 10 points for each leg that is in contact with the ground.
- is decreased by 0.03 points each frame a side engine is firing.
- is decreased by 0.3 points each frame the main engine is firing.

The episode receives an additional reward of -100 or +100 points for crashing or landing safely respectively.

## Goal

Learn a policy $\pi$ that given $s = [x, y, \dot{x}, \dot{y}, \theta, \dot{\theta}, l, r]$,    
pick action a = $\pi(s)$ so as to maximize the return.

$\gamma = 0.985$

# Learning the state-value function

## Basic idea

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703214416.png)

The key idea is that we're going to train a neural network to compute or to approximate the **state action value(overall return gaining by taking action $a$ at the state $s$)** function Q of s, a and that in turn will let us pick good actions. The heart of the learning algorithm is we're going to **train a neural network that inputs the current state $s$ and the current action $a$ and computes or approximates Q of s, a**. 

After that, we can compute the value of $Q(s, a)$ for all four actions, and pick the action $a$ that maximizes $Q(s, a)$.

## Ballman equation

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703220452.png)

According to the Ballman equation, we can get a tuple $(s, a, R(s), s')$ in every step. Then it can be used to compute a tuple $x=(s,a)$, $y=R(s)+\gamma MAX_{a'}Q(s',a')$.

Such pairs $(x, y)$ become the dateset of our neural network.

* Input: $x$  
* Label: $y = R(s)+\gamma MAX_{a'}Q(s',a')$  
* Prediction: y_pred = $Q(s,a)$
* Loss function: $l = \frac{1}{2N}\sum_{i=1}^N\left[Q(s,a) - R(s)+\gamma MAX_{a'}Q(s',a')\right]^2$

## Deep Q learning Algorithm (DQN)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703224216.png)

We need two neural networks $Q$ and $Q_{new}$ to predict $Q(s, a)$ and $MAX_{a'}Q(s',a')$ function.

1. Initialization all parameters randomly.  
2. Loop, for each round, do:  
   1. Generating tuples $(s, a, R(s), s')$ using $x=(s,a)$, $y=R(s)+\gamma MAX_{a'}Q(s',a')$ 
   2. Training $Q_{new}$ so that $Q_{new} \approx y$.
   3. Updating $Q$ using $Q_{new}$


![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703234912.png)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703234929.png)

> [DQN 算法](https://hrl.boyuai.com/chapter/2/dqn%E7%AE%97%E6%B3%95)

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240703221312.png)

# Algorithm refinement: Improved neural network architecture

To make the algorithm more efficient, we can set the output layer with four units to output four values.

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240704195256.png)


# Algorithm refinement: $\epsilon$-greedy policy

## Exploration vs. Exploitation

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240704200000.png)

> Because of the random initialization, if the neural network somehow initially gets stuck in this mind that some things are bad idea, just by chance, then option 1, it means that it will never try out those actions and discover that maybe is actually a good idea to take that action, like fire the main thrusters sometimes. Under option 2 on every step, we have some small probability of trying out different actions so that the neural network can learn to overcome its own possible preconceptions about what might be a bad idea that turns out not to be the case. 


# Algorithm refinement: Mini-batch and soft updates (optional)

Both techniques can also be used in supervised learning.

## Mini-batch

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240704200734.png)

When data set is very large, the algorithm turns out to be extremely inefficient. To deal with it, we run gradient descent on a random subset of the whole data in every step.  

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240704201115.png)


## Soft update  

![](https://raw.githubusercontent.com/ipdor/Pictures/master/img/20240704201307.png)

Soft update is changing $Q$ a little bit every time. It turns out that using the soft update method causes the reinforcement learning algorithm to converge more reliably. It makes it less likely that the reinforcement learning algorithm will oscillate or divert or have other undesirable properties. 


# The state of reinforcement learning

## Limitations of reinforcement learning
* Much easier to get to work in a simulation than a real robot!  
* Far fewer applications than supervised and unsupervised learning.  
* But ... exciting research direction with potential for future applications.

# Quiz: Continuous state spaces


### 1. The Lunar Lander is a continuous state Markov Decision Process (MDP) because:

The reward contains numbers that are continuous valued

The state-action value Q(s,a)Q(s,a) function outputs continuous valued numbers 

The state has multiple numbers rather than only a single number (such as position in the xx-direction) 

**The state contains numbers such as position and velocity that are continuous valued.**

> Correct. That’s right!

### 2. In the learning algorithm described in the videos, we repeatedly create an artificial training set to which we apply supervised learning where the input x=(s,a)x=(s,a) and the target, constructed using Bellman’s equations, is y = _____? 

y=R(s)y=R(s)

y=R(s′)y=R(s′) where s′s′ is the state you get to after taking action aa in state ss 

y=max?a′Q(s′,a′)y=a′max?Q(s′,a′) where s′s′ is the state you get to after taking action aa in state ss

**y=R(s)+γmax?a′Q(s′,a′) where s′ is the state you get to after taking action a in state s**


### 3. You have reached the final practice quiz of this class! What does that mean? (Please check all the answers, because all of them are correct!)

**The DeepLearning.AI and Stanford Online teams would like to give you a round of applause!**


**Andrew sends his heartfelt congratulations to you!**


**What an accomplishment -- you made it!** 


**You deserve to celebrate!**

