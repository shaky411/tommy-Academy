import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({

  uri: 'https://academy-strapi-l5ljt.ondigitalocean.app/graphql',
    

});



const authLink = setContext((_, { headers }) => {

  const token = process.env.STRAPI_API_KEY;

  

  return {

    headers: {

      ...headers,

      Authorization: `Bearer ${token}`,

    },

  };

});



const client = new ApolloClient({

  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),

});



export default client;