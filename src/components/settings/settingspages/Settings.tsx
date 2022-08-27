import {
	Divider,
	SimpleGrid,
	Stack,
	Title,
} from "@mantine/core";
import * as React from "react";
import SettingsPageButton from "../elements/SettingsPageButton";
import SettingsContainer from "../organization/SettingsContainer";
import ActionlessIcon from "../../ActionlessIcon";
import { MdPalette, MdWifi } from "react-icons/md";
import AppearanceSettings from "./Appearance";
import ConnectivityPage from "./Connectivity";
import WifiSelectionPage from "./WifiSelection";

export default function Settings() {

	const [currentPage, setCurrentPage] = React.useState("");

	const [pageComponent, setPageComponent] = React.useState(null);

	React.useEffect(() => {
		switch (currentPage) {
			case "appearance":
				setPageComponent(<AppearanceSettings setCurrentPage={setCurrentPage}/>);
				break;
			case "connectivity":
				setPageComponent(<ConnectivityPage setCurrentPage={setCurrentPage} />);
				break;
			case "wifi":
				setPageComponent(<WifiSelectionPage setCurrentPage={setCurrentPage} />);
				break;
			case "":
				setPageComponent(null);
				break;
		}
	}, [currentPage]);

	return (
		<>
			<SimpleGrid mt={"sm"} cols={2}>
				<Stack ml={"xl"} mr={"xl"}>
					<Title>Settings</Title>
					<SettingsContainer>
						<SettingsPageButton
							icon={<ActionlessIcon color="indigo" icon={<MdPalette size={15} />} />}
							pageLink={"appearance"}
							label={"Appearance"} /* icon={<MdPreview />} */
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
						<Divider />
						<SettingsPageButton
							icon={<ActionlessIcon color="green" icon={<MdWifi size={15} />} />}
							pageLink={"connectivity"}
							label={"Connectivity"} /* icon={<MdWifi />} */
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							/>
					</SettingsContainer>
				</Stack>
				{pageComponent}
			</SimpleGrid>
		</>
	);
}
