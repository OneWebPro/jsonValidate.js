Documentation on [page](http://onewebpro.github.io/jsonValidate.js ).
---
jsonValidate.js
===============

Its a simple method to validate Jsons from ajax request. Full tested. For example you can look at test/index.html.

It recognize json objects, objects with arrays and variables. If we expected a array we should create map with array
with one value element to map.

First example show object map without validate object types.

Example 1: Structure.
---
```js
	var categories = {
	//Array
	categories: [
				//Array element object
              {
                id: void 0,
                name: void 0,
                image: void 0
              }
      ],
      //Object variable
      shop: void 0
	}
      $.ajax("/categories", {
              type: "POST",
              dataType: "json",
              success: function(data, textStatus, jqXHR) {
                if (validateJson(categories,data)) {
                 	alert("Working");
                } else {
                  	alert("Not working");
                }
              }
            }
```

Second example show how to validate json types. In map object, change variables to some real values. Method check
value constructor in json and in map. If they equal then it will pass.

Example 2 : Type.
---
```js
	var categories = {
	//Array
	categories: [
				//Array element object
              {
                id: 1,
                name: "",
                image: ""
              }
      ],
      //Object variable
      shop: ""
	}
      $.ajax("/categories", {
              type: "POST",
              dataType: "json",
              success: function(data, textStatus, jqXHR) {
                if (validateJson(categories,data)) {
                 	alert("Working");
                } else {
                  	alert("Not working");
                }
              }
            }
```
 Example 3 : RegExps.
---
We can use validator with RegExps. Validator understand RegExps objects, pattern objects ( in /  / colons) and strings with RegExp patttern (if string is not empty, validator use it to build RegExp object).  
```js
	var user = {
	//Array
	emails: [
				//Array element object
              {
              	//Pattern RegExp object
                email_1: /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/
                //RegExp object
                email_2: new RegExp("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"),
                //String pattern
                email_3: "^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$",
              }
      ],
      //Object variable
      name: ""
	}
      $.ajax("/users", {
              type: "POST",
              dataType: "json",
              success: function(data, textStatus, jqXHR) {
                if (validateJson(user,data)) {
                 	alert("Working");
                } else {
                  	alert("Not working");
                }
              }
            }
```
