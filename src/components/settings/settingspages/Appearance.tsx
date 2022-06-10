import { Divider, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsSwitch from "../SettingsSwitch";

export default function AppearanceSettings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	return (
		<SettingsPage title={"Appearance"}>
			<SettingsContainer label="Theme">
				<SettingsSwitch
					label={"Dark Mode"}
					checked={colorScheme === "dark"}
					onSwitch={() => toggleColorScheme()}
				/>
				<Divider />
			</SettingsContainer>
			<SettingsContainer label="Background">
				<SettingsSwitch
					label={"Use Background Image"}
					checked={false}
					onSwitch={() => {}}
				/>
				<Divider />
			</SettingsContainer>
		</SettingsPage>
	);
}
