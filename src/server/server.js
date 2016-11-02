import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash.merge'

import {schema as customerSchema, resolvers as customerResolver} from '../imports/api/customer/schema'
import {schema as workItemSchema, resolvers as workItemResolver}  from '../imports/api/workItem/schema'
import {rootSchema, rootResolvers} from '../imports/api/schema'

const typeDefs = [...rootSchema, ...customerSchema, ...workItemSchema];
const resolvers = merge(rootResolvers, customerResolver, workItemResolver);


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema,
});

