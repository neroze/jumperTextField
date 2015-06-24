# jumperTextField
Alloy widget with self validating simple text field

# Dependencies 

1. A Twitter Bootstrap inspired framework for Appcelerator Titanium (Alloy)
1. https://github.com/TNuzzi/wriststrap


2. A lightweight JavaScript form validation library for Titanium Mobile
http://haberdasheryjs.com/form-validation-module-for-titanium-mobile/
https://github.com/haberdasheryjs/hdjs.validate.js/tree/master

Uses:
<Widget src="jumperTextField" title="First Name" id="firstname" rules="required" />
<Widget src="jumperTextField" title="Last Name" id="lastname" rules="required" />
<Widget src="jumperTextField" title="Email" id="email" rules="required|valid_email" />
<Widget src="jumperTextField" title="Password" id="password" rules="required|min_length[6]|alpha_numeric" />

Preview
<img src="http://nirajmaharjan.com.np/freefiles/screenshot.png"/>

	


