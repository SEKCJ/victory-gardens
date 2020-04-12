import App from './App';
import GuestApp from './GuestApp';

import React, { useState, useEffect } from 'react';
import { api, Token } from './services/apiServices';
import { IAppProps } from './App';

const Auth: React.FC<IAppProps> = props => {

    const [router, setRouter] = useState<any>();

    useEffect(() => {
        if (Token !== null) {
            api('/auth/tokens/validate')
                .then(result => {
                    if (result?.msg === "successful") {
                        setRouter("User");
                    } else {
                        setRouter("Guest");
                    }
                })
        } else {
            setRouter("Guest");
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

export default Auth;