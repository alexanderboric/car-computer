import "../App.css";
import { SettingsContext } from "../lib/context";
import { BackgroundImage } from "@mantine/core";
import * as React from "react";


export default function Home() {
  const { backgroundImageBlur, useBackgroundImage, backgroundImageHomeScreenOnly } = React.useContext(SettingsContext);


  return (
    <div style={{height: "100%"}}>
      {useBackgroundImage && backgroundImageHomeScreenOnly && <BackgroundImage style={{ height: "100%", position: "absolute", filter: `blur(${(15 * (backgroundImageBlur / 100))}px)` }} src="/background.png" />}
      <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, position: "absolute" }}>
        <h1>This will be the Home</h1>
      </div>
    </div>
  )

}