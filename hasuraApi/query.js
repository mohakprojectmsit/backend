const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const getProblemwithuser = async () => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
        problem(distinct_on: userid) {
            description
            location_of_problem
            title
            problem_to_user {
            address
            email
            ph_number
            }
        }
        }`;
    let result = await client.request(query)
        .then(data => {return data})
        .catch((err) => {return err});
};
const getUser = async () => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
        user {
            address
            email
            first_name
            id
            last_name
            ph_number
        }
        }
        `;
    let result = await client.request(query)
        .then(data => {return data})
        .catch((err) => { return err });
    return result;
};
const getUserid = async (ph_number, ) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
        user(where: {ph_number: {_eq: "${ph_number}"}}) {
            id
        }
    }`;
    let result = await client.request(query)
        .then(data => {return data})
        .catch((err) => { return err });
    return result;
};
module.exports = getProblemwithuser;
module.exports = getUser;
module.exports = getUserid;
