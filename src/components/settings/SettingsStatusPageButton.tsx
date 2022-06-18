import {
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
} from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SettingsStatusPageButton({
	label,
	status,
	pageLink,
}: {
	label: string;
	status: string;
	pageLink: string;
}) {
	const theme = useMantineTheme();
	return (
		<>
			<UnstyledButton
				pl="xs"
				pr="xs"
				style={{ borderRadius: theme.radius.md }}
				component={Link} to={"/settings/" + pageLink}
			>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
						<Text size="xl">{label}</Text>
					</Group>
					<Group spacing={5}>
						<Text weight={550} size="xl">
							{status}
						</Text>
						<MdChevronRight size={20} />
					</Group>
				</Group>
			</UnstyledButton>
		</>
	);
}
