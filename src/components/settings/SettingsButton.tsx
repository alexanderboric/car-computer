import { Group, UnstyledButton, Text } from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SettingsButton({ pageLink }: { pageLink: string }) {
	return (
		<>
			<UnstyledButton
				sx={(theme) => ({
					fontSize: theme.fontSizes.md,
					fontWeight: 500,
				})}
                
				component={Link}
				to={"/settings/" + pageLink}
			>
				<Group position="apart">
					<Text>Appearance</Text>
					<MdChevronRight />
				</Group>
			</UnstyledButton>
		</>
	);
}
