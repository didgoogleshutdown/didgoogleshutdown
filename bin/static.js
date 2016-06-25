var http = require('http'),
	express = require('express'),
	path = require('path'),
	morgan = require('morgan'),
	enforce = require('express-sslify');

var indexPath = path.resolve( __dirname, '../dist/client' )

app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('/.well-known/acme-challenge/:acmeToken', function(req, res, next) {
  var acmeToken = req.params.acmeToken;
  var acmeKey;

  if (process.env.ACME_KEY && process.env.ACME_TOKEN) {
    if (acmeToken === process.env.ACME_TOKEN) {
      acmeKey = process.env.ACME_KEY;
    }
  }

  for (var key in process.env) {
    if (key.startsWith('ACME_TOKEN_')) {
      var num = key.split('ACME_TOKEN_')[1];
      if (acmeToken === process.env['ACME_TOKEN_' + num]) {
        acmeKey = process.env['ACME_KEY_' + num];
      }
    }
  }

  if (acmeKey) res.send(acmeKey);
  else res.status(404).send();
})

app
	.use( morgan( 'dev' ) )
	.use( express.static( indexPath ) )
	.get( '/assets/*', function (req, res) {
		res.sendFile( path.resolve( __dirname, '../src' + req.originalUrl ) )
	} )
	.get('*', function (req, res) {
		res.sendFile( indexPath + '/index.html')
	})
	.on( 'error', function( error ){
		 console.log( "Error: " + hostNames[i] + "\n" + error.message )
		 console.log( error.stack )
	})

http
.createServer( app ).listen( process.env.PORT )
.on( 'error', function( error ){
	 console.log( "Error: " + hostNames[i] + "\n" + error.message )
	 console.log( error.stack )
})

console.log( "Running on port " + process.env.PORT + " with API URL " + process.env.API_URL)
