import "./App.css";
import { useState, useEffect } from "react";

import Manager from "./components/core/Manager";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	LoadingOverlay,
	Loader,
	Group,
	Stack,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { AppContext, SettingsContext, WifiContext } from "./lib/context";
import * as React from "react";
import { InfotainmentApp } from "./lib/types";

export default function App() {
	const [useBackgroundImage, setUseBackgroundImage] = useState(false);
	const [backgroundImageHomeScreenOnly, setBackgroundImageHomeScreenOnly] =
		useState(true);
	const [backgroundImageBlur, setBackgroundImageBlur] = useState(35);
	const [settingsLoaded, setSettingsLoaded] = useState(false);
	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
	const [fontFamily, setFontFamily] = useState("default");

	const [OSKButtonSize, setOSKButtonSize] = useState(4);
	const [OSKButtonRadius, setOSKButtonRadius] = useState(1);

	const [enableOpenDrop, setEnableOpenDrop] = useState(false);
	const [openDropDisplayName, setOpenDropDisplayName] = useState("Jarvis");

	const [enableWifi, setEnableWifi] = useState(false);
	const [networks, setNetworks] = useState([]);
	const [filteredNetworks, setFilteredNetworks] = useState([]);
	const [currentNetworks, setCurrentNetworks] = useState([]);
	const [savedNetworks, setSavedNetworks] = useState([]);

	const [installedApps, setInstalledApps] = useState<InfotainmentApp[]>([]);
	const [currentApp, setCurrentApp] = useState("builtin-home");
	const [openedApps, setOpenedApps] = useState([]);

	useEffect(() => {
		fetch("/api/settings/getAll")
			.then((res) => res.json())
			.then((data) => {
				/* -- Insert Settings Here -- */

				/* -- Background -- */
				setUseBackgroundImage(data.useBackgroundImage === "true");
				setBackgroundImageBlur(Number(data.backgroundImageBlur));
				setBackgroundImageHomeScreenOnly(
					data.backgroundImageHomeScreenOnly === "true"
				);
				/* -- Background -- */

				/* -- On Screen Keyboard -- */
				setOSKButtonSize(Number(data.OSKButtonSize));
				setOSKButtonRadius(Number(data.OSKButtonRadius));
				/* -- On Screen Keyboard -- */

				/* -- Font -- */
				setFontFamily(data.fontFamily);
				/* -- Font -- */

				/* -- Color Scheme -- */
				if (colorScheme !== data.colorScheme) {
					toggleColorScheme();
				}
				/* -- Color Scheme -- */

				/* -- Open Drop -- */
				setEnableOpenDrop(data.enableOpenDrop === "true");
				setOpenDropDisplayName(data.openDropDisplayName);
				/* -- Open Drop -- */

				/* -- Wifi -- */
				setEnableWifi(data.enableWifi === "true");
				/* -- Wifi -- */

				/* -- Insert Settings Here -- */

				setSettingsLoaded(true);
			});

		/* -- OpenDrop feed -- */
		/* -- OpenDrop feed -- */

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* -- Insert Settings Effects Here -- */
	useEffect(() => {
		fetch(
			"/api/settings/set?setting=useBackgroundImage&value=" + useBackgroundImage
		);
	}, [useBackgroundImage]);
	useEffect(() => {
		fetch(
			"/api/settings/set?setting=backgroundImageBlur&value=" +
				backgroundImageBlur
		);
	}, [backgroundImageBlur]);
	useEffect(() => {
		fetch(
			"/api/settings/set?setting=backgroundImageHomeScreenOnly&value=" +
				backgroundImageHomeScreenOnly
		);
	}, [backgroundImageHomeScreenOnly]);
	useEffect(() => {
		fetch("/api/settings/set?setting=colorScheme&value=" + colorScheme);
	}, [colorScheme]);
	useEffect(() => {
		fetch("/api/settings/set?setting=OSKButtonSize&value=" + OSKButtonSize);
	}, [OSKButtonSize]);
	useEffect(() => {
		fetch("/api/settings/set?setting=OSKButtonRadius&value=" + OSKButtonRadius);
	}, [OSKButtonRadius]);
	useEffect(() => {
		fetch("/api/settings/set?setting=fontFamily&value=" + fontFamily);
	}, [fontFamily]);
	useEffect(() => {
		fetch("/api/settings/set?setting=enableOpenDrop&value=" + enableOpenDrop);
	}, [enableOpenDrop]);
	useEffect(() => {
		fetch(
			"/api/settings/set?setting=openDropDisplayName&value=" +
				openDropDisplayName
		);
	}, [openDropDisplayName]);
	useEffect(() => {
		fetch("/api/settings/set?setting=enableWifi&value=" + enableWifi);
	}, [enableWifi]);
	/* -- Insert Settings Effects Here -- */



	React.useEffect(() => {
		/* -- AppList -- */
		fetch('/api/apps/list')
		  .then(res => res.json())
		  .then(data => {
			Promise.all(data.value.map((app: string) => import(`/apps/${app}/appInfo`).then((module) => module.default))).then((apps: any[]) => {
			  setInstalledApps(apps.map((app: any) => app() as InfotainmentApp));
			});
		  });
		/* -- AppList -- */
	  }, []);

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<SettingsContext.Provider
				value={{
					/* -- Font -- */
					fontFamily: fontFamily,
					setFontFamily: setFontFamily,
					/* -- Font -- */

					/* -- On Screen Keyboard -- */
					OSKButtonSize: OSKButtonSize,
					setOSKButtonSize: setOSKButtonSize,
					OSKButtonRadius: OSKButtonRadius,
					setOSKButtonRadius: setOSKButtonRadius,
					/* -- On Screen Keyboard -- */

					/* -- Background Image -- */
					useBackgroundImage: useBackgroundImage,
					setUseBackgroundImage: setUseBackgroundImage,
					backgroundImageBlur: backgroundImageBlur,
					setBackgroundImageBlur: setBackgroundImageBlur,
					backgroundImageHomeScreenOnly: backgroundImageHomeScreenOnly,
					setBackgroundImageHomeScreenOnly: setBackgroundImageHomeScreenOnly,
					/* -- Background Image -- */

					/* -- Open Drop -- */
					enableOpenDrop: enableOpenDrop,
					setEnableOpenDrop: setEnableOpenDrop,
					openDropDisplayName: openDropDisplayName,
					setOpenDropDisplayName: setOpenDropDisplayName,
					/* -- Open Drop -- */

					/* -- Wifi -- */
					enableWifi: enableWifi,
					setEnableWifi: setEnableWifi,
					/* -- Wifi -- */

					/* -- Misc -- */
					settingsLoaded: settingsLoaded,
					/* -- Misc -- */
				}}
			>
				<WifiContext.Provider
					value={{
						getStatus: () => {
							const request = new XMLHttpRequest();
							request.open("GET", "/api/wifi/status", false);
							request.send(null);
							return JSON.parse(request.responseText).value;
						},
						refetchNetworks: () => {
							fetch("/api/wifi/networks")
								.then((res) => res.json())
								.then((data) => {
									console.log(data.value);
									setNetworks(data.value);

									var arr: any[] = [];
									for (var i = 0; i < data.value.length; i++) {
										// eslint-disable-next-line no-loop-func
										if (!arr.find((v) => v.ssid === data.value[i].ssid)) {
											arr.push(data.value[i]);
										}
									}
									setFilteredNetworks(
										arr
											.filter(
												(v) => !currentNetworks.find((w) => w.ssid === v.ssid)
											)
											.filter(
												(v) => !savedNetworks.find((w) => w.ssid === v.ssid)
											)
									);
								});
						},
						networks: networks,
						filteredNetworks: filteredNetworks,
						refetchConnectedNetworks: () => {
							fetch("/api/wifi/current")
								.then((res) => res.json())
								.then((data) => {
									var arr: any[] = [];
									for (var i = 0; i < data.value.length; i++) {
										// eslint-disable-next-line no-loop-func
										if (!arr.find((v) => v.ssid === data.value[i].ssid)) {
											arr.push(data.value[i]);
										}
									}
									setCurrentNetworks(arr);
								});
						},
						connectedNetworks: currentNetworks,
						savedWifiNetworks: savedNetworks,
						refetchSavedWifiNetworks: () => {
							fetch("/api/wifi/saved")
								.then((res) => res.json())
								.then((data) => {
									setSavedNetworks(data.value);
								});
						},
						saveNetwork: (network) => {
							fetch("/api/wifi/save?network=" + JSON.stringify(network));
						},
						removeNetwork: (ssid) => {
							fetch("/api/wifi/remove?ssid=" + ssid);
						},
						connect: (network) => {
							fetch(
								"/api/wifi/connect?ssid=" +
									network.ssid +
									(network.password &&
										network.password.length !== 0 &&
										"&password=" + network.password)
							);
						},
						start: () => {
							fetch("/api/wifi/start");
						},
						stop: () => {
							fetch("/api/wifi/stop");
						},
						disconnect: () => {
							fetch("/api/wifi/disconnect");
						},
					}}
				>
					<AppContext.Provider
						value={{
							installedApps: React.useCallback(() => installedApps, [installedApps])(),
							setInstalledApps: setInstalledApps,
							currentApp: currentApp,
							setCurrentApp: setCurrentApp,
							openedApps: React.useCallback(() => openedApps, [openedApps])(),
							setOpenedApps: setOpenedApps,
						}}
					>
						<MantineProvider
							theme={{
								colorScheme,
								fontFamily: fontFamily !== "default" ? fontFamily : undefined,
							}}
							withGlobalStyles
							defaultProps={{
								Notification: { radius: "lg" },
								Paper: {
									radius: "lg",
									p: "md",
									shadow: "md",
									withBorder: true,
								},
							}}
						>
							<ModalsProvider>
								{installedApps.length > 0 ? <Manager /> : <LoadingOverlay visible loaderProps={{ size: 'xl' }} />}
							</ModalsProvider>
						</MantineProvider>
					</AppContext.Provider>
				</WifiContext.Provider>
			</SettingsContext.Provider>
		</ColorSchemeProvider>
	);
}
