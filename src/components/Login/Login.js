import { useEffect, useState } from "react";
import LinkButton from "../common/LinkButton"
import { StyledButton, StyledInput } from "./StyledLogin"
import { useAuth } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { StyledDiv } from "../PaymentsTile/StyledPayments";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    function handleSubmit(e) {
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
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <StyledInput onChange={(e) => setEmail(e.target.value)} type="email" />
                <StyledInput onChange={(e) => setPassword(e.target.value)} />
                <StyledButton><LinkButton to='/home'>Log-in</LinkButton></StyledButton>
            </form>
        </StyledDiv>
    )
}
export default Login