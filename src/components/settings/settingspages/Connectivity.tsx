import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsSwitch from "../SettingsSwitch";

export default function ConnectivityPage() {
	return (
		<>
			<SettingsPage title={"Connectivity"}>
				<SettingsContainer label="OpenDrop" bottomText="OpenDrop is an open AirDrop implementation. Please note that this feature is experimental and might have to be restarted to work correctly.">
                    <SettingsSwitch label={"Enable AirDrop"} onSwitch={() => {}} />
                </SettingsContainer>
			</SettingsPage>
		</>
	);
}
