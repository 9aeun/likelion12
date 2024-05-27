import { Link } from "react-router-dom";
import { DUMMY } from "../data";

export default function IntroPage(){
    return (
        <>
            <ul>
                {
                    DUMMY.map((item) => (
                        <li key={item.id}>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Link href='/'>Home</Link> 
            {/* a태그는 새로고침이 되므로 Link로 사용 즉, a를 사용하면 전체가 다 새로고침 되므로 성능 저하 됨 */}
        </>
    )
}