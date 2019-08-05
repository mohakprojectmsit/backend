const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const addProblem = async () => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = ``;
    client.request(query)
        .then(data => console.log(data))
        .catch((err) => console.log('Error' + err));
};
const addUser = async () => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = ``;
    client.request(query)
        .then(data => console.log(data))
        .catch((err) => console.log('Error' + err));
};

module.exports = addProblem;
module.exports = addUser;