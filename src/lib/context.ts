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
    buttonSize: 4,
    setButtonSize: (size: number) => { },
    buttonRadius: 1,
    setButtonRadius: (radius: number) => { },
    /* -- On Screen Keyboard -- */

    /* -- Font -- */
    fontFamily: null,
    setFontFamily: (font: string) => { },
    /* -- Font -- */

    /* -- Misc -- */
    settingsLoaded: false
    /* -- Misc -- */
});