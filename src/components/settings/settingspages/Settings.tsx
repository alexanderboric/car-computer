import {
	Divider,
	SimpleGrid,
	Stack,
	Title,
} from "@mantine/core";
import * as React from "react";
import { Outlet } from "react-router-dom";
import SettingsPageButton from "../SettingsPageButton";
import SettingsContainer from "../organization/SettingsContainer";
import ActionlessIcon from "../../ActionlessIcon";
import { MdPalette, MdWifi } from "react-icons/md";

export default function Settings() {

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
						/>
						<Divider />
						<SettingsPageButton
							icon={<ActionlessIcon color="green" icon={<MdWifi size={15} />} />}
							pageLink={"connectivity"}
							label={"Connectivity"} /* icon={<MdWifi />} */
							/>
					</SettingsContainer>
				</Stack>
				<Outlet />
			</SimpleGrid>
		</>
	);
}
