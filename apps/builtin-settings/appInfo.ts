import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-settings",
        startUiPath: "settings",
        name: "Settings",
        version: "1.0 Alpha",
        homeName: "Settings",
        iconPath: "settings-light.png",
        iconPathDark: "settings-dark.png",
        systemApp: true,
    };
}