import { createContext, useContext, useReducer, useState } from "react";
const AuthContext = createContext()

const initialState = {
    user: null,
    isAuthenticated: false,
};
const FAKE_USER = [{
    name: "Dev",
    email: "77338262",
    password: "dev123",
    userId: '1',
}];

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "logout":
            return { ...state, user: null, isAuthenticated: false };
        default:
            throw new Error("Unknown action");
    }
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('')
    const [loginError, setLoginError] = useState('')
    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)
    function login(email, password) {
        FAKE_USER.map(user => {
            if (user.email === email && user.password === password) {
                dispatch({ type: 'login', payload: user })
                setCurrentUser(user)
                return ''
            } else {
                setLoginError('Invalid Registration Id or Password')
            }
        })


    }
    function logout() {
        dispatch({ type: 'logout' })
    }
    return <AuthContext.Provider value={{ user, isAuthenticated, login, logout, currentUser, loginError, setLoginError }}>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("AuthContext was used outside of AuthProvider")
    }
    return context
}

export { AuthProvider, useAuth, AuthContext }