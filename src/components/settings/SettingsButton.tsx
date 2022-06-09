import { Group, UnstyledButton, Text, Button } from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SettingsButton({
	pageLink,
	label,
    icon
}: {
	pageLink: string;
	label: string;
    icon?: any;
}) {
	return (
		<>
			<UnstyledButton component={Link} to={"/settings/"}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
                        {icon}
						<Text size="xl">{label}</Text>
					</Group>
					<MdChevronRight />
				</Group>
			</UnstyledButton>
		</>
	);
}
