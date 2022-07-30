const { connect, connection } = require('mongoose');

connect('mongodb://localhost/simpleSocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
