const express = require('express');
const routes = require('./routes/route');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(routes);
app.use(express.static('public'));
app.set('layout', 'partials/main-layout');

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
