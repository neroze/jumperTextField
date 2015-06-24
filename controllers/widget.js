var args = arguments[0];
var Animations = require('alloy/animation');

$.id = args.id || 'none_id'; //not sure how to manage if id is not specified


jumper.log("dyanamic updateing field id");
jumper.log(args.id);
jumper.log(args.rules);

$.field_label.text = args.title;
$.field.hintText = args.title;

var validate = require('hdjs.validate');
var validator = new validate.FormValidator();

function hideError(){
	$.warning.visible = false;
	$.warning_title.visible = false
}

function validation(){
	validator.run([
				{
					id: 'field', 
				    value: $.field.value,
				    display: args.title,
				    rules: args.rules
				   
				}
				], function(errors) {
					if(errors.length > 0) {
						for (var i = 0; i < errors.length; i++) {
							//jumper.log(errors[i].message);
							//alert(errors[i].message);
							//Ti.API.log(errors[i]);
							$.warning_title.text = errors[i].message;
							$.warning_title.visible = true;
						}
						//alert(errors[0].message);
						Animations.shake($.field, 200);
						//Ti.API.log(errors[i]);
						//$.addClass($.field, 'borderColorRed');
						$.warning.visible = true;
						// setTimeout(function(){
						// 	$.warning.visible = false;
						// },1000);
						
					} else {
						$.warning.visible = false;
						$.warning_title.visible = false;

					}
				});
}

$.focus = function(e){
	$.field.focus();
}

$.blur = function(e){
	$.field.blur();
};

$.getField = function(){
	return $.field;
};

$.getValue = function(){
	return $.field.value;
};

$.setValue = function(_val){
	$.field.value = _val;
}

require('WidgetTools').cleanArgs(args);