const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('images'));
app.use('/pages', express.static('landing-page'));

app.listen(port, () => console.log(`listening on port ${port}!`));
