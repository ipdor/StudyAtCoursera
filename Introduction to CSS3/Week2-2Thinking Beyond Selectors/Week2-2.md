# Week2-2Thinking Beyond Selectors

## 02-05 Browser Capabilites

### Browser prefixes 

To deal with different browser, use prefixes in CSS

• `-webkit-`: Android, Chrome,  iOS , Safari??
• `-moz-`: Firefox??
• `-ms-`: Internet Explorer??
• `-o-`: Opera??

```css
div{
	-webkit-border-radius: 25px;
}
```

some ways to 



### Often Unsupported Properties

- column-count
- border-radius
- gradient
- Sites such as http://caniuse.com/ will tell you when you need to use prefixes



## Review

* Default style sheets remove stylistic differences

	* Should default style sheet be internal or external?  

	* Where should it go in relation to other style sheets?

* Browser prefixes can help remove some differences caused by unsupported options
	* Shouldn’t be overused(check [Can I use](https://caniuse.com/) first)





## 02-07 Designing For Accessibility


POUR guidelines

- **Perceivable**
	- Provide text alternatives for images
	- Provide captions and transcripts for video and audio
	- Use correct semantic markup so content can be presented in different ways

- Operable
	- All functionality available from the keyboard!
	- Users have control over timing and limits

- **Understandable**
	- Economical and plain use of language

	- Text supplemented with illustrations, videos, and other formats where appropriate (i.e., use good Universal Design)

	- Navigation, information structure are discernable and consistent

	- Make pages operate in predictable ways

	- Help users avoid and correct mistakes

- Robust
	- Validate your code at validator.w3c.org and wave.webaim.org



