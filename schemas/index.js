const graphql = require('graphql');
const UserType = require('./typeDefs/UserType');
const MOCK_DATA = require('../data/MOCK_DATA.json');

const Mutation = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args : {
                first_name: {type: graphql.GraphQLString},
                last_name: {type: graphql.GraphQLString},
                email: {type: graphql.GraphQLString},
                gender: {type: graphql.GraphQLString},
            },
            resolve(parent, args){
                const user = {...args, id : MOCK_DATA.length+1}
                MOCK_DATA.push(user)
                return user;
            }

        }
    },
});



const Query = new graphql.GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        getAllUsers : {
            type : new graphql.GraphQLList(UserType),
            resolve(parent, args) {
                return MOCK_DATA;
            }
        },
        getUser : {
            type : new graphql.GraphQLList(UserType),
            args : { id : {type : graphql.GraphQLInt}},
            resolve(parent, args) {
                return MOCK_DATA.filter(user => user.id === args.id);
            }
        },
    }
});



const schema = new graphql.GraphQLSchema({query : Query, mutation : Mutation, });

module.exports = schema;