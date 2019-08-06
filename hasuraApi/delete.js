const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const deleteProblem = async (title) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
    delete_problem(where: {title: {_eq: "${title}"}}) {
        affected_rows
    }
}`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
const deleteUser = async (ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
    delete_user(where: {ph_number: {_eq: "${ph_number}"}}) {
        affected_rows
    }
}`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};

module.exports = deleteProblem;
module.exports = deleteUser;