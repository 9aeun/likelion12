import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
        color: rgb(3,102,53);
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    `;

    const MenuBox = styled.p`
        background: rgb(240,240,240);
        padding: 10px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
    `;

    const GreenButton = styled.button`
        display: block;
        background-color: rgb(3,102,53);
        padding: 10px;
        width: 150px;
        height: 40px;
        border-radius: 10px;
    `;

    const StyledInput = styled.input`
        width: 250px;
        height: 60px;
        border: none;
        border-bottom: 3px solid rgb(3,102,53);
        outline: none;
        font-size: 18px;
    `;

    const StyledDiv = styled.div`
        padding: 20px;
        box-shadow: 1px 1px 3px grey;
        border-radius: 10px;
    `;

    const Text = styled.span`
        flex: 1;
        text-align: left;
    `;

    const DeleteButton = styled.button`
        display: block;
        background-color: red;
        padding: 10px;
        width: 100px;
        height: 40px;
        border-radius: 10px;
    `;


export default function WorkPage() {
    
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddTodo = () => {
        setTodos(todos => [...todos, inputValue]);
        setInputValue(''); // 입력 필드 초기화
    }

    const onDelete = (index) => {
        setTodos(prevTodos => {
            const newTodos = [...prevTodos];
            newTodos.splice(index, 1);
            return newTodos;
        });
    }

    return (
        <>
            <StyledDiv>
                <Title>My Work Todo List</Title>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledInput type="text" onChange={handleChange} value={inputValue} placeholder="Enter your todo" />
                    <GreenButton onClick={handleAddTodo}>Add Todo</GreenButton>
                </div>
                <div>
                    {todos.map((item, index) => (
                        <MenuBox key={index}>
                            <Text>{item}</Text>
                            <DeleteButton onClick={() => onDelete(index)}>Delete</DeleteButton>
                        </MenuBox>
                    ))}
                </div>
            </StyledDiv>
        </>
    );
}
