import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-appstore",
        startUiPath: "appStore",
        name: "App Store",
        version: "1.0 Alpha",
        homeName: "App Store",
        iconPath: "appstore.png",
        systemApp: true,
        hideInNav: false,
    };
}