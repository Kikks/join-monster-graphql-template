import joinMonsterAdapt from "join-monster-graphql-tools-adapter";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./src/graphql/typeDefs";
import resolvers from "./src/graphql/resolvers";

import joinMonsterMetadata from "./src/joinMonsterMetadata";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

joinMonsterAdapt(schema, joinMonsterMetadata)

// ...server setup
