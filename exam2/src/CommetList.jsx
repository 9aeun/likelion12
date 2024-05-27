import React from "react";
import Comment from "./Comment";

function CommentList(props){
    const Comments = [
        {
            name : "김만두",
            comment : "안녕하세요~ 만두입니다.",
        },
        {
            name : "유재석",
            comment : "리액트 즐거워요",
        },
        {
            name : "코난",
            comment : "안녕하세요 제 이름은 코난, 탐정이죠",
        },
    ];
    return(
        <>
            {Comments.map((comment)=> {
                return(
                    <Comment key = {comment.name} name = {comment.name} comment = {comment.comment}/>
                );
            })}
        </>
    );
}
export default CommentList;