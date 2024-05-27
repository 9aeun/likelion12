import { DUMMY } from "../data"
import { useParams } from "react-router-dom"

export default function IntroDetailPage(){
    const {id} = useParams();
    return(
        <>
            {
                DUMMY.map((item) => {
                    if(item.id === parseInt(id)){
                        return(
                            <div key = {item.id}>
                                <h2>{item.name}</h2>
                                <ul>
                                    <li>NAME : {item.name}</li>
                                    <li>TRACK : {item.track}</li>
                                    <li>INSTAGRAM : {item.insta}</li>
                                </ul>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}