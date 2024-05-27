import styled from "styled-components"

const backDiv = styled.div`
    height: 100px;
    width: 100%;
    background-color: teal;
    
`
export default function HomePage(){
    return (
        <>
            <backDiv>
                <h1>! WELCOME !</h1> 
            </backDiv>
        </>
    )
}