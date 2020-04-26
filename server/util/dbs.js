const MongoClient = require('mongodb').MongoClient
function connect(url) {
    return MongoClient.connect(url).then(client => client.db())
  }
   
  module.exports = async function() {
    let databases = await Promise.all([connect(PROD_URI), connect(MKTG_URI)])
   
    return {
      production: databases[0],
      marketing: databases[1]
    }
  }
  