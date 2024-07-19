const {app} = require('./app');
const port = 8081;

if (require.main === module) {
    app.listen(() => console.log(`listening on port ${port}`))
  }

module.exports.app = app