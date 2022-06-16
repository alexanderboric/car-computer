import { Divider } from "@mantine/core";
import * as React from "react";
import { SettingsContext } from "../../../lib/context";
import SettingsContainer from "../SettingsContainer";
import SettingsPage from "../SettingsPage";
import SettingsStatus from "../SettingsStatus";
import SettingsSwitch from "../SettingsSwitch";
import SettingsTextInput from "../SettingsTextInput";

export default function ConnectivityPage() {

	const [openDropStatus, setOpenDropStatus] = React.useState("Unknown");
	const { enableOpenDrop, setEnableOpenDrop, openDropDisplayName, setOpenDropDisplayName} = React.useContext(SettingsContext);

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
                    <SettingsSwitch label={"Enable OpenDrop"} checked={enableOpenDrop} onSwitch={setEnableOpenDrop} />
                    <Divider />
                    <SettingsStatus label={"OpenDrop Status"} status={openDropStatus}/>
                    <Divider />
                    <SettingsTextInput label={"OpenDrop Display Name"} text={openDropDisplayName} onChange={setOpenDropDisplayName}/>
                </SettingsContainer>
			</SettingsPage>
		</>
	);
}
