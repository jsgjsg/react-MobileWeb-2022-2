import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';

const serverURL = "http://localhost:65020/users";

function App() {
    const[userData, setUserData] = useState(null);
    const[userState, setUserState] = useState(null);

    const getUserData = () => {
        fetch(serverURL)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .then(console.log(userData))
    }

    useEffect(getUserData, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit버튼 클릭 후 서버로 POST 전송");
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, id, passwd})
        })
        .then(getUserData())
    }
    const onSubmitCheck = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        for(var i = 0; i < userData.length; i++) {
            if(id == userData[i].id && passwd == userData[i].passwd) {
                setUserState("회원으로 확인되었습니다.");
                break;
            } else {
                setUserState("그런 회원은 없습니다.");
            }
        }
    }

    return(
        <>
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" name="name" placeholder="이름" />
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="암호" />
                    <button type="submit">등록</button>
                </form>
            </div>
            <p></p>
            <div>
                <h2>회원확인</h2>
                <form onSubmit={onSubmitCheck}>
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="암호" />
                    <button type="submit">확인</button>
                </form>
            </div>
            {userState == null ? (
                <></>
            ) : (
                <p style={{color: "red"}}>{userState}</p>
            )}
            <p></p>
            <div>
                <h2>회원목록</h2>
                <ol>
                    {(userData === null) ? (
                        <p>서버에서 데이터를 가져오는 중....</p>
                    ) : (
                        userData.map((user, i) => (
                            <li key={user.keyid}>{user.name} {user.id} {user.passwd} </li>
                        ))
                    )}
                </ol>
            </div>
        </>
    )
}

export default App;