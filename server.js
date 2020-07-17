//Install express server
express = require('express');
path = require('path');

app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/profiler-ui'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/profiler-ui/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);