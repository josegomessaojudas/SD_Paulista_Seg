import { createServer } from "@graphql-yoga/node";

const typeDefs = `
type Query {
hello: String!
name: String!
id: ID!
location: String!
age: Int!
ofAge: Boolean!
salary: Float!
}
`;
const resolvers = {
  Query: {
    id() {
      return "umachave";
    },
    location() {
      return "SP";
    },
    age() {
      return 29;
    },
    ofAge() {
      return true;
    },
    salary() {
      return null; // corpo pode ficar vazio também
    },
    hello() {
      return "Minha primeira API GraphQL!";
    },
    name() {
      return "Um nome aqui";
    },
  },
};
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start(() => {
  "Servidor no ar...";
});
