import { useEffect, useState } from "react";
import LinkButton from "../common/LinkButton"
import { StyledButton, StyledDivLogin, StyledInput } from "./StyledLogin"
import { useAuth } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { CiBank } from 'react-icons/ci'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) login(email, password);

    }

    useEffect(

        function () {
            if (isAuthenticated) navigate("/home", { replace: true });
        },
        [isAuthenticated, navigate]
    );
    return (
        <StyledDivLogin>

            <center style={{ fontWeight: "bolder", fontSize: '2rem' }}><CiBank /> Finova</center>

            <form onSubmit={handleSubmit}>
                <center>
                    <StyledInput onChange={(e) => setEmail(e.target.value)} type="email" />
                    <StyledInput onChange={(e) => setPassword(e.target.value)} />
                    <StyledButton><LinkButton to='/home'>Log-in</LinkButton></StyledButton>
                </center>
            </form>
        </StyledDivLogin>
    )
}
export default Login