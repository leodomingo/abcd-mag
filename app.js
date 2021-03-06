var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/a-tent-on-the-rivanna', function(req, res) {
    res.render('diamond');
})
app.use('/a-charlottesville-couple-revisited', function(req, res) {
    res.render('diamond2');
})
app.use('/new-jersey-first-lady', function(req, res) {
    res.render('murphy');
})
app.use('/an-honor-retrospective', function(req, res) {
    res.render('honor');
})
app.use('/the-american-cousin', function(req, res) {
    res.render('cousin');
})
app.use('/dean-groves-commitment', function(req, res) {
    res.render('groves');
});
app.use('/walking-past-carrs-hill', function(req, res) {
    res.render('casteen');
});
app.use('/scenes-of-dominica', function(req, res) {
    res.render('dominica');
});
app.use('/city-of-stories', function(req, res) {
    res.render('bookstore');
});
app.use('/sampson-versus-bennett', function(req, res) {
    res.render('sampson');
});
app.use('/reemerging-from-rehab', function(req, res) {
    res.render('rugby');
});
app.use('/the-general-assembly-2018', function(req, res) {
    res.render('ga-transcript');
});
app.use('/clarity-in-chaos', function(req, res) {
    res.render('jazz');
});
app.use('/eugenics-racist-chains-on-uva', function(req, res) {
    res.render('eugenics');
});
app.use('/the-city-that-wears-its-art-on-its-sleeve', function(req, res) {
    res.render('murals');
});
app.use('/protest-dialogue-confrontation', function(req, res) {
    res.render('statues');
});
app.use('/fostering-the-fringes', function(req, res) {
    res.render('music-venues');
});

app.use('/redefining-roots', function(req, res) {
    res.render('refugees')
});
app.use('/home-away-from-hospital', function(req, res) {
    res.render('housing')
});
app.use('/npm', express.static(path.join(__dirname, 'node_modules')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;