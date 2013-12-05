var Mark = require("markup-js");
var fs = require('fs');
var util = require('util');
var markupjsexpress = (function() {
	"use strict";
	var templateExtension = "markupjs";

	var loadTemplate = function(file, callback) {
		util.log("Loading template '" + file + "'");
		fs.readFile(file, "utf-8", function(err, data) {
			if (err) {
				return callback(err);
			}
			callback(null, data);
		});
	};

	var render = function(template, options, callback) {
		var result = Mark.up(template, options);
		callback(null, result);
	};

	return {
		"create": function(dir, extension) {
			templateExtension = extension || templateExtension;
			var renderer = function(template, options, callback) {
				util.log("Rendering '" + template + "' with " + JSON.stringify(options));
				var viewDirectory = dir || options.settings.views;
				var viewExtension = '.' + (templateExtension || options.settings['view engine']);
				var file = viewDirectory + "/" + template + viewExtension;

				loadTemplate(file, function(err, data) {
					if (err) {
						return callback(err);
					}
					render(data, options, callback);
				});
			};
			return renderer;
		}
	};
})();

module.exports = markupjsexpress.create;