const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const updateProblem = async (title, description, location) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
    update_problem(where: {title: {_eq: "${title}"}}, _set: {description: "${description}",location_of_problem: "${location}"}) {
        affected_rows
        returning {
            description
        }
    }
}

`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
const updateUser = async (ph_number, address, email, first_name, last_name, ph_number_new) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
            update_user(where: {ph_number: {_eq: "${ph_number}"}}, _set: {address: "${address}", email: "${email}", 
            first_name: "${first_name}", last_name: "${last_name}", ph_number: "${ph_number_new}"
        })
    }`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};

exports.updateProblem = updateProblem;
exports.updateUser = updateUser;