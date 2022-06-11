import { Divider, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { BackgroundContext } from "../../../lib/context";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsSlider from "../SettingsSlider";
import SettingsSwitch from "../SettingsSwitch";

export default function AppearanceSettings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { blur, setBlur, useImage, setUseImage, homeScreenOnly, setHomeScreenOnly } = React.useContext(BackgroundContext);
	return (
		<SettingsPage title={"Appearance"}>
			<SettingsContainer label="Theme">
				<SettingsSwitch
					label={"Dark Mode"}
					checked={colorScheme === "dark"}
					onSwitch={() => toggleColorScheme()}
				/>
			</SettingsContainer>
			<SettingsContainer label="Background">
				<SettingsSwitch
					label={"Use Background Image"}
					checked={useImage}
					onSwitch={(val) => {
						setUseImage(val);
					}}
				/>
				<Divider />
				<SettingsSwitch label={"HomeScreen only"} checked={homeScreenOnly} onSwitch={setHomeScreenOnly} />
				<Divider />
				<SettingsSlider label={"Background Blur"} min={0} max={100} value={blur} onChange={(num) => {
					setBlur(num);
				}} />
			</SettingsContainer>
		</SettingsPage>
	);
}
