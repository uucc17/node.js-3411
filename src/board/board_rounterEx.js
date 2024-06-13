const cors = require("cors");

app.set('view engine', 'ejs');
app.set('view', __dirname+'/views');

app.set('port', process.env.PORT || 8080)