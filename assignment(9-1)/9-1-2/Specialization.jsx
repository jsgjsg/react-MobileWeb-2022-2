import React from "react";
import DialogComponent from "./DialogComponent";

const specialization = function() {

    return (
        <div>
            <DialogComponent name="경고" color="red" description="경고!" button="Y"></DialogComponent>
            <DialogComponent name="인사말" color="green" description="안녕하세요" button="N"></DialogComponent>
            <DialogComponent name="오류" color="skyblue" description="오류!" button="Y"></DialogComponent>
            <DialogComponent name="공지사항" color="blue" description="공지사항입니다." button="N"></DialogComponent>
        </div>
    );
}

export default specialization;