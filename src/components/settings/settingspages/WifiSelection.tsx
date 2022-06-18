import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";

export default function WifiSelectionPage() {
	return (
		<>
			<SettingsPage title={"WLAN Selection"} backLink="/settings/connectivity">
                <SettingsContainer label="My Networks" bottomText="Here you can find WLAN networks, which credentials are already saved in the system.">
                </SettingsContainer>
                <SettingsContainer label="Available Networks">
                </SettingsContainer>
            </SettingsPage>
		</>
	);
}
