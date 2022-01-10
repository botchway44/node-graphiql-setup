const graphql = require('graphql');

const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: graphql.GraphQLInt},
        first_name: {type: graphql.GraphQLString},
        last_name: {type: graphql.GraphQLString},
        email: {type: graphql.GraphQLString},
        gender: {type: graphql.GraphQLString},
    })
});

module.exports = UserType;