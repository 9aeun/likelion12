import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(NavLink)`
    margin: 0 10px;
    text-decoration: none;
    color: balck;    
    &.active{
        color: red;
    }
`;

export default function Header(){
    return(
        <>
            <Nav to='/'> 홈가기 </Nav>
            <Nav to='/get'> GET </Nav>
            <Nav to='/post'> POST </Nav>
            {/* Link가 아닌 NavLink를 쓰는 이유는 active, pending등을 사용하기 위해 */}
        </>
    )
}