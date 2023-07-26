using notepad++

# 1. "Question"

delete all ```Question [0-9]+\r\n```   


# 2. Question number

replace ```^([0-9]+)\.\r\n\r\n```   
with ```\r\n# \1\. ```




from :
```
8.

Variables allow you to save data.


True

False
9.

In JavaScript the keyword ___________ is used to declare a variable.
```
to:

```
# 8. Variables allow you to save data.


True

False

# 9. In JavaScript the keyword ___________ is used to declare a variable.
```


# 3. Score "Point"
replace ```[0-9] point\r\n``` with ```^[0-9]+ point\r\n```


# 4. Line number 

manually delete all ```^[0-9]{1}\r\n```

