import { useEffect, useState } from 'react'
export default function GetPage(){
    const [data, setData] = useState('초기화')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) =>{
            return response.json(); //fetch를 사용할 때 response를 json화 해야한다. 필수!!!
        })
        .then((json) => {
        console.log(json);
        setData(json);
        })
        .catch((error) => {
        console.log("Error: ", error);
        setData(error);
        })
        .finally(()=>{
        console.log("Finally end");
        })
  }, []);

    return(
        <>
            <h1>Get</h1>
            <div>
                <p>{JSON.stringify(data)}</p>
            </div>
        </>
    );
}