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
import { MdChevronRight } from "react-icons/md";

export default function Settings() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<SimpleGrid mt={"sm"} cols={2}>
				<Stack ml={"xl"} mr={"xl"}>
					<Title>Settings</Title>
					<Paper
						withBorder
						sx={(theme) => ({
							// subscribe to color scheme changes
							backgroundColor:
								theme.colorScheme === "dark"
									? theme.colors.dark[6]
									: theme.colors.gray[1],
						})}
					>
						<Stack spacing={5}>
							<UnstyledButton
								sx={(theme) => ({
									fontSize: theme.fontSizes.md,
									fontWeight: 500,
								})}
								component={Link}
								to="/settings/appearance"
							>
								<Group position="apart">
									<Text>Appearance</Text>
									<MdChevronRight />
								</Group>
							</UnstyledButton>
							<Divider />
							<Switch
								label="Dark mode"
								checked={colorScheme === "dark"}
								onChange={() => toggleColorScheme()}
							/>
							<Divider />
						</Stack>
					</Paper>
				</Stack>
				<Outlet />
			</SimpleGrid>
		</>
	);
}
