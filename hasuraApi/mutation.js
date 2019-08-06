const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const addProblem = async (description, location, title, first_name, last_name, email, address, ph_number, userid) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
        insert_problem(objects: {description: "${description}", location_of_problem: "${location}", problem_to_user: {data: {address: "${address}", email: "${email}", first_name: "${first_name}", last_name: "${last_name}", ph_number: "${ph_number}"}}, title: "${title}", userid: "${userid}"}) {
            affected_rows
        }
        }
        `;
    let result = await client.request(query)
        .then(data => {return data})
        .catch((err) => { return err });
    return result;
};
const addUser = async (address, email, first_name, last_name, ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
        insert_user(objects: {address: "${address}", email: "${email}", first_name: "${first_name}", last_name: "${last_name}", ph_number: "${ph_number}"}) {
            affected_rows
        }
        }
        `;
    let result = await client.request(query)
        .then(data => {return data})
        .catch((err) => { return err });
    return result;
};

module.exports = addProblem;
module.exports = addUser;