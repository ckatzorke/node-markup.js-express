# node-markup.js-express

A [Markup.js](https://github.com/adammark/Markup.js/) template engine implementation for express, because it was missing.

[Markup.js](https://github.com/adammark/Markup.js/) is a leightweight but powerful templating alternative to mustache or other.

This library is inspired by the mustache template engine implementation [node-mustache-express](https://github.com/bryanburgers/node-mustache-express).

## Usage

	var app = express();

	app.configure(function(){
	  //do typical express stuff
	  ...
	  //setup view engine to use Markup.js
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'markupjs');
	  app.engine('markupjs', markupExpress());
	  
	});
