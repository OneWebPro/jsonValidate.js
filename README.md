Documentation on [page](http://onewebpro.github.io/jsonValidate.js ).
---
jsonValidate.js
===============

Its a simple method to validate Jsons from ajax request. Full tested. For example you can look at test/index.html.

It recognize json objects, objects with arrays and variables. If we expected a array we should create map with array
with one value element to map.

First example show object map without validate object types.

Example 1.
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
      $.ajax("/categories, {
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

Example 2.
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
      $.ajax("/categories, {
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
