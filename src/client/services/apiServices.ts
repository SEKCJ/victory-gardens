export let Token: string = localStorage.getItem('token') || null;

export const setToken = (token: string) => {
    Token = token;
    localStorage.setItem('token', Token);
}

export const api = async<T = any>(uri: string, method: string = "GET", body?: {}) => {

    const headers: { [key: string]: any } = {
        'Content-Type': 'application/json'
    }

    if (Token) {
        headers['Authorization'] = `Bearer ${Token}`;
    }

    try {
        let response = await fetch(uri, {
            method,
            headers,
            body: JSON.stringify(body)
        });
        if (response.ok) {
            return <T>(await response.json());
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);

    }
}