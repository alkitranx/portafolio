const express = require('express'),
    app = express();
 
app.get('/', function (req, res) {
  res.send('Portafolio en construccion')
})
 
app.listen(3000)