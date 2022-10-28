import React from "react";

const DialogComponent = (props) => {
    const textColor = function () {
        if (props.color === "skyblue") {
            return "white";
        } else {
            return "skyblue";
        }
    }

    return(
        <div style={{
            width: 500,
            height: 150,
            margin: 10,
            background: "lightgray",
            textIndent: 10
        }}>
            <h1 style={{
                background: props.color,
                color: textColor()
            }}>
                {props.name} 다이얼로그
            </h1>
            <div>
                <h4 style={{color: "white"}}>{props.description}</h4>
                {props.button === "Y" && <button onClick={() => alert(`${props.name}!`)} style={{marginLeft: 10}}>{props.name}</button>}
            </div>
        </div>
    );
}

export default DialogComponent;