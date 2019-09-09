const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const updateProblem = async (category, title, description, location) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
        update_ProblemUser(where: {category: {_eq: "${category}"}, title: {_eq: "${title}"}}, _set: {category: "${category}", 
        description: "${description}", location_of_problem: "${location}", title: "${title}"}) {
            affected_rows
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
        update_ProblemUser(where: {phone_number: {_eq: "${ph_number}"}}, _set: {phone_number: "${ph_number_new}", 
        last_name: "${last_name}", first_name: "${first_name}", 
        email: "${email}", address: "${address}"}) {
            affected_rows
        }
    }`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};

exports.updateProblem = updateProblem;
exports.updateUser = updateUser;