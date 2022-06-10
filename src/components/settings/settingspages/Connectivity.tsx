import { Divider } from "@mantine/core";
import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsStatus from "../SettingsStatus";
import SettingsSwitch from "../SettingsSwitch";
import SettingsTextInput from "../SettingsTextInput";

export default function ConnectivityPage() {
	return (
		<>
			<SettingsPage title={"Connectivity"}>
				<SettingsContainer label="OpenDrop" bottomText="OpenDrop is an open AirDrop implementation. Please note that this feature is experimental and might have to be restarted to work correctly.">
                    <SettingsSwitch label={"Enable OpenDrop"} onSwitch={() => {}} />
                    <Divider />
                    <SettingsStatus label={"OpenDrop Status"} status={"Disabled"}/>
                    <Divider />
                    <SettingsTextInput label={"OpenDrop Display Name"} text={"Jarvis"} onChange={() => {}}/>
                </SettingsContainer>
			</SettingsPage>
		</>
	);
}