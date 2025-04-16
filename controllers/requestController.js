exports.getRequests = (req, res) => {
  res.send('Liste med forespørsler');
};

exports.createRequest = (req, res) => {
  res.status(201).send({ message: 'Ny forespørsel opprettet', request: req.body });
};
