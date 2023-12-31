import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:"39857755310-q917vhcakor5tusre82vmehvr0sfusof.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { handler as GET, handler as POST }

