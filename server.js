// all my requires 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlRoutes');

// set up my server
const PORT = process.env.PORT || 3001;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use(htmlroutes);
app.use(express.static('public'));

// get my server going
app.listen(PORT, () => console.log(`Server started on http://localhost:${ PORT }`));