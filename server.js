const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use(htmlroutes);
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server started on http://localhost:${ PORT }`));