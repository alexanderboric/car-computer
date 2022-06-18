import { createContext } from "react";

export const SettingsContext = createContext({
    /* -- Background Image -- */
    useBackgroundImage: false,
    setUseBackgroundImage: (useImage: boolean) => { },
    backgroundImageBlur: 50,
    setBackgroundImageBlur: (blur: number) => { },
    backgroundImageHomeScreenOnly: true,
    setBackgroundImageHomeScreenOnly: (homeScreenOnly: boolean) => { },
    /* -- Background Image -- */

    /* -- On Screen Keyboard -- */
    OSKButtonSize: 4,
    setOSKButtonSize: (size: number) => { },
    OSKButtonRadius: 1,
    setOSKButtonRadius: (radius: number) => { },
    /* -- On Screen Keyboard -- */

    /* -- Font -- */
    fontFamily: null,
    setFontFamily: (font: string) => { },
    /* -- Font -- */

    /* -- OpenDrop -- */
    enableOpenDrop: false,
    setEnableOpenDrop: (enable: boolean) => { },
    openDropDisplayName: null,
    setOpenDropDisplayName: (displayName: string) => { },
    /* -- OpenDrop -- */

    /* -- Misc -- */
    settingsLoaded: false
    /* -- Misc -- */
});


export const WifiContext = createContext({});