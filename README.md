<img src="http://gitt.io/badge.svg"/>

# jumperTextField
Alloy widget with self validating simple text field

# Dependencies 

1. A Twitter Bootstrap inspired framework for Appcelerator Titanium (Alloy)
1. https://github.com/TNuzzi/wriststrap


2. A lightweight JavaScript form validation library for Titanium Mobile
http://haberdasheryjs.com/form-validation-module-for-titanium-mobile/
https://github.com/haberdasheryjs/hdjs.validate.js/tree/master

3.Font Awesome Ti.Widget 1.4.1. An Offical Font Awesome 4.3.0 by Dave Gandy for Titanium Alloy!
https://github.com/MattMcFarland/com.mattmcfarland.fontawesome

Uses:

&lt;Widget src="jumperTextField" title="First Name" id="firstname" rules="required" /&gt; <br>

&lt;Widget src="jumperTextField" title="Last Name" id="lastname" rules="required" /&gt; <br>

&lt;Widget src="jumperTextField" title="Email" id="email" rules="required|valid_email" /&gt; <br>

&lt;Widget src="jumperTextField" title="Password" id="password" rules="required|min_length[6]|alpha_numeric" /&gt; <br>

 

#geting value:
var _firstname = $.firstname.getValue()

<br>

Preview
<img src="http://nirajmaharjan.com.np/freefiles/screenshot.png"/>

	


