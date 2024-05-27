import React from "react";
import Comment from "./Comment";

function CommetList(props)
{
    const Commets = [
        {
            name : "김만두",
            comment : "안녕하세요 김만두입니다.",
        },
        
        {
            name : "유재석",
            comment : "안녕하세요 유재석입니다.",
        },
        
        {
            name : "김전일",
            comment : "안녕하세요 김전일입니다.",
        },
    ];
    return(
        <>
            {Commets.map((comment)=> {
                return(
                    <Comment key = {comment.name} name = {comment.name} comment = {comment.comment}/>
                );
            })}
        </>
    );
}
export default CommetList;
