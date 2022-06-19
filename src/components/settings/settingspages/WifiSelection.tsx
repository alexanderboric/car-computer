import {
	Group,
	UnstyledButton,
	Text,
	Title,
	Stack,
	Button,
	TextInput,
} from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import * as React from "react";
import {
	MdCheck,
	MdLock,
	MdPublic,
	MdSave,
} from "react-icons/md";
import { WifiContext } from "../../../lib/context";
import { WifiNetwork } from "../../../lib/types";
import OnScreenKeyboard from "../../OnScreenKeyboard";
import SettingsButton from "../elements/SettingsButton";
import SettingsContainer from "../organization/SettingsContainer";
import SettingsPage from "../organization/SettingsPage";

export default function WifiSelectionPage() {
	const {
		networks,
		filteredNetworks,
		refetchNetworks,
		refetchConnectedNetworks,
		refetchSavedWifiNetworks,
		savedWifiNetworks,
		connectedNetworks,
		connect,
		removeNetwork,
		disconnect,
	} = React.useContext(WifiContext);

	const modals = useModals();

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

	const [input, setInput] = React.useState("");
	const inputField = React.useRef<HTMLInputElement>(null);

	const NetworkNode = (network: WifiNetwork) => {
		return (
			<>
				<UnstyledButton
					pl="xs"
					pr="xs"
					onClick={() => {
						const id1 = modals.openModal({
							title: <Title>{network.ssid}</Title>,
							size: "xl",
							centered: false,
							children: (
								<Stack spacing="xl">
									<SettingsContainer label="Actions">
										{connectedNetworks.find((v) => v.ssid === network.ssid) && (
											<>
												<SettingsButton
													label={"Disconnect"}
													onClick={disconnect}
												/>
											</>
										)}
										{savedWifiNetworks.find((v) => v.ssid === network.ssid) && (
											<>
												<SettingsButton
													label={"Remove"}
													onClick={() => removeNetwork(network.ssid)}
												/>
											</>
										)}
										{!connectedNetworks.find(
											(v) => v.ssid === network.ssid
										) && (
											<>
												<SettingsButton
													label={"Connect"}
													onClick={() => {
														if (
															savedWifiNetworks.find(
																(v) => v.ssid === network.ssid
															)
														) {
                                                            connect(savedWifiNetworks.find((v) => v.ssid === network.ssid));
                                                            modals.closeModal(id1);
														} else {
															const id = modals.openModal({
																title: <Title>Connect to {network.ssid}</Title>,
																size: "xl",
																centered: false,
																children: (
																	<Stack spacing="xl">
																		<TextInput
																			ref={inputField}
																			size="xl"
																			radius="md"
																			placeholder={"Password"}
																			defaultValue={input}
																			onChange={(event: InputEvent) => {
																				setInput(
																					(
																						event.currentTarget as HTMLInputElement
																					).value
																				);
																				console.log(
																					(
																						event.currentTarget as HTMLInputElement
																					).value
																				);
																			}}
																			mt="xl"
																			readOnly
																		/>
																		<Button
																			mt="xl"
																			radius="md"
																			variant="default"
																			fullWidth
																			onClick={() => {
																				modals.closeModal(id);
																				connect({
																					ssid: network.ssid,
																					password: inputField.current.value,
																				});
																			}}
																			size="xl"
																		>
																			Connect
																		</Button>
																		<OnScreenKeyboard
																			text={""}
																			onChange={(newText) => {
																				inputField.current.value = newText;
																				setInput(newText);
																			}}
																		/>
																	</Stack>
																),
															});
														}
													}}
												/>
											</>
										)}
									</SettingsContainer>
									<SettingsContainer label="Information">
										<Text size="lg">SSID: {network.ssid}</Text>
										<Text size="lg">Security: {network.security}</Text>
										<Text size="lg">
											Security Flags: {network.security_flags}
										</Text>
										{network.mode && (
											<Text size="lg">Mode: {network.mode}</Text>
										)}
										<Text size="lg">Signal Strength: {network.quality}%</Text>
										<Text size="lg">Frequency: {network.frequency} Mhz</Text>
										<Text size="lg">Channel: {network.channel}</Text>
									</SettingsContainer>
								</Stack>
							),
						});
					}}
				>
					<Group position="apart" noWrap mb={3} mt={3}>
						<Group>
							{connectedNetworks.find((v) => v.ssid === network.ssid) ? (
								<MdCheck size={20} />
							) : (savedWifiNetworks.find((v) => v.ssid === network.ssid) && <MdSave size={20} />)}
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
					{myNetworks.length === 0 && (
						<Text size="lg">
							No networks found or network list still loading.
						</Text>
					)}
				</SettingsContainer>
				<SettingsContainer
					label={"Available Networks (" + filteredNetworks.length + ")"}
					bottomText="The network list is being updated every 5 seconds."
				>
					{filteredNetworks.map((network) => NetworkNode(network))}
					{filteredNetworks.length === 0 && (
						<Text size="lg">
							No networks found or network list still loading.
						</Text>
					)}
				</SettingsContainer>
			</SettingsPage>
		</>
	);
}
