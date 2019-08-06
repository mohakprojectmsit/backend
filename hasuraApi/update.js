const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const updateProblem = async (title) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
    update_problem(where: {title: {_eq: "${title}"}}) {
        affected_rows
    }
}
`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
const updateUser = async (ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
    update_user(where: {ph_number: {_eq: "${ph_number}"}}) {
        affected_rows
    }
}
`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};

exports.updateProblem = updateProblem;
exports.updateUser = updateUser;