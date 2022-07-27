let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 5000;


app.use(express.static('public'));


/* set para ejs  */
app.set('view engine','ejs')
app.set('views',path.join(__dirname , "views"))





app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))

