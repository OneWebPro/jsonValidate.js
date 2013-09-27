(function() {

  Object.prototype.validateJson = function(map) {
    var element, o, _i, _len, _ref;
    for (o in map) {
      if ((this[o] != null)) {
        if (Object.prototype.toString.call(map[o]) === '[object Array]' && Object.prototype.toString.call(this[o]) === '[object Array]') {
          _ref = this[o];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            element = _ref[_i];
            if (!element.validateJson(map[o][0])) {
              return false;
            }
          }
        }
        if ((map[o] != null)) {
          if (map[o].constructor !== this[o].constructor) {
            return false;
          }
        }
        if (typeof map[o] === "object" && typeof this[o] === "object") {
          if (!this[o].validateJson(map[o])) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true;
  };

}).call(this);
