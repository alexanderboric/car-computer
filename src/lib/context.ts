import { createContext } from "react";

export const BackgroundContext = createContext({ useImage: false, setUseImage: (useImage: boolean) => {}, blur: 50, setBlur: (blur: number) => {}});