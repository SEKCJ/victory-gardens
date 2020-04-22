import React, { useState, useEffect } from 'react';
import App from './App';
import GuestApp from './GuestApp';
import { Container, Spinner } from 'react-bootstrap';
import { api, Token } from './Services/apiServices';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { IAppProps } from './App';

const Auth: React.FC<IAppProps> = props => {
    const [mode, setMode] = useState<string>("");
    const [reloadType, setReloadType] = useState<string>("")


    useEffect(() => {
        if (Token !== null) {
            api('auth/tokens/validate')
                .then(result => {
                    if (result?.msg === "successful") {
                        setMode("User");
                    } else {
                        if (window.performance) {
                            if (performance.navigation.type === 1) {
                                setMode("UserReload")
                            }
                        } else {
                            setMode("Guest");
                        }
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
    } else if (mode === "UserReload") {
        setMode("User")
        return (
            <Router>
                <Redirect to={window.location.pathname} />
            </Router>
        )
    } else {
        return (
            <Container className="d-flex" style={{ "width": "100vw", "height": "100vh" }}>
                <Spinner className="mx-auto my-auto" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
            </Container>
        )
    }

}

export default Auth;