const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Velkommen til RequestBox!');
});

app.post('/api/requests', (req, res) => {
  const requestData = req.body;
  console.log(requestData);
  res.status(201).send({ message: 'Forespørsel mottatt', data: requestData });
});

app.listen(3000, () => {
  console.log('RequestBox kjører på port 3000');
});
