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
    var result = await client.request(query)
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const addUser = async (aadhanno, email, firstname, lastname, password, phonenumber) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query2 = `mutation {
        insert_user(objects: {aadhanno: "${aadhanno}", email: "${email}", firstname: "${firstname}", lastname: "${lastname}", password: "${password}", phonenumber: "${9810178257}"}) {
            affected_rows
        }
    }`;
    var result = await client.request(query2)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
exports.addProblem = addProblem;
exports.addUser = addUser;