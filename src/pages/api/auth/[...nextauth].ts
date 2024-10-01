import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const clientId = process.env.AUTH0_CLIENT_ID!;
const clientSecret = process.env.AUTH0_CLIENT_SECRET!;
const issuer = process.env.AUTH0_ENDPOINT!;

const redirectUri = `${process.env.NEXTAUTH_URL!}/callback/my-auth0`;

export default NextAuth({
  providers: [
    Auth0Provider({
      name: "my auth0 provider",
      id: "my-auth0",
      clientId,
      clientSecret,
      issuer,
      token: {
        request: async ({ client, params, checks }) => {
          return {
            tokens: await client.callback(redirectUri, params, checks),
          };
        },
        params: {
          redirectUri,
          audience: `${process.env.AUTH0_ENDPOINT!}/api/v2/`,
        },
      },
      authorization: {
        params: {
          redirectUri,
          audience: `${process.env.AUTH0_ENDPOINT!}/api/v2/`,
        },
      },
      idToken: true,
    }),
  ],
  callbacks: {
    redirect: ({ url }) => {
      console.log(url);
      return url;
    },
  },
});
