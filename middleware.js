import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/chats",
  },
});

export const config = { 
  matcher: [
    "/chats/:path*",
    "/contacts/:path*",
    "/profile/:path*",
  ]
};