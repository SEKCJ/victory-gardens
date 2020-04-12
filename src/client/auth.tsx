import React, { useState, useEffect } from 'react';
import App from './App';
import GuestApp from './GuestApp';
import { api, Token } from './services/apiServices';

const Auth: React.FC<HomeProps> = props => {

    const [router, setRouter] = useState<any>();

    useEffect(() => {
        if (Token === null) {
            setRouter("Guest");
        } else {
            api('/auth/tokens/validate')
                .then(result => {
                    console.log(result)
                    if (result?.msg === "successful") {
                        setRouter("User");
                    } else {
                        setRouter("Guest");
                    }
                })
        }
    }, [])

    if (router === "User") {
        return (
            <App />
        )
    } else {
        return (
            <GuestApp />
        )
    }
}

export interface HomeProps { }

export default Auth;