import * as React from "react";
import SettingsContainer from "../organization/SettingsContainer";
import SettingsPage from "../organization/SettingsPage";

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
