import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-home",
        startUiPath: "home",
        name: "Home",
        version: "1.0 Alpha",
        homeName: "Home",
        iconPath: "home-light.png",
        iconPathDark: "home-dark.png",
        systemApp: true,
    };
}