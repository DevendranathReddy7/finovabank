import { createContext, useContext, useReducer } from "react";
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
}, {
    name: "Rahul",
    email: "78435647",
    password: "rahul123",
    userId: '2',
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
    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)
    function login(email, password) {
        FAKE_USER.map(user => {
            if (user.email === email && user.password === password) {
                dispatch({ type: 'login', payload: FAKE_USER })
            }
        }
        )

    }
    function logout() {
        dispatch({ type: 'logout' })
    }
    return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("AuthContext was used outside of AuthProvider")
    }
    return context
}

export { AuthProvider, useAuth }