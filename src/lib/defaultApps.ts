import { InfotainmentApp } from "./types";

export const defaultApps: InfotainmentApp[] = [
    {
        id: "builtin-error",
        startUiPath: "notFound",
        name: "Error",
        version: "1.0 Alpha",
        homeName: "Error",
        iconPath: "error.png",
        systemApp: true,
        hideInNav: true,
    },
    {
        id: "builtin-settings",
        startUiPath: "settings",
        name: "Settings",
        version: "1.0 Alpha",
        homeName: "Settings",
        iconPath: "settings-light.png",
        iconPathDark: "settings-dark.png",
        systemApp: true,
    },
    {
        id: "builtin-home",
        startUiPath: "home",
        name: "Home",
        version: "1.0 Alpha",
        homeName: "Home",
        iconPath: "home-light.png",
        iconPathDark: "home-dark.png",
        systemApp: true,
    },
    {
        id: "builtin-music",
        startUiPath: "music",
        name: "Music",
        version: "1.0 Alpha",
        homeName: "Music",
        iconPath: "music-light.png",
        systemApp: true,
    },
    {
        id: "builtin-app-view",
        startUiPath: "appView",
        name: "App View",
        version: "1.0 Alpha",
        homeName: "App View",
        iconPath: "appview-light.png",
        systemApp: true,
        hideInNav: false,
    }
];
