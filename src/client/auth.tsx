import React, { useState, useEffect } from 'react';
import App from './App';
import GuestApp from './GuestApp';
import { api, Token } from './services/apiServices';
import {Container, Spinner} from 'react-bootstrap';

const Auth: React.FC<HomeProps> = props => {

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
    } else if (router === "Guest") {
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

export interface HomeProps { }

export default Auth;