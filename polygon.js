function PolygonJS () {
	var gen = function (n, r, m, callback) {
		// autoconfig
		n = n || 3;
		r = r || 1;
		m = m || {x:0,y:0};

		// generate
		var a = 2 * Math.PI / n;

		if (!callback) {
			var points = new Array();
		}

		for (var i = 0; i < n; i++) {
			var point = {
				x: m.x + r * Math.cos(i * a),
				y: m.y - r * Math.sin(i * a)
			};
			if(callback) {
				callback(point);
			} else {
				points.push(point);
			}
		}
		if (!callback) {
			return points;
		}
	}
	this.generateSync = function (n, r, m) {
		var count = 0;
		var points = new Array();
		if (n && n < 3) {
			return(new Error('n cannot be smaller than 3'));
		} else if (r && r < 0) {
			return(new Error('r cannot be negative'));
		} else if (m && (m.x == undefined || m.y == undefined)) {
			return(new Error('m is not valid'));
		} else {
			return gen(n, r, m);
		}
	}
	this.generate = function (n, r, m, callback) {
		callback = arguments[arguments.length-1];
		
		var count = 0;
		var points = new Array();

		if (n && n < 3) {
			callback(new Error('n cannot be smaller than 3'));
		} else if (r && r < 0) {
			callback(new Error('r cannot be negative'));
		} else if (m && (m.x == undefined || m.y == undefined)) {
			callback(new Error('m is not valid'));
		} else {
			gen(n, r, m, function (point) {
				points.push(point);
				if (++count == n) {
					callback(false, points);
				}
			});
		}
	}
	this.generateStream = function (n, r, m, callback) {
		var callback = arguments[arguments.length-1];
		
		if (n && n < 3) {
			callback(new Error('n cannot be smaller than 3'));
		} else if (r && r < 0) {
			callback(new Error('r cannot be negative'));
		} else if (m && (m.x == undefined || m.y == undefined)) {
			callback(new Error('m is not valid'));
		} else {
			gen(n, r, m, function (point) {
				callback(false, point);
			});
		}
	}
}