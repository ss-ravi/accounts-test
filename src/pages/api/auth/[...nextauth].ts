import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const clientId = process.env.AUTH0_CLIENT_ID!;
const clientSecret = process.env.AUTH0_CLIENT_SECRET!;
const issuer = process.env.AUTH0_ENDPOINT!;

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
});
