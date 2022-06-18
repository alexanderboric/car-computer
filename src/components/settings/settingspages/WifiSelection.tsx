import { Group, UnstyledButton, Text, Loader } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import * as React from "react";
import {
	MdCheck,
	MdChevronRight,
	MdInfo,
	MdLock,
	MdPublic,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { WifiContext } from "../../../lib/context";
import { WifiNetwork } from "../../../lib/types";
import SettingsContainer from "../organization/SettingsContainer";
import SettingsPage from "../organization/SettingsPage";

export default function WifiSelectionPage() {
	const {
		getStatus,
		networks,
		filteredNetworks,
		refetchNetworks,
		refetchConnectedNetworks,
		refetchSavedWifiNetworks,
		savedWifiNetworks,
		connectedNetworks,
		start,
		stop,
	} = React.useContext(WifiContext);

	React.useEffect(() => {
		wifiUpdateInterval.start();
		return function cleanup() {
			wifiUpdateInterval.stop();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [myNetworks, setMyNetworks] = React.useState<WifiNetwork[]>([]);

	const wifiUpdateInterval = useInterval(() => {
		refetchConnectedNetworks();
		refetchSavedWifiNetworks();
		refetchNetworks();

		let filtered: WifiNetwork[] = networks.filter(
			(net) =>
				savedWifiNetworks.find((v) => v.ssid === net.ssid) ||
				connectedNetworks.find((v) => v.ssid === net.ssid)
		);
		let arr: WifiNetwork[] = [];
		for (var i = 0; i < filtered.length; i++) {
			// eslint-disable-next-line no-loop-func
			if (!arr.find((v) => v.ssid === filtered[i].ssid)) {
				arr.push(filtered[i]);
			}
		}
		setMyNetworks(arr);
	}, 5000);

	const NetworkNode = (network: WifiNetwork) => {
		return (
			<>
				<UnstyledButton pl="xs" pr="xs">
					<Group position="apart" noWrap mb={3} mt={3}>
						<Group>
							{connectedNetworks.find((v) => v.ssid === network.ssid) && (
								<MdCheck size={20} />
							)}
							<Text size="xl">{network.ssid}</Text>
						</Group>
						{network.security === "WPA2" ? (
							<MdLock size={20} />
						) : (
							<MdPublic size={20} />
						)}
					</Group>
				</UnstyledButton>
			</>
		);
	};

	return (
		<>
			<SettingsPage title={"WLAN Selection"} backLink="/settings/connectivity">
				<SettingsContainer
					label={"My Networks (" + myNetworks.length + ")"}
					bottomText="Here you can find WLAN networks, which credentials are already saved in the system."
				>
					{myNetworks.map((network) => NetworkNode(network))}
				</SettingsContainer>
				<SettingsContainer
					label={"Available Networks (" + filteredNetworks.length + ")"}
					bottomText="The network list is being updated every 5 seconds."
				>
					{filteredNetworks.map((network) => NetworkNode(network))}
				</SettingsContainer>
			</SettingsPage>
		</>
	);
}
