"use client";


import {PropsWithChildren} from "react";
import {MyUserContextProvider} from "@/hooks/useUser";

interface UserProviderProps {
}

export default function UserProvider({children}: PropsWithChildren<UserProviderProps>) {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
}
