import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";

export default function WifiSelectionPage() {
	return (
		<>
			<SettingsPage title={"WLAN Selection"}>
                <SettingsContainer label="My Networks">
                </SettingsContainer>
                <SettingsContainer label="Available Networks">
                </SettingsContainer>
            </SettingsPage>
		</>
	);
}
