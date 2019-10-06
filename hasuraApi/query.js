const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const feed = async () => {
    const query = `{
        problems(order_by: {reportDate: desc}) {
            digitalSignatures
            location
            name
            problemid
            reportDate
            status
            upvoes
        }
    }`;
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
const dashboard = async () => {
    const query = `{
        dashboard {
            call_meetings
            forecast
            id
            pending_request
            tasks
        }
    }`;
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

exports.feed = feed;
exports.dashboard = dashboard;