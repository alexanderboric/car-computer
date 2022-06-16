import { Divider } from "@mantine/core";
import * as React from "react";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsStatus from "../SettingsStatus";
import SettingsSwitch from "../SettingsSwitch";
import SettingsTextInput from "../SettingsTextInput";

export default function ConnectivityPage() {

	const [openDropStatus, setOpenDropStatus] = React.useState("Unknown");

	React.useEffect(() => {
		const fetchData = async () => {
			fetch("/api/opendrop/status").then(res => res.json()).then(data => {
				setOpenDropStatus(data.value);
			});
		};
		fetchData();
	}, []);


	return (
		<>
			<SettingsPage title={"Connectivity"}>
				<SettingsContainer label="OpenDrop" bottomText="OpenDrop is an open AirDrop implementation. Please note that this feature is experimental and might have to be restarted to work correctly.">
                    <SettingsSwitch label={"Enable OpenDrop"} onSwitch={() => {}} />
                    <Divider />
                    <SettingsStatus label={"OpenDrop Status"} status={openDropStatus}/>
                    <Divider />
                    <SettingsTextInput label={"OpenDrop Display Name"} text={"Jarvis"} onChange={() => {}}/>
                </SettingsContainer>
			</SettingsPage>
		</>
	);
}
