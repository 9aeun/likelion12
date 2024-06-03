import { useEffect, useState } from 'react'

export default function Post() {
    const [data, setData] = useState('초기화')
    const [title, titles] = useState([]);
    const [id, ides] = useState([]);
    const [bb, bbs] = useState([]);
    const handleID = (event) => {
        ides(event.target.value);
    }
    const handleTitle = (event) => {
        titles(event.target.value);
    }
    const handleBody = (event) => {
        bbs(event.target.value);
    }

    const handleAdd = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: `POST`,
            body: JSON.stringify({
                title: title,
                body: bb,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) =>{
                return response.json(); //fetch를 사용할 때 response를 json화 해야한다. 필수!!!
            })
            .then((json) => {
            console.log(json);
            setData(json);
            });
    }
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: `POST`,
    //     body: JSON.stringify({
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     })
    //     .then((response) =>{
    //         return response.json(); //fetch를 사용할 때 response를 json화 해야한다. 필수!!!
    //     })
    //     .then((json) => {
    //     console.log(json);
    //     setData(json);
    //     });
    // }, []);

    return(
        <>
            <h1>Post</h1>
            <div>
                <input type="text" onChange={handleID} value = {id} placeholder='id' />
                <p></p>
                <input type = "text" onChange={handleTitle} value={title} placeholder='title' />
                <p></p>
                <input type="text" onChange={handleBody} value = {bb} placeholder='body' />
                <p></p>
                <button onClick={handleAdd}>POST</button>
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
        </>
    );
}