import { createContext } from "react";

export const BackgroundContext = createContext({ useImage: false, setUseImage: (useImage: boolean) => {}, blur: 50, setBlur: (blur: number) => {}, homeScreenOnly: true, setHomeScreenOnly: (homeScreenOnly: boolean) => {} });
export const OSKSettingsContext = createContext({ buttonSize: 4, setButtonSize: (size: number) => {}, buttonRadius: 1, setButtonRadius: (radius: number) => {}});