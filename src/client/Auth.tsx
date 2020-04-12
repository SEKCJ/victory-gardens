import App from './App';
import GuestApp from './GuestApp';

import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api, Token } from './Services/apiServices';


const Auth: React.FC<ILoginProps> = props => {

    const [mode, setMode] = useState<string>("");

    useEffect(() => {
        api('/auth/tokens/validate')
            .then(result => {
                if (result) {

                }
            })
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

export interface ILoginProps extends RouteComponentProps { }