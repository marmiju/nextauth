// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const pass = "12345645688"

const handler =  NextAuth({
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
          credentials: {
            email: { },
              password: {},
              serveremail: {},
            serverpass:{}
          },
            async authorize(credentials, req) {
                const isCorrect = pass === credentials?.password;
                console.log(isCorrect)
                
                if (isCorrect) {

                    return {
                        id: '01',
                        email:credentials.email
                    }
                }
                    
                return null
          }
        })
      ]
});

export {handler as GET, handler as POST}
