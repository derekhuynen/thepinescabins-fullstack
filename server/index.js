import app from './util/middleware.js'

app.listen(app.get('port'), async () => {
    console.log('Listening on port: ' + app.get('port'));
});