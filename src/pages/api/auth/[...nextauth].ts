import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      name: 'my auth0 provider',
      id: 'my-auth0',
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ENDPOINT!,
      token: {
        params: {
          audience: `${process.env.AUTH0_ENDPOINT!}/api/v2/`,
        },
      },
      authorization: {
        params: {
          audience: `${process.env.AUTH0_ENDPOINT!}/api/v2/`,
        },
      },
      idToken: true,
    }),
  ],
});