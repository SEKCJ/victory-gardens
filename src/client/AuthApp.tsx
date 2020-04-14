import React, { useState, useEffect } from 'react';
import App from './App';
import GuestApp from './GuestApp';
import { Container, Spinner } from 'react-bootstrap';
import { api, Token } from './Services/apiServices';
import { IAppProps } from './App';

const Auth: React.FC<IAppProps> = props => {
    const [mode, setMode] = useState<string>("");

    useEffect(() => {
        if (Token !== null) {
            api('auth/tokens/validate')
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
    } else if (mode === "Guest") {
        return (
            <GuestApp />
        )
    } else {
        return (
            <Container className="d-flex">
                <Spinner className="mx-auto my-3" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
            </Container>
        )
    }

}

export default Auth;