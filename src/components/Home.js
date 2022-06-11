import React from "react";
import "../App.css";
import { BackgroundContext } from "../lib/context";
import { BackgroundImage } from "@mantine/core";


export default function Home() {
  const { blur, useImage, homeScreenOnly } = React.useContext(BackgroundContext);


  return (
    <div style={{height: "100%"}}>
      {useImage && homeScreenOnly && <BackgroundImage style={{ height: "100%", position: "absolute", filter: `blur(${(15 * (blur / 100))}px)` }} src="/background.png" />}
      <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, position: "absolute" }}>
        <h1>This will be the Home</h1>
      </div>
    </div>
  )

}