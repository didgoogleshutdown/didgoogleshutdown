var http = require('http'),
	express = require('express'),
	path = require('path'),
	morgan = require('morgan')

var indexPath = path.resolve( __dirname, '../dist/client' )

app = express();

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

console.log( "Running on port " + process.env.PORT )
