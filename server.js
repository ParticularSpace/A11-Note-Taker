// all my requires 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// set up my server
const PORT = process.env.PORT || 3001;
const app = express();

// middlewares

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(apiRoutes);
app.use(htmlRoutes);

// get my server going
app.listen(PORT, () => console.log(`Server started on http://localhost:${ PORT }`));