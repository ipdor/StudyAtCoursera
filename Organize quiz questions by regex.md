using notepad++

# 1. Delete "Question"

replace ```Question [0-9]+\r\n```   


# 2. Change question number

replace ```^([0-9]+)\.\r\n\r\n```   
with ```\r\n### \1\. ```



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
### 8. Variables allow you to save data.


True

False

### 9. In JavaScript the keyword ___________ is used to declare a variable.
```


# 3. Delete "Point"
replace ```[0-9]+\s/\s[0-9]+\spoint\r\n``` with none.


# 4. Line number 

manually delete all ```^[0-9]{1}\r\n```

# 5. mathmatical symbols

All mathmatical symbols will repeat.
