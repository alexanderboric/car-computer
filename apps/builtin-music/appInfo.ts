import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-music",
        startUiPath: "music",
        name: "Music",
        version: "1.0 Alpha",
        homeName: "Music",
        iconPath: "music-light.png",
        systemApp: true,
    };
}