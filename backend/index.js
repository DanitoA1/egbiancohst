const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const { schema } = require('./schema/Schema')
const { root } = require('./resolvers/Resolver')
const { dataStore } = require('./firebase-config')

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => console.log(`Open http://localhost:${PORT}/graphql`));