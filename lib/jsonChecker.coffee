Object::validateJson = (map)->
	for o of map
		if(this[o]?)
			if(Object.prototype.toString.call(map[o]) == '[object Array]' and Object.prototype.toString.call( this[o] ) == '[object Array]')
				for element in this[o]
					if(!element.validateJson(map[o][0]))
						return false
			if(map[o]?)
				if(map[o].constructor != this[o].constructor)
					return false
			if(typeof map[o] == "object" and typeof this[o] == "object")
				if(!this[o].validateJson(map[o]))
					return false
		else
			return false
	true