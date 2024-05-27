import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
    positin : fixed;
    width: 100%;
    height : 60px;
    background-color: #dde0ea;
    display : flex;
    align-items: center;
    justify-content: space-between;
`

const Nav = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    padding: 10%;
    color: #000; 
    &.active{
        color: white;
    }
`;

export default function Header(){
    return(
        <>
        <NavDiv>
            <Nav to='/'> Home </Nav>
            <Nav to='intro'> Intro </Nav>
            <Nav to='work'>Work</Nav>
            <Nav to='react'>React</Nav>
        </NavDiv>
            
          
        </>
    )
}