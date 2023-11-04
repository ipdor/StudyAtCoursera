---
title: "Advanced Learning Algorithms:Week2-Unit5-Back Propagation (Optional)"
date: 2023-11-01
tags: [¿Î³Ì±Ê¼Ç, Machine Learning]
---

# What is a derivative? (Optional)

## What does derivative really mean in gradient descent?

When $\frac{\partial}{\partial w}J(w)$ is big   
the term $\alpha \frac{\partial}{\partial w}J(w)$ is big  
which means this update step will make a large update to $w_j$, vice versa.

* When $\frac{\partial}{\partial w}J(w) > 0$, the term $-\alpha \frac{\partial}{\partial w}J(w) < 0$.   
Thus the slope will become smaller, and get closer to $0$(**It means we will approach the local mininum**);   
* When $\frac{\partial}{\partial w}J(w) < 0$, the slope will become larger, and get closer to zero, too.


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311011639932.png)


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311011621850.png)


## How to calculate derivate in python?

```python
import sympy

J, w = sympy.symbols("J,w")
J = w**3 # function J(w)
print(J)
dJ_dw = sympy.diff(J,w) # the derivative
print(dJ_dw) 
dJ_dw.subs([(w,2)]) # take w=2 into the derivative
```


# Computation graph (Optional)

Forward prop calculates $J$ from $w$ and $b$;  
Back prop calculatess derivatives of $J$ respect to $d$, $a$, $c$, $b$ and $w$ in order.


![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311031450021.png)


Backprop is an efficient way to compute derivatives, 

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311031523600.png)

# Larger neural network example (Optional)

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202311031637176.png)
