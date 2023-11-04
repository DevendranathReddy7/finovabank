import { useEffect, useState } from "react";
import { StyledButton, StyledDivLogin, StyledInput, StyledPara } from "./StyledLogin"
import { useAuth } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { CiBank } from 'react-icons/ci'
const Login = () => {
    const [email, setEmail] = useState("77338262");
    const [password, setPassword] = useState("dev123");

    const { login, isAuthenticated, loginError } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) login(email, password);

    }

    useEffect(
        function () {
            if (isAuthenticated) {
                navigate("/home")
                //navigate("/home", { replace: true })
            }
        },
        [isAuthenticated, navigate]
    );
    return (
        <>
            <StyledPara><CiBank />Finova</StyledPara>
            <center style={{ fontWeight: "bold", fontSize: '1rem', marginTop: '1rem', color: 'red' }}>{loginError}</center>
            <StyledDivLogin>
                <form onSubmit={handleSubmit}>
                    <center>
                        <StyledInput onChange={(e) => setEmail(e.target.value)} type="text" value={email} placeholder="Registration Id" />
                        <StyledInput onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Password" />
                        <StyledButton>Log-in</StyledButton>
                    </center>
                </form>
            </StyledDivLogin>
        </>
    )
}
export default Login