const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const addProblem = async (description, location, category, title, first_name, last_name, email, address, ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query = `mutation {
        insert_ProblemUser(objects: {address: "${address}", category: "${category}",
            description: "${description}", email: "${email}", first_name: "${first_name}", 
            last_name: "${last_name}", location_of_problem: "${location}", 
            phone_number: "${ph_number}", title: "${title}"}) {
            affected_rows
            returning {
                id
            }
        }
    }
        `;
    var result = await client.request(query)
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};
const addUser = async (address, email, first_name, last_name, ph_number) => {
    const client = new GraphQLClient('https://problem-portal.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'problem-portal'
        },
    })
    const query2 = `mutation {
        insert_ProblemUser(objects: {address: "${address}", 
            email: "${email}", first_name: "${first_name}", 
            last_name: "${last_name}", 
            phone_number: "${ph_number}"}) {
            affected_rows
            returning {
                id
            }
        }
    }
`;
    var result = await client.request(query2)
        .then(data => { return data })
        .catch((err) => { return err });
    return result;
};
exports.addProblem = addProblem;
exports.addUser = addUser;