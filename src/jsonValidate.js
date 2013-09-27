(function() {

    window.validateJson = function(map, data) {
        var element, o, _i, _len, _ref;
        for (o in map) {
            if ((data[o] != null)) {
                if (Object.prototype.toString.call(map[o]) === '[object Array]' && Object.prototype.toString.call(data[o]) === '[object Array]') {
                    _ref = data[o];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        element = _ref[_i];
                        if (!validateJson(map[o][0], element)) {
                            return false;
                        }
                    }
                }
                if ((map[o] != null)) {
                    if (map[o].constructor !== data[o].constructor) {
                        return false;
                    }
                }
                if (typeof map[o] === "object" && typeof data[o] === "object") {
                    if (!validateJson(map[o], data[o])) {
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
