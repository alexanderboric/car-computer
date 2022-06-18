import {
	Divider,
	SimpleGrid,
	Stack,
	Title,
} from "@mantine/core";
import * as React from "react";
import { Outlet } from "react-router-dom";
import SettingsPageButton from "./SettingsPageButton";
import SettingsContainer from "./SettingsContainer";
import ActionlessIcon from "../ActionlessIcon";
import { MdPalette } from "react-icons/md";

export default function Settings() {

	return (
		<>
			<SimpleGrid mt={"sm"} cols={2}>
				<Stack ml={"xl"} mr={"xl"}>
					<Title>Settings</Title>
					<SettingsContainer>
						<SettingsPageButton
							icon={<ActionlessIcon color="blue" icon={<MdPalette />} />}
							pageLink={"appearance"}
							label={"Appearance"} /* icon={<MdPreview />} */
						/>
						<Divider />
						<SettingsPageButton
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
