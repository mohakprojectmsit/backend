const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const getProblemwithuser = async (email) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
      ProblemUser(where: {email: {_eq: "${email}}}) {
        category
        location_of_problem
        time
        title
        description
      }
    }`;
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
const getUser = async (ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
      ProblemUser(where: {phone_number: {_eq: "${ph_number}"}}) {
        address
        email
        first_name
        last_name
        phone_number
      }
    }
    `;
    let result = await client.request(query)
        .then(data => {
            return data;

        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};
const getUserid = async (ph_number) => {
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
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
const feed = async () => {
    const query = `{
      ProblemUser(limit: 10, order_by: {time: desc}) {
        category
        description
        email
        first_name
        last_name
        location_of_problem
        phone_number
        time
      }
    }
    `

    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
}
exports.getProblemwithuser = getProblemwithuser;
exports.getUser = getUser;
exports.getUserid = getUserid;
exports.feed = feed;
