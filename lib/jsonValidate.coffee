window.validateJson = (map,data)->
	for o of map
		if(data[o]?)
			if(Object.prototype.toString.call(map[o]) == '[object Array]' and Object.prototype.toString.call( data[o] ) == '[object Array]')
				for element in data[o]
					if(!validateJson(map[o][0],element))
						return false
			if(map[o]?)
				if(!!map[o] and typeof map[o] == "string" or Object.prototype.toString.call(map[o]) == "[object RegExp]")
					if(typeof map[o] == "string")
						regex = new RegExp(map[o])
						return regex.test(data[o])
					else
						return map[o].test(data[o])
				if(map[o].constructor != data[o].constructor)
					return false
			if(typeof map[o] == "object" and typeof data[o] == "object")
				if(!validateJson(map[o],data[o]))
					return false
		else
			return false
	true