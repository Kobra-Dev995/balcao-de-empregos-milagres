import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return(
            profile.email,
            profile.name,
            profile.picture 
        )
      },
    }),
  ],
  pages: {
    signIn: '/admin',
    signOut: '/'
  }
};

export default nextAuth(authOptions);
