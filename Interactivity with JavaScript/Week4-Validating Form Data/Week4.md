## Simple Forms

> [form表单的GET和POST请求](https://www.jianshu.com/p/875e7f42081e)
> 
> [发送表单数据](https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)

Using ```<form>```, ```<label>``` and ```<input>``` to create forms.

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="id" value="name" name="name"> 
    <br/>
    <label>Email: <input type="email" name="email" id="email"></label>
    <br/>
    <label for="birth">Birth:</label>
    <input type="date" id="birth" value="birth">
    <br/>
    <input type="submit" value="Click Here!">
</form>
```

### Input types:
* text
* email
* password
* radiobutton
* checkbox
* submit
* number
* range
* color
* date
* url


### Attributes:
* type
* name (display in URL: ```?name1=value1&name2=value2```)
* id
* value(For button, it is text; For textfield, it is a default valut)
* placeholder (Provides a suggestion)

## Simple Validation

**What** and **How** to validate?

### What to Validate  

* The type of input  
  * a number instead of a string…    

* The format of the input  
  * Is it a valid email address or URL?  
  * Does the phone number have spaces?  

* The value of the input
  * Should it be required input?  
  * Do the email values match?

### How Do You Want to Validate

* Use new HTML5 input types
  * email, number, url

* Use HTML5 attributes  
  * required, placeholder, min, max, pattern(regular expression)

* Use JavaScript functions  
  * Write custom code to validate

> When developing, we can use attribute ```novalidate``` in ```<form>``` to disable it
### Example

We have two ways to validate  

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307241706779.png)

```html
<form>
    zip code with pattern: <input type="text" name="zip_codeP" pattern="[0-9]{5}" required><br/>

    zip code with numbers: <input type="number" name="zip_codeN" min ="00000" max = "99999" required><br/>
    
    <input type="submit">
</form>
```
The second way do not work, because it allows any number of digits to be entered. We must use ```number + min and max```to validate.


### Why we still use JavaScript to validate data?
* Browser compatibility
* Custom validating rule


## Comparing Two Inputs

We are goingto make sure that two email addresses are equal.

![](https://raw.githubusercontent.com/valueism/Pictures/master/img/202307241739380.png)

### Validating Input
* What?
  * Compare that two emails are the same
* How?
  * HTML: email input type and required attribute
  * JavaScript
* When?
  * As soon as the second email is entered
  * **And on the submit!!** We can use a boolean return to halt an action.


My code:  
HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
    <link rel="stylesheet" href="css/form.css">
    <script src="js/validate.js"></script>
</head>
<body onload="return hide_prompt()">
    <form id="validate_addresses_same">
        <label for="input_email">Email address: <input type="email" name="input_email" id="input_email" required></label>
        <br/>
        <label for="repeat_email">Repeat email address: <input type="email" name="repeat_email" id="repeat_email" oninput="check_email_same()" required></label>
        <br/>
        <label class="prompt"></label>
        <br/ class="prompt">
        <input type="submit" onclick="return check_email_same()"> <!--Dont't forget return at onclick!-->
    </form>
</body>
</html> 
```

JavaScript:

```js
function check_email_same (){
    var mail1 = document.getElementById("input_email");
    var mail2 = document.getElementById("repeat_email");
    // console.log(mail1.value);
    // console.log(mail2.value);

    if (mail1.value != mail2.value){
        var prompt = document.getElementsByClassName("prompt");
        prompt[0].style.display="inline";
        prompt[1].style.display="inline";
        prompt[0].style.color="#ff0000";
        prompt[0].innerText="Please make sure two email addresses are the same!";
        return false;
    }
    else{
        hide_prompt();
    }
}

function hide_prompt(){
    var prompt = document.getElementsByClassName("prompt");
    for(i=0 ;i<prompt.length; i++){
        prompt[i].style.display="none"; //display:none - 不占空间; visibility:hidden - 占用空间
    }
    return true;
}
```


## Checkboxes and Radio Buttons

### Checkboxes
Options share a single name.

```html
<form>
  Favorite Foods<br/>
  <label><input type="checkbox" name="food" value="Pizza">Pizza</label><br/>

  <label><input type="checkbox" name="food" value="Chips">Chips</label><br/>

  <label><input type="checkbox" name="food" value="Kale">Kale</label><br/>

  <input type="submit">
</form>
```

### Radio Buttons
Radio buttons only allow you to select one option per group.

```html
<form>
  Favorite Foods<br/>
  <label><input type="radio" name="gender" value="Male">Male</label><br/>

  <label><input type="radio" name="gender" value="Female">Female</label><br/>
  
  <input type="submit">
</form>
```


### JavaScript

The boolean expression is usually on the ```checked``` attribute.

Event ```onchange``` call a js function, and it checks the ```checked``` attribute of a checkbox.

```html
<!--more-->
<input id="yesNick" name="yesNick" type="checkbox" value="yes" onchange= "nicknameFunction()"/>
<!--more-->
```




```js
function nicknameFunction(){
    var checkbox_nickname = document.getElementById("yesNick");
    if (checkbox_nickname.checked == true){
        document.getElementById("nick").style.display="inline";
        document.getElementById("nickname").setAttribute("required","true");
    }
    else{
        document.getElementById("nick").style.display="none";
        document.getElementById("nickname").removeAttribute("required");
    }
}
```
