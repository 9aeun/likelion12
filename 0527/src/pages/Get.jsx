import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    
`

export const loader = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(json);
        return json;
    }
    catch(error) {
        console.error('Error: ', error);
        return [];
    }
};

export default function GetPage(){
    // const [data1, setData] = useState('초기화')
    
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((response) =>{
//             return response.json(); //fetch를 사용할 때 response를 json화 해야한다. 필수!!!
//         })
//         .then((json) => {
//         console.log(json);
//         setData(json);
//         })
//         .catch((error) => {
//         console.log("Error: ", error);
//         setData(error);
//         })
//         .finally(()=>{
//         console.log("Finally end");
//         })
//   }, []);
    const data=useLoaderData();
    console.log(data);

    return(
        <>
            <h1>Get</h1>
            <div>
                <ul>
                {
                data.map((product) => {
                    return (
                        <li key={product.id}>
                            <h1>{product.title}</h1>
                            <p>{product.body}</p>
                        </li>
                    );
                })
                }
                </ul>
                
            </div>
        </>
    );
}