const express = require('expresss');

const app = express

app.get('/teste', (req, res) => {
  return res.json({ hello: 'hord' })
});

app.listen(3333);
