var markupjsExpress = require("../markup-js-express.js");
var should = require('should');

describe('markupjsExpress', function() {
	it('should render a simple template', function(done) {
		var renderer = markupjsExpress('test/templates', 'markupjs');
		renderer('test/templates/simple.markupjs', {
			greeting: "Hello, World"
		}, function(err, result) {
			should.not.exist(err);
			should.exist(result);
			result.should.eql("<h1>Hello, World</h1>");
			done();
		});
	});

	it('should render a simple template, even without passing the extesion (defaults to markupjs)', function(done) {
		var renderer = markupjsExpress('test/templates');
		renderer('test/templates/simple.markupjs', {
			greeting: "Hello, World"
		}, function(err, result) {
			should.not.exist(err);
			should.exist(result);
			result.should.eql("<h1>Hello, World</h1>");
			done();
		});
	});

	it('should throw an error when template does not exist', function(done) {
		var renderer = markupjsExpress('test/templates', 'markupjs');
		renderer('test/templates/nonexisting.markupjs', {
			greeting: "Hello, World"
		}, function(err, result) {
			should.exist(err);
			should.not.exist(result);
			done();
		});
	});

	it('should render an iteration', function(done) {
		var renderer = markupjsExpress('test/templates', 'markupjs');
		renderer('test/templates/iter.markupjs', {
			items: [{"text": "1"}, {"text": "2"}]
		}, function(err, result) {
			should.not.exist(err);
			should.exist(result);
			result.should.eql("12");
			done();
		});
	});
});