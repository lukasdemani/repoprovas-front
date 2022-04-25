import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export function Header(){
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    function logOut(){
        localStorage.removeItem(token);
        navigate('/');
    }

    return (
        <Logout>
            <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>    
        </Logout>
    )
}

const Logout = styled.div`
    font-size: 50px;
    color: #ffffff;
    display: flex;
    justify-content: right;

`
