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
    security_flags: string,
    mode: string,
}