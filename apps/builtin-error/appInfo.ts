import { InfotainmentApp } from "../../src/lib/types";

export default function appInfo(): InfotainmentApp {
    return {
        id: "builtin-error",
        startUiPath: "notFound",
        name: "Error",
        version: "1.0 Alpha",
        homeName: "Error",
        iconPath: "error.png",
        systemApp: true,
        hideInNav: true,
    };
}