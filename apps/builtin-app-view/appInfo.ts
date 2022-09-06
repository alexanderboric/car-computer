import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-app-view",
        startUiPath: "appView",
        name: "App View",
        version: "1.0 Alpha",
        homeName: "App View",
        iconPath: "appview-light.png",
        systemApp: true,
        hideInNav: false,
    };
}