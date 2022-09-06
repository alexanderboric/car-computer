import { createContext } from "react";
import { InfotainmentApp, SavedWifiNetwork, WifiNetwork } from "./types";

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

    /* -- Wifi -- */
    enableWifi: false,
    setEnableWifi: (enable: boolean) => { },
    /* -- Wifi -- */

    /* -- Misc -- */
    settingsLoaded: false
    /* -- Misc -- */
});


export const WifiContext = createContext<{
    getStatus: () => boolean;
    refetchNetworks: () => void;
    networks: WifiNetwork[];
    filteredNetworks: WifiNetwork[];
    refetchConnectedNetworks: () => void;
    connectedNetworks: WifiNetwork[];
    savedWifiNetworks: SavedWifiNetwork[];
    refetchSavedWifiNetworks: () => void;
    saveNetwork: (network: SavedWifiNetwork) => void;
    removeNetwork: (ssid: string) => void;
    connect: (network: SavedWifiNetwork) => void;
    start: () => void;
    stop: () => void;
    disconnect: () => void;
}>({ 
    getStatus: () => { 
        return false;
    },
    refetchNetworks: () => {},
    networks: [],
    filteredNetworks: [],
    refetchConnectedNetworks: () => { },
    connectedNetworks: [],
    savedWifiNetworks: [],
    refetchSavedWifiNetworks: () => { },
    saveNetwork: (network: SavedWifiNetwork) => { },
    removeNetwork: (ssid: string) => { },
    connect: (network: SavedWifiNetwork) => { },
    start: () => { },
    stop: () => { },
    disconnect: () => { }
 });

 export const AppContext = createContext<{
    installedApps: InfotainmentApp[];
    setInstalledApps: (apps: InfotainmentApp[]) => void;
    currentApp: string;
    setCurrentApp: (app: string) => void;
    openedApps: InfotainmentApp[];
    setOpenedApps: (apps: InfotainmentApp[]) => void;
 }>({
    installedApps: [],
    setInstalledApps: (apps: InfotainmentApp[]) => { },
    currentApp: null,
    setCurrentApp: (app: string) => { },
    openedApps: [],
    setOpenedApps: (apps: InfotainmentApp[]) => { }
 });