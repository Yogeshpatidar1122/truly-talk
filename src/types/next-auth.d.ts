import "next-auth";
import { DefaultSession } from "next-auth";

// Extend the "next-auth" module
declare module "next-auth" {
    // Extend the User interface
    interface User {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }

    // Extend the Session interface
    interface Session {
        user: {
            _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?: string;
        } & DefaultSession["user"];
    }
}

// Extend the "next-auth/jwt" module
declare module "next-auth/jwt" {
    interface JWT {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }
}
