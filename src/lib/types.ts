import * as React from "react"

export type WifiNetwork = {
    iface?: string,
    ssid: string,
    bssid: string,
    mac: string,
    channel: number,
    frequency: number,
    signal_level: number,
    quality: number,
    security: string,
    security_flags: string[],
    mode: string,
}

export type SavedWifiNetwork = {
    ssid: string,
    password: string,
}

export type AppScript = {
    name: string,
    script: (args?: any) => void
}

export type InfotainmentApp = {
    id: string,
    name: string,
    homeName: string,
    iconPath: string,
    startUiPath: string,
    startComponentName: string,
    systemApp?: boolean,
    startNodePath?: string,
    dependencies?: { npm: string[], pip: string[] },
    installScripts?: AppScript[],
    uninstallScripts?: AppScript[],
}