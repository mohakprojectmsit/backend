const firebase = require("firebase");
const getMainDefinition = require("apollo-utilities");
const HttpLink = require("apollo-link-http");
const split = require("apollo-link");
const ApolloClient = require("apollo-client");
const InMemoryCache = require("apollo-cache-inmemory");
require("cross-fetch/polyfill");
require("ws");

var firebaseConfig = {
    apiKey: "AIzaSyAP2qqBCTjJ07mOc3wAK-Hu4cJHTBz1I0k",
    authDomain: "problem-platform.firebaseapp.com",
    databaseURL: "https://problem-platform.firebaseio.com",
    projectId: "problem-platform",
    storageBucket: "",
    messagingSenderId: "631866510617",
    appId: "1:631866510617:web:925c5c7c7f153b3f"
};
firebase.initializeApp(firebaseConfig);

var userData = {};
//signup user
const signup = async (email, password) => {
    try {
        let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (user) {
            await onAuthStateChanged(userData);
            userData.user = user;
            userData.status = 'in';
            return userData;
        }
    } catch (error) {
        console.log(`Unable to sign in user with ${email}`)
        return error;
    }
}

//signin user
const signin = async (email, password) => {
    try {
        let user = await firebase.auth().signInWithEmailAndPassword(email, password);
        if (user) {
            console.log('User is created!');
            await onAuthStateChanged(userData);
            userData.user = user;
            userData.status = 'in';
            return userData;
        } else {
            console.log('Unable to create user');
            return error;
        }
    } catch (error) {
        console.log(error.code);
        console.log(error.message);
        return error;
    }
}
//signout user
const signout = async () => {
    try {
        await firebase.auth().signOut();
        console.log("signed out");
        userData.status = 'out';
        await onAuthStateChanged(userData);
    } catch (error) {
        console.log(error);
        return error;
    }
}

const onAuthStateChanged = async (userData) => {
    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            let token = await user.getIdToken();
            let idTokenResult = await user.getIdTokenResult();
            //testing token
            userData.token = token;
            //setting custom hasura claim
            const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];
            if (hasuraClaim) {
                let hasuraApp = async () => {
                    await App(token);

                }
                hasuraApp();
            } else {
                token = user.token;
                let metadataRef = firebase
                    .database()
                    .ref("metadata/" + user.uid + "/refreshTime");
                metadataRef.on("value", async () => {
                    token = await user.getIdToken(true);
                    return token;
                })
            }
        }
    })
}

const App = token => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const httpLink = new HttpLink.HttpLink({
        uri: "https://delhimohallasabha.herokuapp.com/v1/graphql",
        headers
    })
    const link = createNewLink();

    function newApolloClient() {
        return new ApolloClient.ApolloClient({
            link,
            cache: new InMemoryCache.InMemoryCache()
        });
    }
    userData.status = 'in';

    function createNewLink() {
        return split.split(
            ({
                query
            }) => {
                const {
                    kind,
                    operation
                } = getMainDefinition(query);
                return kind === "OperationDefinition" && operation === "subscription";
            },
            httpLink,
            httpLink
        );
    }
}

exports.signin = signin;
exports.signout = signout;
exports.signup = signup;