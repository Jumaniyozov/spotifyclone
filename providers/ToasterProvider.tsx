"use client"


import {Toaster} from "react-hot-toast";

interface ToasterProviderProps {

}

export default function ToasterProvider(props: ToasterProviderProps) {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "#333",
                    color: "#fff"
                }
            }}
        />
    );
}
