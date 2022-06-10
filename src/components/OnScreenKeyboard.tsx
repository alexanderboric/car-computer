import * as React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function OnScreenKeyboard({ onChange }: { onChange: (value: string) => void }) {

    return (
        <>
            <Keyboard 
            onChange={onChange}
            />
        </>
    )
}