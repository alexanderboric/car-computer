import { InfotainmentApp } from "./types";

export const defaultApps: InfotainmentApp[] = [
    {
        id: "builtin-error",
        startUiPath: "notFound",
        name: "Error",
        homeName: "Error",
        iconPath: "error.png",
        systemApp: true,
        hideInNav: true,
    },
    {
        id: "builtin-settings",
        startUiPath: "settings",
        name: "Settings",
        homeName: "Settings",
        iconPath: "settings-light.png",
        iconPathDark: "settings-dark.png",
        systemApp: true,
    }
];