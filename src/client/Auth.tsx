import App from './App';
import GuestApp from './GuestApp';

import React, { useState, useEffect } from 'react';
import { api, Token } from './Services/apiServices';


const Auth: React.FC<ILoginProps> = props => {

    const [mode, setMode] = useState<string>("");

    useEffect(() => {
        if (Token !== null) {
            api('/auth/tokens/validate')
                .then(result => {
                    if (result?.msg === "successful") {
                        setMode("User");
                    } else {
                        setMode("Guest");
                    }
                })
        } else {
            setMode("Guest");
        }
    }, [])

    if (mode === "User") {
        return (
            <App />
        )
    } else {
        return (
            <GuestApp />
        )
    }

}

export interface ILoginProps { }

export default Auth;