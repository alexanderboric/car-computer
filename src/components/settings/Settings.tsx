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
import { Link, Outlet } from "react-router-dom";
import { MdAddAlert, MdChevronRight, MdPreview } from "react-icons/md";
import SettingsButton from "./SettingsButton";
import SettingsContainer from "./SettingsContainer";

export default function Settings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
						<Switch
							label="Dark mode"
							checked={colorScheme === "dark"}
							onChange={() => toggleColorScheme()}
						/>
						<Divider />
					</SettingsContainer>
				</Stack>
				<Outlet />
			</SimpleGrid>
		</>
	);
}
