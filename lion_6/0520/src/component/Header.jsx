import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(NavLink)`
    text-decoration: none;
    color: balck;    
    &.active{
        color: red;
    }
`;

export default function Header(){
    return(
        <>
            <Nav to='/'> Home </Nav>
            <Nav to='intro'> Intro </Nav>
            {/* Link가 아닌 NavLink를 쓰는 이유는 active, pending등을 사용하기 위해 */}
        </>
    )
}