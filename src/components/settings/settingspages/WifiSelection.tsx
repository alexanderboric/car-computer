import { Group, UnstyledButton, Text } from "@mantine/core";
import * as React from "react";
import { MdCheck, MdChevronRight, MdInfo, MdLock, MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
import { WifiContext } from "../../../lib/context";
import { WifiNetwork } from "../../../lib/types";
import SettingsContainer from "../organization/SettingsContainer";
import SettingsPage from "../organization/SettingsPage";

export default function WifiSelectionPage() {
	const { getStatus, filteredNetworks, refetchNetworks, start, stop } =
		React.useContext(WifiContext);

	React.useEffect(() => {
		refetchNetworks();
	}, []);

	const NetworkNode = (network: WifiNetwork) => {
		return (
			<>
				<UnstyledButton
					pl="xs"
					pr="xs"
					component={Link}
					to={"/settings/network" + network.ssid}
				>
					<Group position="apart" noWrap mb={3} mt={3}>
						<Group>
							<MdCheck size={20} />
							<Text size="xl">{network.ssid}</Text>
						</Group>
                        {network.security === "WPA2" ? <MdLock size={20} /> : <MdPublic size={20} />}
					</Group>
				</UnstyledButton>
			</>
		);
	};

	return (
		<>
			<SettingsPage title={"WLAN Selection"} backLink="/settings/connectivity">
				<SettingsContainer
					label="My Networks"
					bottomText="Here you can find WLAN networks, which credentials are already saved in the system."
				>
					<></>
				</SettingsContainer>
				<SettingsContainer label={"Available Networks (" + filteredNetworks.length + ")"}>{filteredNetworks.map((network) => NetworkNode(network))}</SettingsContainer>
			</SettingsPage>
		</>
	);
}
