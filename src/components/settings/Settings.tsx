import {
	Divider,
	Text,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Title,
	UnstyledButton,
	Switch,
	useMantineColorScheme,
} from "@mantine/core";
import * as React from "react";
import { Outlet } from "react-router-dom";
import SettingsButton from "./SettingsButton";
import SettingsContainer from "./SettingsContainer";

export default function Settings() {

	return (
		<>
			<SimpleGrid mt={"sm"} cols={2}>
				<Stack ml={"xl"} mr={"xl"}>
					<Title>Settings</Title>
					<SettingsContainer>
						<SettingsButton
							pageLink={"appearance"}
							label={"Appearance"} /* icon={<MdPreview />} */
						/>
						<Divider />
					</SettingsContainer>
				</Stack>
				<Outlet />
			</SimpleGrid>
		</>
	);
}
