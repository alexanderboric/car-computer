import {
	Divider,
	Text,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Title,
	UnstyledButton,
} from "@mantine/core";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { MdChevronRight } from "react-icons/md";

export default function Settings() {
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
									: theme.colors.dark[2],
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
								<Group align="apart" grow style={{width: "125%"}}>
									<Text>Appearance</Text>
                  <MdChevronRight />
								</Group>
							</UnstyledButton>
							<Divider />
							<UnstyledButton
								sx={(theme) => ({
									fontSize: theme.fontSizes.md,
									fontWeight: 500,
								})}
								component={Link}
								to="/settings/appearance"
							>
								Appearance
							</UnstyledButton>
							<Divider />
						</Stack>
					</Paper>
				</Stack>
				<Outlet />
			</SimpleGrid>
		</>
	);
}
