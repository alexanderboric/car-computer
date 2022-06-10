import { Group, UnstyledButton, Text, useMantineTheme } from "@mantine/core";
import * as React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function SettingsButton({
	pageLink,
	label,
    icon
}: {
	pageLink: string;
	label: string;
    icon?: any;
}) {

	const location = useLocation();
	const theme = useMantineTheme();

	return (
		<>
			<UnstyledButton pl="xs" pr="xs" style={{backgroundColor: (location.pathname.endsWith(pageLink) && theme.colors.gray[8]), borderRadius: theme.radius.md }} component={Link} to={"/settings/" + pageLink}>
				<Group position="apart" noWrap mb={3} mt={3}>
					<Group>
                        {icon}
						<Text size="xl">{label}</Text>
					</Group>
					<MdChevronRight size={20} />
				</Group>
			</UnstyledButton>
		</>
	);
}
