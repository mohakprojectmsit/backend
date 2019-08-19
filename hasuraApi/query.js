const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const getProblemwithuser = async (title) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `{
    problem(where: {title: {_eq: "${title}"}}) {
        description
        id
        location_of_problem
        time_of_upload
        title
        userid
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
    user(where: {ph_number: {_eq: "${ph_number}"}}) {
            id
            address
            email
            first_name
            last_name
            ph_number
        }
    }`;
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
    const query = `{{
        problem(order_by: {time_of_upload: desc}) {
            description
            id
            location_of_problem
            time_of_upload
            title
            userid
            }
        }
    }`

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
